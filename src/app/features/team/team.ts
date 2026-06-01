import { Component, HostListener, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  photo: string;
  shortBio: string;
  fullBio: string;
  specialties: string[];
}

@Component({
  selector: 'app-team',
  imports: [CommonModule],
  templateUrl: './team.html',
  styleUrl: './team.scss',
})
export class TeamComponent implements OnInit, OnDestroy {
  readonly members: TeamMember[] = [
    {
      id: 1,
      name: 'Marlys M. Jaimes Rico',
      role: 'Gerente General | Abogada Especialista en Derecho Penal',
      photo: '/Gerente_general_marlys.jpeg',
      shortBio: 'Abogada Especialista en Derecho Penal y Magíster en Derecho Internacional Humanitario.',
      fullBio: 'Marlys Mercedes Jaimes es abogada con sólida y reconocida trayectoria en el ejercicio del Derecho Penal colombiano, Especialista en Derecho Penal y Magíster en Derecho Internacional Humanitario. Su formación académica y años de experiencia profesional le han permitido consolidar un perfil caracterizado por el alto nivel técnico, la disciplina, la ética y el compromiso en la defensa de los derechos de sus representados. Se ha destacado en la dirección de investigaciones penales, audiencias preliminares, juicios orales y estrategias de litigio penal, desarrollando defensas estructuradas con criterio jurídico y visión estratégica del proceso. Como Gerente General de Legal Group, lidera un equipo multidisciplinario comprometido con servicios jurídicos de alta calidad, brindando representación integral y soluciones efectivas a cada cliente, con una filosofía fundamentada en la excelencia, la preparación técnica y la dedicación.',
      specialties: ['Derecho Penal', 'Litigio Penal', 'Derecho Internacional Humanitario', 'Defensa Estratégica'],
    },
    {
      id: 2,
      name: 'Nasly Gutiérrez Martínez',
      role: 'Abogada Penalista',
      photo: '/abogada_claudia.jpeg',
      shortBio: 'Abogada penalista con años de experiencia en litigación penal a nivel nacional.',
      fullBio: 'Nasly Gutiérrez Martínez es abogada penalista con años de experiencia en litigación penal a nivel nacional. Ha acompañado a sus clientes en cada etapa del proceso indagación, investigación, acusación y juicio oral con una preparación técnica rigurosa y una atención cercana que marca la diferencia. Su fortaleza está en anticiparse a los movimientos de la contraparte y construir estrategias de defensa sólidas desde el primer momento. Para sus clientes, representa algo fundamental: tener a alguien que pelea su caso con la misma convicción con la que ellos lo viven.',
      specialties: ['Derecho Penal', 'Litigación Penal', 'Juicio Oral', 'Estrategia de Defensa'],
    },
    {
      id: 3,
      name: 'Stefany Marcela Mendoza Coha',
      role: 'Abogada Litigante | Civil, Familia y Administrativo',
      photo: '/abogada_stefany.jpeg',
      shortBio: 'Abogada litigante con amplia experiencia en Derecho Civil, de Familia, Administrativo y laboral.',
      fullBio: 'Stefany Marcela Mendoza Coha es abogada litigante con amplia experiencia en Derecho Civil, Derecho de Familia, Derecho Administrativo y asuntos laborales, destacándose por su capacidad de análisis jurídico integral y por el diseño de estrategias legales eficaces orientadas a la solución real y oportuna de los conflictos de sus clientes. Su ejercicio profesional abarca la representación y acompañamiento en procesos de familia relacionados con custodia, regulación de alimentos, divorcios, sucesiones y responsabilidad parental; así como en demandas civiles, controversias contractuales, procesos ejecutivos, reclamaciones administrativas y asuntos laborales ante entidades públicas y privadas. Se caracteriza por desarrollar cada caso a partir de un estudio detallado de las circunstancias particulares del cliente, comprendiendo no solo el aspecto jurídico del conflicto, sino también su impacto personal, familiar y patrimonial. Su enfoque profesional parte de una premisa esencial: construir una estrategia sólida desde el primer momento, con criterio técnico, responsabilidad y visión práctica del litigio.',
      specialties: ['Derecho Civil', 'Derecho de Familia', 'Derecho Administrativo', 'Asuntos Laborales'],
    },
    {
      id: 4,
      name: 'Kely Yohana Álvarez Ahumada',
      role: 'Abogada Laboralista',
      photo: '/Abogada Laboralista.jpeg',
      shortBio: 'Abogada especializada en Derecho Laboral y de la Seguridad Social.',
      fullBio: 'Kely Yohana Álvarez Ahumada es abogada especializada en Derecho Laboral y de la Seguridad Social, con amplia experiencia en la defensa de los derechos de los trabajadores y en la asesoría integral a empresas frente al cumplimiento de sus obligaciones laborales y prestacionales. Su trayectoria le ha permitido desarrollar un profundo conocimiento del régimen laboral colombiano, combinando estrategia jurídica, capacidad de negociación y experiencia litigiosa para obtener resultados favorables en beneficio de sus clientes. Su ejercicio profesional comprende la representación en casos de despidos sin justa causa, reclamaciones por liquidaciones e indemnizaciones, acoso laboral, reconocimiento de prestaciones sociales, controversias en seguridad social y litigios ante la jurisdicción laboral ordinaria. Asimismo, se destaca por brindar acompañamiento jurídico preventivo y correctivo tanto a trabajadores como a empleadores, identificando soluciones eficaces dentro del marco legal vigente. Cuando los derechos laborales resultan vulnerados, la Dra. Álvarez Ahumada actúa con firmeza, criterio técnico y determinación para garantizar la protección y restitución de los derechos de sus representados.',
      specialties: ['Derecho Laboral', 'Seguridad Social', 'Litigio Laboral', 'Asesoría Empresarial'],
    },
    {
      id: 5,
      name: 'Delsy María Jaimes Rico',
      role: 'Psicóloga Jurídica Forense | Peritaje y Evaluación Especializada',
      photo: '/psicologa forense.jpeg',
      shortBio: 'Profesional especializada en psicología forense y elaboración de dictámenes periciales.',
      fullBio: 'Delsy María Jaimes Rico es profesional especializada en psicología forense, con amplia trayectoria en la elaboración de dictámenes periciales y evaluaciones psicológicas dentro de procesos judiciales en materia penal, de familia y civil. Su intervención pericial constituye un elemento probatorio de alta relevancia técnica y jurídica, capaz de incidir de manera determinante en la valoración probatoria y en la decisión final de la autoridad judicial. Sus conceptos son desarrollados bajo criterios de rigor científico, metodología especializada y estricto apego a los protocolos de la psicología forense, ofreciendo análisis claros, objetivos y técnicamente sustentados. En Legal Group, la Dra. Jaimes Rico representa la articulación entre la ciencia forense y el litigio estratégico, aportando herramientas fundamentales para el esclarecimiento de los hechos, la valoración del daño psicológico y la credibilidad del testimonio dentro del debate probatorio.',
      specialties: ['Psicología Forense', 'Peritaje', 'Evaluación Psicológica', 'Valoración del Daño'],
    },
    {
      id: 6,
      name: 'Hernán Darío Vargas Macías',
      role: 'Abogado Penalista | Especialista en Derecho Penal y Criminología',
      photo: '/Abogado Derecho administrativo.jpeg',
      shortBio: 'Abogado especialista en Derecho Penal y Criminología.',
      fullBio: 'Hernán Darío Vargas Macías es abogado con especialización en Derecho Penal y Criminología, una combinación que le permite entender el delito no solo desde la norma, sino desde sus causas, contextos y consecuencias. Esta perspectiva integral fortalece su capacidad para construir defensas técnicas sólidas, anticipar argumentos de la contraparte y presentar ante el despacho judicial análisis profundos y bien fundamentados. Su perfil criminológico lo convierte en un aliado estratégico en casos que exigen comprender el comportamiento humano y los factores que inciden en la conducta punible. En Legal Group, Hernán aporta rigor académico y experiencia práctica para garantizar que cada cliente reciba una defensa penal con base científica, construida caso a caso.',
      specialties: ['Derecho Penal', 'Criminología', 'Defensa Penal', 'Análisis Criminológico'],
    },
    {
      id: 7,
      name: 'Benjamín Emilio Corwin Camargo',
      role: 'Abogado | Derecho Administrativo y Contratación Estatal',
      photo: '/Abogado Penalista.jpeg',
      shortBio: 'Abogado especializado en Derecho Administrativo y Contratación Estatal.',
      fullBio: 'Benjamín Emilio Corwin Camargo es abogado especializado en derecho administrativo y contratación estatal, dos campos donde el conocimiento técnico de la norma y la capacidad estratégica de actuación ante el Estado resultan decisivos. Su ejercicio profesional se desarrolla en un escenario donde las reglas son exigentes, los plazos son estrictos y los errores pueden costar derechos. Asesora a personas naturales, empresas y entidades en procesos de contratación pública, impugnación de actos administrativos, nulidades, reclamaciones patrimoniales frente al Estado y litigios ante la jurisdicción contencioso-administrativa. Su enfoque combina el rigor jurídico con una visión práctica del funcionamiento del aparato estatal: sabe cómo moverse dentro del sistema para proteger los intereses de sus clientes con eficacia y oportunidad.',
      specialties: ['Derecho Administrativo', 'Contratación Estatal', 'Contencioso-Administrativo', 'Reclamaciones al Estado'],
    },
  ];

