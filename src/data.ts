export interface PersonalInfo {
  name: string;
  dob: string;
  nationality: string;
  location: string;
  profile: string;
}

export interface Education {
  id: string;
  period: string;
  location: string;
  degree: string;
  institution: string;
  level: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  tasks: string[];
}

export interface Language {
  id: string;
  language: string;
  level: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  education: Education[];
  experience: Experience[];
  skills: string[];
  languages: Language[];
}

export const initialData: PortfolioData = {
  personalInfo: {
    name: "José Ricardo Casdelo Navarro",
    dob: "01/12/1999",
    nationality: "Cubana",
    location: "España",
    profile: "Profesional técnico con sólida formación en Ingeniería de Telecomunicaciones y Electrónica. Experiencia práctica en instalaciones de energía renovable, mantenimiento de equipos electrónicos y docencia universitaria. Especializado en soluciones técnicas, diagnóstico de equipos y educación técnica. Responsable, con fuerte capacidad de aprendizaje, trabajo en equipo y disponibilidad para nuevos desafíos profesionales."
  },
  education: [
    {
      id: "1",
      period: "03/09/2018 – 16/12/2022",
      location: "Sevilla, España",
      degree: "INGENIERO EN TELECOMUNICACIONES Y ELECTRÓNICA",
      institution: "Universidad Central de Las Villas ¨Marta Abreu¨",
      level: "Nivel en el MEC Nivel 6 EQF-MEC"
    }
  ],
  experience: [
    {
      id: "1",
      role: "TÉCNICO EN ENERGÍA SOLAR",
      company: "COPEXTEL",
      period: "31/10/2025 – 31/01/2026",
      location: "SANTA CLARA, CUBA",
      tasks: [
        "Apoyo en montaje de paneles solares",
        "Trabajo en techos de placa y estructuras en suelo",
        "Carga, transporte y colocación de paneles",
        "Uso de herramientas eléctricas y manuales",
        "Apoyo en cableado básico",
        "Cumplimiento de normas de seguridad"
      ]
    },
    {
      id: "2",
      role: "PROFESOR UNIVERSITARIO DE ELECTRÓNICA",
      company: "UNIVERSIDAD CENTRAL \"MARTA ABREU DE LAS VILLAS\"",
      period: "03/09/2023 – 04/07/2024",
      location: "SANTA CLARA, CUBA",
      tasks: []
    }
  ],
  skills: [
    "Mantenimiento de equipos electrónicos",
    "Diagnóstico y reparación sencilla",
    "Soldadura de componentes",
    "Lectura básica de esquemas y datasheets",
    "Soporte técnico a transmisiones",
    "Energía alternativa",
    "Electricidad",
    "Energía solar",
    "Organización y puntualidad",
    "Responsabilidad en el trabajo",
    "Trabajo en equipo"
  ],
  languages: [
    {
      id: "1",
      language: "ESPAÑOL",
      level: "Lengua materna"
    },
    {
      id: "2",
      language: "INGLÉS",
      level: "A2 (Comprensión auditiva), B1 (Comprensión lectora), A2 (Expresión oral), A2 (Interacción oral), A2 (Expresión escrita)"
    }
  ]
};
