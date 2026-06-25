export const contactEmail = "contacto@previnsa.com";
export const whatsappUrl = "https://wa.me/520000000000";

export type ServiceProduct = {
  category: string;
  title: string;
  description: string;
  href: string;
};

export type SectorCard = {
  title: string;
  description: string;
  detail: string;
};

export const serviceProducts: ServiceProduct[] = [
  {
    category: "EPP",
    title: "Cascos industriales",
    description:
      "Protección craneal tipo II para uso diario en taller, almacén y operación.",
    href: "#contacto",
  },
  {
    category: "Visión",
    title: "Lentes de seguridad",
    description:
      "Protección contra impactos, UV y salpicaduras para entornos exigentes.",
    href: "#contacto",
  },
  {
    category: "Señalización",
    title: "Señales preventivas",
    description:
      "Alta visibilidad para interiores y exteriores con materiales resistentes.",
    href: "#contacto",
  },
  {
    category: "Manos",
    title: "Guantes de protección",
    description:
      "Opciones para maniobra general, abrasión, corte y trabajo operativo.",
    href: "#contacto",
  },
  {
    category: "Alta visibilidad",
    title: "Chalecos reflejantes",
    description:
      "Mayor visibilidad en patio, vialidad, carga y operación nocturna.",
    href: "#contacto",
  },
  {
    category: "Orden visual",
    title: "Material preventivo",
    description:
      "Apoyos para rutas, zonas, obligaciones y mensajes clave de seguridad.",
    href: "#contacto",
  },
];

export const sectors = [
  "Talleres",
  "Almacenes",
  "Manufactura",
  "Construcción",
  "Logística",
  "Servicios técnicos",
];

export const quickPoints = [
  "Atención directa para negocios pequeños y medianos",
  "Imagen profesional desde el primer contacto",
];

export const sectorCards: SectorCard[] = [
  {
    title: "Operación y taller",
    description:
      "EPP para equipos que trabajan con herramientas, maniobra y mantenimiento diario.",
    detail: "Cascos, lentes, guantes",
  },
  {
    title: "Almacén y logística",
    description:
      "Material visible para ordenar rutas, zonas de carga y áreas de circulación.",
    detail: "Señalización y alta visibilidad",
  },
  {
    title: "Obra y construcción",
    description:
      "Protección práctica para cuadrillas que necesitan equiparse con rapidez y buena imagen.",
    detail: "Dotación por volumen",
  },
];

export const contactHighlights = [
  "Cotización clara por producto y cantidad",
  "Opciones para compra inicial o reposición",
  "Seguimiento directo por correo o WhatsApp",
];