  // Signals: Angular detecta cambios sin depender de zone.js
  readonly activeIndex   = signal(0);
  readonly selectedMember = signal<TeamMember | null>(null);
  readonly isClosing      = signal(false);

  private autoplayTimer: ReturnType<typeof setInterval> | null = null;
  private touchStartX = 0;
  private touchStartY = 0;

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }

  private clearTimer(): void {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
      this.autoplayTimer = null;
    }
  }

  private startAutoplay(): void {
    this.clearTimer();
    this.autoplayTimer = setInterval(() => {
      this.activeIndex.update(i => (i + 1) % this.members.length);
    }, 3000);
  }

  onPointerEnter(e: PointerEvent): void {
    if (e.pointerType === 'mouse') this.clearTimer();
  }

  onPointerLeave(e: PointerEvent): void {
    if (e.pointerType === 'mouse') this.startAutoplay();
  }

  onTouchStart(e: TouchEvent): void {
    this.touchStartX = e.touches[0].clientX;
    this.touchStartY = e.touches[0].clientY;
  }

  onTouchEnd(e: TouchEvent): void {
    const dx = e.changedTouches[0].clientX - this.touchStartX;
    const dy = e.changedTouches[0].clientY - this.touchStartY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 45) {
      dx < 0 ? this.next() : this.prev();
    }
  }

  prev(): void {
    this.activeIndex.update(i => (i - 1 + this.members.length) % this.members.length);
    this.startAutoplay();
  }

  next(): void {
    this.activeIndex.update(i => (i + 1) % this.members.length);
    this.startAutoplay();
  }

  goTo(index: number): void {
    this.activeIndex.set(index);
    this.startAutoplay();
  }

  openModal(member: TeamMember): void {
    this.selectedMember.set(member);
    this.clearTimer();
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    if (this.isClosing()) return;
    this.isClosing.set(true);
    document.body.style.overflow = '';
    setTimeout(() => {
      this.selectedMember.set(null);
      this.isClosing.set(false);
      this.startAutoplay();
    }, 240);
  }

  getCardState(index: number): string {
    const total = this.members.length;
    const diff   = (index - this.activeIndex() + total) % total;
    if (diff === 0)         return 'active';
    if (diff === 1)         return 'next';
    if (diff === total - 1) return 'prev';
    return 'hidden';
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.selectedMember() && !this.isClosing()) this.closeModal();
  }
}
