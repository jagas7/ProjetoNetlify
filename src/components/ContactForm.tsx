import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import Button from "./Button";

type FormState = {
  name: string;
  email: string;
  message: string;
  company: string;
};

type ApiResponse = {
  message?: string;
  error?: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  message: "",
  company: "",
};

const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string | undefined;

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialForm);
  const [isSending, setIsSending] = useState(false);
  const [challengeCompleted, setChallengeCompleted] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  function isValidForm() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      toast.error("Informe seu nome.");
      return false;
    }

    if (!emailRegex.test(formData.email)) {
      toast.error("Informe um e-mail válido.");
      return false;
    }

    if (!formData.message.trim()) {
      toast.error("Escreva sua mensagem.");
      return false;
    }

    if (recaptchaSiteKey && !challengeCompleted) {
      toast.error("Confirme o reCAPTCHA antes de enviar.");
      return false;
    }

    return true;
  }

  function handleCompleteChallenge(token: string | null) {
    if (!token) {
      setChallengeCompleted(false);
      setCaptchaToken(null);
      return;
    }

    setChallengeCompleted(true);
    setCaptchaToken(token);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isValidForm()) return;

    setIsSending(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          company: formData.company,
          recaptchaToken: captchaToken,
        }),
      });

      const body = (await response.json().catch(() => ({}))) as ApiResponse;

      if (!response.ok) {
        throw new Error(body.error ?? body.message ?? "Erro ao enviar mensagem.");
      }

      toast.success(body.message ?? "E-mail enviado com sucesso.");
      setFormData(initialForm);
      setChallengeCompleted(false);
      setCaptchaToken(null);
      recaptchaRef.current?.reset();
    } catch (error) {
      const message = error instanceof Error ? error.message : "Não foi possível enviar agora.";
      toast.error(message);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section id="contact" className="contact container">
      <header className="section-header contact-header">
        <p>Envie sua dúvida</p>
        <h2>Entre em contato</h2>
        <span>
          Entre em contato, estamos dispostos a tirar qualquer dúvida, montar um orçamento ou ajudar na apresentação do projeto.
        </span>
      </header>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="name">
          Nome
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Seu nome"
          autoComplete="name"
          required
        />

        <label className="sr-only" htmlFor="email">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Seu melhor e-mail"
          autoComplete="email"
          required
        />

        <label className="sr-only" htmlFor="message">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Motivo do contato. Ex: gostaria de testar a plataforma EcoPulse."
          rows={4}
          required
        />

        <label className="honeypot" aria-hidden="true" tabIndex={-1}>
          Empresa
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </label>

        {recaptchaSiteKey ? (
          <div className="recaptcha-wrapper">
            <ReCAPTCHA ref={recaptchaRef} sitekey={recaptchaSiteKey} onChange={handleCompleteChallenge} />
          </div>
        ) : null}

        <Button type="submit" disabled={isSending}>
          {isSending ? "Enviando..." : "Enviar"}
        </Button>
      </form>
    </section>
  );
}
