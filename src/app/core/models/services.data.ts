export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface PricingPlan {
  name: string;
  anualPrice: string;
  members: string | number;
  monthlyPrice: string;
}

export interface Service {
  id: string;
  name: string;
  shortDescription: string;
  icon: string;
  color: string;
  items: ServiceItem[];
  pricing?: {
    title: string;
    subtitle?: string;
    plans: PricingPlan[];
    conditions: string[];
    benefits?: string[];
    discounts?: { name: string; normalPrice: string; discount: string; totalPrice: string }[];
  };
}

export const SERVICES: Service[] = [
  {
    id: 'areas-derecho',
    name: 'Áreas del Derecho',
    shortDescription: 'Asesoría jurídica integral en todas las ramas del derecho colombiano.',
    icon: 'bi-building-fill-check',
    color: '#1a3a5c',
    items: [
      {
        title: 'Derecho Corporativo y Comercial',
        description:
          'Asesoría legal en la creación y gestión de empresas, contratos comerciales, fusiones y adquisiciones, cumplimiento normativo y propiedad intelectual. Nuestro centro de conciliación interno permite resolver disputas comerciales de manera eficiente y amigable.',
        icon: 'bi-briefcase-fill',
      },
      {
        title: 'Derecho Laboral',
        description:
          'Servicios en la gestión de relaciones laborales, contratación y terminación de empleados, regulaciones de seguridad social y resolución de conflictos laborales. Nuestro equipo de investigadores privados recopila pruebas en casos laborales complejos.',
        icon: 'bi-people-fill',
      },
      {
        title: 'Derecho Civil',
        description:
          'Asistencia en casos de responsabilidad civil, contratos personales, divorcios, sucesiones y otros asuntos civiles. Colaboramos con expertos en psicología forense y nuestro centro de conciliación facilita acuerdos amigables.',
        icon: 'bi-person-fill-check',
      },
      {
        title: 'Derecho Penal',
        description:
          'Representación legal en casos penales, tanto para la defensa como para la acusación, y asesoramiento en procedimientos legales penales. Nuestros investigadores privados trabajan en conjunto para reunir pruebas sólidas.',
        icon: 'bi-shield-fill-exclamation',
      },
      {
        title: 'Derecho Inmobiliario',
        description:
          'Asesoría en transacciones de bienes raíces y revisión de contratos de arrendamiento, propiedad horizontal y temas relacionados con la propiedad. En disputas inmobiliarias, nuestro centro de conciliación facilita acuerdos amigables.',
        icon: 'bi-house-fill',
      },
      {
        title: 'Derecho Administrativo',
        description:
          'Ayuda en procesos de licitación, recursos administrativos, sanciones y regulaciones gubernamentales. Nuestros servicios incluyen investigaciones exhaustivas respaldadas por nuestros investigadores privados.',
        icon: 'bi-bank2',
      },
      {
        title: 'Derecho Tributario',
        description:
          'Orientación en temas de impuestos, planificación fiscal, presentación de declaraciones y resolución de controversias fiscales. En casos de evasión fiscal, nuestro equipo legal e investigadores privados trabajan en conjunto.',
        icon: 'bi-calculator-fill',
      },
      {
        title: 'Derecho de Familia',
        description:
          'Asesoría en adopciones, custodia de menores, matrimonios, uniones de hecho y otros asuntos familiares. Nuestros expertos en psicología forense evalúan situaciones para proteger el bienestar de los involucrados.',
        icon: 'bi-heart-fill',
      },
      {
        title: 'Derecho Internacional',
        description:
          'Servicios legales relacionados con tratados internacionales, contratos internacionales, inmigración y extradición. Nuestros investigadores privados pueden rastrear activos en casos internacionales complejos.',
        icon: 'bi-globe2',
      },
      {
        title: 'Litigio y Resolución de Disputas',
        description:
          'Representación en procedimientos judiciales, arbitrajes y mediaciones para resolver disputas de diversas naturalezas. Nuestro centro de conciliación facilita la resolución rápida y eficiente de conflictos.',
        icon: 'bi-balance-scale',
      },
    ],
  },
  {
    id: 'psicologia-forense',
    name: 'Psicología Forense',
    shortDescription: 'Evaluaciones psicológicas especializadas para procesos judiciales y legales.',
    icon: 'bi-brain',
    color: '#2a7f7f',
    items: [
      {
        title: 'Evaluación de Credibilidad y Veracidad del Testimonio',
        description:
          'Determinar la credibilidad y veracidad de los testimonios de testigos y víctimas en casos judiciales, identificando posibles sesgos, inconsistencias o factores que puedan afectar la precisión de los testimonios.',
        icon: 'bi-eye-fill',
      },
      {
        title: 'Evaluación de Capacidad Mental',
        description:
          'Evaluar la capacidad mental de los individuos involucrados en casos legales, como determinar si un acusado comprende las consecuencias de sus acciones o si un testigo es competente para testificar.',
        icon: 'bi-clipboard2-pulse-fill',
      },
      {
        title: 'Perfilación Criminal',
        description:
          'Analizar patrones de comportamiento en delincuentes para proporcionar información sobre posibles características psicológicas y ayudar en la identificación y búsqueda de sospechosos.',
        icon: 'bi-person-bounding-box',
      },
      {
        title: 'Evaluación de Daño Psicológico',
        description:
          'Evaluar y cuantificar el impacto psicológico que un evento traumático ha tenido en un individuo, especialmente en casos de daño emocional o lesiones psicológicas.',
        icon: 'bi-heart-pulse-fill',
      },
      {
        title: 'Evaluación de Víctimas de Violencia',
        description:
          'Evaluar a presuntas víctimas de abuso, maltrato o violencia para determinar la credibilidad de sus afirmaciones y evaluar el impacto psicológico.',
        icon: 'bi-shield-fill-plus',
      },
      {
        title: 'Evaluación de Riesgo y Peligrosidad',
        description:
          'Evaluar el nivel de riesgo que un individuo puede representar para sí mismo o para otros, especialmente en casos de violencia doméstica, amenazas o planificación de sentencias.',
        icon: 'bi-exclamation-triangle-fill',
      },
      {
        title: 'Asesoramiento a Abogados y Jueces',
        description:
          'Brindar asesoramiento psicológico a abogados y jueces para ayudarles a comprender los aspectos psicológicos de un caso y tomar decisiones informadas.',
        icon: 'bi-chat-square-text-fill',
      },
      {
        title: 'Testimonio en Tribunales',
        description:
          'Proporcionar testimonio experto en un tribunal, explicando de manera comprensible las conclusiones psicológicas y sus implicaciones en un caso.',
        icon: 'bi-megaphone-fill',
      },
      {
        title: 'Mediación y Resolución de Conflictos',
        description:
          'Ayudar a resolver disputas o conflictos mediante técnicas de mediación y facilitación de la comunicación entre las partes involucradas.',
        icon: 'bi-arrows-angle-contract',
      },
      {
        title: 'Evaluación de Custodia de Menores',
        description:
          'Evaluar la idoneidad de los padres o tutores para tener la custodia de un menor, considerando factores psicológicos que puedan afectar al bienestar del niño.',
        icon: 'bi-person-hearts',
      },
      {
        title: 'Evaluación de Competencia Legal',
        description:
          'Evaluar la competencia de un individuo para enfrentar un juicio o tomar decisiones legales, considerando su estado mental y emocional.',
        icon: 'bi-file-earmark-person-fill',
      },
      {
        title: 'Apoyo en Procesos de Justicia Restaurativa',
        description:
          'Participar en procesos de justicia restaurativa, donde se busca la reconciliación entre las partes involucradas y la reparación del daño causado.',
        icon: 'bi-patch-check-fill',
      },
    ],
  },
  {
    id: 'conciliacion',
    name: 'Centro de Conciliación',
    shortDescription: 'Resolución alternativa de conflictos de manera ágil, neutral y confidencial.',
    icon: 'bi-handshake-fill',
    color: '#1a6b8a',
    items: [
      {
        title: 'Mediación y Conciliación',
        description:
          'Facilita la comunicación entre las partes en conflicto y busca llegar a acuerdos mutuamente satisfactorios, evitando un litigio judicial prolongado.',
        icon: 'bi-chat-dots-fill',
      },
      {
        title: 'Resolución de Conflictos',
        description:
          'Ofrece un ambiente neutral y confidencial para abordar disputas de diferentes naturalezas, desde conflictos familiares hasta comerciales.',
        icon: 'bi-shield-check',
      },
      {
        title: 'Negociación',
        description:
          'Ayuda a las partes a negociar términos y condiciones para resolver sus diferencias de manera colaborativa.',
        icon: 'bi-arrow-left-right',
      },
      {
        title: 'Asesoramiento Legal',
        description:
          'Proporciona información básica sobre aspectos legales y opciones disponibles, pero no reemplaza el consejo legal de un abogado.',
        icon: 'bi-info-circle-fill',
      },
      {
        title: 'Redacción de Acuerdos',
        description:
          'Ayuda a las partes a redactar acuerdos de conciliación o mediación que detallen los términos y condiciones del arreglo alcanzado.',
        icon: 'bi-file-earmark-text-fill',
      },
    ],
  },
  {
    id: 'investigacion-privada',
    name: 'Investigación Privada',
    shortDescription: 'Investigaciones discretas y documentadas para respaldar sus procesos legales.',
    icon: 'bi-search',
    color: '#0f4c75',
    items: [
      {
        title: 'Investigaciones de Antecedentes',
        description:
          'Realiza búsquedas exhaustivas para obtener información sobre antecedentes personales, laborales, financieros, etc.',
        icon: 'bi-file-earmark-search-fill',
      },
      {
        title: 'Investigaciones de Infidelidad',
        description:
          'Investiga casos de posibles relaciones extramatrimoniales y proporciona pruebas documentadas.',
        icon: 'bi-heart-break-fill',
      },
      {
        title: 'Localización de Personas',
        description:
          'Ayuda a encontrar a personas desaparecidas o fugitivas, utilizando técnicas de búsqueda y localización.',
        icon: 'bi-geo-alt-fill',
      },
      {
        title: 'Investigaciones Empresariales',
        description:
          'Realiza investigaciones internas en empresas para detectar fraudes, robos, malversación de fondos, entre otros.',
        icon: 'bi-building-fill',
      },
      {
        title: 'Investigaciones Civiles y Familiares',
        description:
          'Recolecta evidencia en casos de custodia de menores, pensiones alimenticias, adopciones, etc.',
        icon: 'bi-people-fill',
      },
      {
        title: 'Investigaciones Criminales',
        description:
          'Colabora con abogados en la búsqueda de pruebas y testigos en casos criminales.',
        icon: 'bi-shield-fill-exclamation',
      },
      {
        title: 'Vigilancia y Seguimiento',
        description:
          'Realiza vigilancia discreta para documentar actividades sospechosas o ilegales.',
        icon: 'bi-camera-video-fill',
      },
    ],
  },
  {
    id: 'seguros-legales',
    name: 'Seguros Legales',
    shortDescription: 'Planes de afiliación para personas naturales, funcionarios públicos y empresas.',
    icon: 'bi-patch-check-fill',
    color: '#1a5276',
    items: [
      {
        title: 'Reconocimiento y Reliquidación de Retiro',
        description: 'Se realiza reconocimiento y reliquidación de las asignaciones de retiro con base en la prima de actualización.',
        icon: 'bi-cash-stack',
      },
      {
        title: 'Derecho Penal Militar',
        description: 'Manejamos el área de derecho penal militar con especialistas en la materia.',
        icon: 'bi-shield-fill',
      },
      {
        title: 'Defensa en Procesos Disciplinarios',
        description: 'Representación y defensa en procesos disciplinarios ante cualquier instancia.',
        icon: 'bi-person-fill-check',
      },
      {
        title: 'Conciliaciones Especiales para Fuerzas Públicas',
        description: 'Conciliaciones con tarifas y condiciones especiales para miembros de las fuerzas públicas.',
        icon: 'bi-stars',
      },
      {
        title: 'Actualizaciones de Retiro',
        description: 'Gestión y acompañamiento en procesos de actualización de retiro.',
        icon: 'bi-arrow-repeat',
      },
      {
        title: 'Asesoría Legal Integral',
        description: 'Asesoría legal en cualquier tema, con acompañamiento hasta la presentación de la demanda.',
        icon: 'bi-chat-square-dots-fill',
      },
    ],
    pricing: {
      title: 'Planes de Afiliación',
      subtitle: 'Vigencia: 27 Enero 2023 – 26 Enero 2024',
      plans: [
        { name: 'Básica', anualPrice: '$1.200.000', members: '1 afiliado', monthlyPrice: '$100.000 / mes' },
        { name: 'VIP', anualPrice: '$2.200.000', members: '2 afiliados', monthlyPrice: '$183.500 / mes' },
        { name: 'Premium', anualPrice: '$4.200.000', members: '4 afiliados', monthlyPrice: '$350.000 / mes' },
        { name: 'Familiar', anualPrice: '$5.000.000', members: '5 afiliados', monthlyPrice: '$416.700 / mes' },
      ],
      conditions: [
        'La afiliación tiene un plazo de 12 meses a partir de la aprobación.',
        'El primer pago se realiza el mismo día de la afiliación.',
        'Los pagos siguientes se realizan los cinco primeros días de cada mes.',
        'La afiliación puede cancelarse por incumplimiento de pago o mal uso.',
        'El servicio es personal e intransferible.',
        'Los pagos son vía electrónica a cuentas bancarias.',
        'Primera audiencia de conciliación privada: solo paga $150.000 + IVA.',
      ],
      benefits: [
        'Reconocimiento y reliquidación de retiro con base en la prima de actualización.',
        'Manejo del área de derecho penal militar.',
        'Defensa en procesos disciplinarios.',
        'Conciliaciones especiales para fuerzas públicas.',
        'Actualizaciones de retiro.',
        'Asesoría legal en cualquier tema.',
        'Acompañamiento legal hasta la presentación de la demanda.',
        'Primera audiencia de conciliación privada: solo $150.000 + IVA.',
      ],
      discounts: [
        { name: 'Conciliaciones', normalPrice: '$1.600.000', discount: '50%', totalPrice: '$800.000 + IVA' },
        { name: 'Asesorías Psicológicas', normalPrice: '$400.000', discount: '50%', totalPrice: '$200.000 + IVA' },
        { name: 'Evaluación Forense', normalPrice: '$5.000.000 – $10.000.000', discount: '50%', totalPrice: '$2.500.000 – $5.000.000 + IVA' },
        { name: 'Informe de Refutación', normalPrice: '$4.000.000', discount: '50%', totalPrice: '$2.000.000 + IVA' },
      ],
    },
  },
];
