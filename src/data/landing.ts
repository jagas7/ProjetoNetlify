export type NavLink = {
  label: string;
  href: string;
};

export type SolutionCard = {
  icon: string;
  title: string;
  text: string;
};

export type QuickFeature = {
  icon: string;
  title: string;
  text: string;
};

export type Testimonial = {
  name: string;
  role: string;
  initials: string;
  image?: string;
  rating: number;
  text: string;
};

export type Plan = {
  name: string;
  description: string;
  price: string;
  period?: string;
  cta: string;
  featured?: boolean;
  bonus?: string;
  benefits: string[];
};

export type FooterColumn = {
  title: string;
  links: string[];
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "Soluções", href: "#solution" },
  { label: "Depoimentos", href: "#testimonials" },
  { label: "Preços", href: "#pricing" },
  { label: "Contato", href: "#contact" },
];

export const solutionCards: SolutionCard[] = [
  {
    icon: "pulse",
    title: "Consumo em tempo real",
    text: "Acompanhe energia, custos e metas por setor em um painel claro para desktop e celular.",
  },
  {
    icon: "leaf",
    title: "Metas sustentáveis",
    text: "Crie metas de redução, acompanhe indicadores verdes e transforme pequenas ações em economia.",
  },
  {
    icon: "chart",
    title: "Relatórios inteligentes",
    text: "Receba alertas e resumos automáticos para agir antes que desperdícios virem custo fixo.",
  },
];

export const quickFeatures: QuickFeature[] = [
  {
    icon: "link",
    title: "Plano de economia",
    text: "Organize sensores, planilhas e histórico de contas em um só lugar.",
  },
  {
    icon: "stack",
    title: "Análise de mercado",
    text: "Compare metas, previsões e períodos para priorizar as melhores decisões.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Marina Costa",
    role: "Gestora de operações",
    initials: "MC",
    rating: 5,
    text: "A EcoPulse mostrou onde nossa energia estava escapando. Em poucas semanas, a equipe passou a acompanhar metas com muito mais clareza.",
  },
  {
    name: "Rafael Lima",
    role: "Coordenador financeiro",
    initials: "RL",
    rating: 5,
    text: "Antes os dados ficavam espalhados. Agora usamos um único painel para entender consumo, custo e oportunidades de redução.",
  },
  {
    name: "Bianca Alves",
    role: "Consultora ambiental",
    initials: "BA",
    rating: 4,
    text: "O visual simples facilitou a apresentação para clientes pequenos. Eles entenderam rapidamente onde poderiam economizar.",
  },
  {
    name: "João Pereira",
    role: "Analista de facilities",
    initials: "JP",
    rating: 5,
    text: "Os alertas ajudaram nossa rotina. Quando um setor foge do padrão, conseguimos agir no mesmo dia.",
  },
];

export const plans: Plan[] = [
  {
    name: "Básico",
    description: "Comece a medir consumo e testar a plataforma.",
    price: "Grátis",
    cta: "Baixar agora",
    benefits: ["1 unidade cadastrada", "Relatório mensal", "3 indicadores por dia", "Suporte por e-mail"],
  },
  {
    name: "Premium",
    description: "Para equipes que precisam de alertas e metas automáticas.",
    price: "R$ 29,90",
    period: "/mês",
    cta: "Experimente de graça",
    featured: true,
    bonus: "7 dias grátis",
    benefits: ["Unidades ilimitadas", "Alertas de pico", "Relatórios semanais", "Metas de economia"],
  },
  {
    name: "Empresarial",
    description: "Para operações com várias unidades e acompanhamento dedicado.",
    price: "R$ 79,90",
    period: "/mês por unidade",
    cta: "Falar com vendas",
    benefits: ["Dashboard executivo", "Integrações sob demanda", "Treinamento da equipe", "Suporte prioritário"],
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Empresa",
    links: ["Sobre nós", "Faça parte do time", "Blog"],
  },
  {
    title: "Funcionalidades",
    links: ["Marketing", "Análise de dados", "Bot discord", "API"],
  },
  {
    title: "Recursos",
    links: ["iOS e Android", "Teste a Demo", "Clientes", "Central de ajuda"],
  },
];
