import type { Handler, HandlerEvent } from "@netlify/functions";
import nodemailer from "nodemailer";

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
  company?: string;
  recaptchaToken?: string;
}

const REQUIRED_ENV = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"];

function resolveAllowedOrigin(origin: string) {
  const rawOrigin = process.env.ALLOWED_ORIGIN ?? process.env.ALLOWED_ORIGINS ?? "*";

  if (rawOrigin === "*") return "*";

  const allowedOrigins = rawOrigin
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  if (allowedOrigins.includes(origin)) return origin;

  return allowedOrigins[0] ?? origin;
}

function corsHeaders(origin: string) {
  return {
    "Access-Control-Allow-Origin": resolveAllowedOrigin(origin),
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
  };
}

function json(statusCode: number, body: Record<string, string>, headers: Record<string, string>) {
  return {
    statusCode,
    headers,
    body: JSON.stringify(body),
  };
}

function parsePayload(event: HandlerEvent): ContactPayload | null {
  try {
    return JSON.parse(event.body ?? "{}") as ContactPayload;
  } catch {
    return null;
  }
}

function escapeHtml(value = "") {
  return value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };

    return entities[char];
  });
}

function validateEnvironment() {
  const missing = REQUIRED_ENV.filter((key) => !process.env[key]);
  const destination = process.env.CONTACT_EMAIL ?? process.env.MAIL_TO;

  if (!destination) {
    missing.push("CONTACT_EMAIL");
  }

  if (missing.length > 0) {
    throw new Error(`Variaveis de ambiente ausentes: ${missing.join(", ")}`);
  }
}

export const handler: Handler = async (event) => {
  const origin = event.headers.origin ?? event.headers.Origin ?? "";
  const headers = corsHeaders(origin);

  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers,
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return json(405, { error: "Método não permitido." }, headers);
  }

  const payload = parsePayload(event);

  if (!payload) {
    return json(400, { error: "Body inválido." }, headers);
  }

  const { name = "", email = "", message = "", company = "" } = payload;

  if (company.trim()) {
    return json(200, { message: "E-mail enviado com sucesso." }, headers);
  }

  if (!email.trim() || !message.trim()) {
    return json(422, { error: "Campos obrigatórios: email, message." }, headers);
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return json(422, { error: "E-mail inválido." }, headers);
  }

  try {
    validateEnvironment();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const safeName = escapeHtml(name.trim() || "Visitante");
    const safeEmail = escapeHtml(email.trim());
    const safeMessage = escapeHtml(message.trim()).replace(/\n/g, "<br />");

    await transporter.sendMail({
      from: process.env.MAIL_FROM ?? process.env.SMTP_USER,
      replyTo: email.trim(),
      to: process.env.CONTACT_EMAIL ?? process.env.MAIL_TO,
      subject: `[EcoPulse] Nova mensagem Landing Page`,
      text: [
        "Nova mensagem de contato pela landing page EcoPulse.",
        "",
        `Nome: ${name.trim() || "Visitante"}`,
        `E-mail: ${email.trim()}`,
        "",
        "Mensagem:",
        message.trim(),
      ].join("\n"),
      html: `
        <h2>Nova mensagem de contato</h2>
        <p><strong>Nome:</strong> ${safeName}</p>
        <p><strong>E-mail:</strong> ${safeEmail}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    return json(200, { message: "E-mail enviado com sucesso." }, headers);
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return json(500, { error: "Falha ao enviar o e-mail. Tente novamente mais tarde." }, headers);
  }
};
