// Conteúdo do portfólio — edite aqui sem mexer no layout.

export const profile = {
  name: "Brenno Augusto",
  email: "brenno122712@gmail.com",
  phone: "+55 11 93009-7018",
  whatsapp: "https://wa.me/5511930097018",
  // TODO: substituir pelo endereço exato do perfil do LinkedIn.
  linkedin: "https://www.linkedin.com/search/results/people/?keywords=Brenno%20Augusto",
  location: "Bragança Paulista, SP",
};

export const traits = [
  "Facilidade de aprendizado",
  "Resolução de problemas",
  "Proatividade",
  "Trabalho em equipe",
  "Adaptabilidade",
  "Resiliência",
];

export const skillGroups = [
  { id: "01", title: "Programação", icon: "code", items: ["Python", "Java", "PHP"] },
  { id: "02", title: "Desenvolvimento web", icon: "globe", items: ["HTML", "CSS"] },
  { id: "03", title: "Tecnologia e hardware", icon: "cpu", items: ["Manutenção de computadores", "Eletroeletrônica"] },
  { id: "04", title: "Outros conhecimentos", icon: "layers", items: ["Arduino", "Introdução à robótica", "Computação em nuvem", "Fundamentos de cibersegurança"] },
] as const;

export type Experience = {
  org: string;
  role: string;
  period: string;
  points: string[];
  featured?: boolean;
};

export const experiences: Experience[] = [
  {
    org: "Edição de vídeo",
    role: "Editor de vídeo",
    period: "2018 — 2026",
    featured: true,
    points: [
      "Produção de roteiros.",
      "Edição e montagem de vídeos conforme as necessidades dos clientes.",
      "Tradução de legendas do inglês e espanhol para português.",
      "Edição 3D.",
    ],
  },
  {
    org: "Exército Brasileiro — Tiro de Guerra 02-009",
    role: "Soldado",
    period: "2023",
    points: [
      "Participação em trabalhos voluntários para instituições e eventos da cidade.",
      "Apoio solidário ao CRAS e a outras instituições.",
    ],
  },
  {
    org: "Perfil Metal",
    role: "Eletricista de Manutenção Eletroeletrônica",
    period: "2022",
    points: [
      "Manutenção corretiva e preventiva.",
      "Monitoramento de máquinas.",
      "Identificação de falhas e apoio à continuidade da produção.",
      "Organização e conservação dos equipamentos.",
    ],
  },
  {
    org: "Freelancer",
    role: "Garçom",
    period: "2018 — 2019",
    points: ["Organização do ambiente de trabalho.", "Atendimento e suporte durante eventos."],
  },
];

export const education = {
  academic: {
    org: "FATEC — Bragança Paulista",
    course: "Análise e Desenvolvimento de Sistemas",
    period: "2024 — 2027",
  },
  courses: [
    { org: "SENAI — Bragança Paulista", period: "2021 — 2023", items: ["Arduino", "Nuvem AI900", "Introdução à Robótica"] },
    { org: "Cisco Networking", period: "2021", items: ["Cyber Security"] },
  ],
};

export type Project = {
  name: string;
  description: string;
  tags: string[];
  category: string;
  demo?: string;
  repo?: string;
  image?: string;
  example?: boolean; // marca conteúdo demonstrativo temporário
};

// Nenhum projeto real informado ainda. Os itens abaixo são EXEMPLOS de layout
// e aparecem marcados como tal. Substitua-os por projetos reais.
export const projects: Project[] = [
  { name: "Espaço para projeto", description: "Exemplo temporário — este card será substituído por um projeto real com descrição, tecnologias e links.", tags: ["Python"], category: "Back-end", example: true },
  { name: "Espaço para projeto", description: "Exemplo temporário — estrutura pronta para um projeto web com demonstração e repositório.", tags: ["HTML", "CSS"], category: "Web", example: true },
  { name: "Espaço para projeto", description: "Exemplo temporário — reservado para um projeto com Arduino ou eletrônica.", tags: ["Arduino"], category: "Hardware", example: true },
];

export const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Espanhol", level: "Intermediário" },
  { name: "Inglês", level: "Básico" },
];
