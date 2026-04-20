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
      name: 'Marlys González',
      role: 'Gerente General',
      photo: '/Gerente_general_marlys.jpeg',
      shortBio: 'Líder visionaria con más de 10 años de experiencia en el sector jurídico.',
      fullBio: 'Marlys González es la fundadora y Gerente General de Asesorías e Inversiones Legal Group SAS. Con sólida formación en Derecho y maestría en Gestión Empresarial, ha liderado la firma desde su fundación en 2018, consolidándola como un referente jurídico en Cartagena de Indias. Su enfoque multidisciplinario y compromiso con la excelencia han sido la base del crecimiento sostenido de la firma.',
      specialties: ['Gestión Empresarial', 'Derecho Comercial', 'Asesoría Corporativa', 'Negociación'],
    },
    {
      id: 2,
      name: 'Stefany Rodríguez',
      role: 'Abogada Senior',
      photo: '/abogada_stefany.jpeg',
      shortBio: 'Especialista en derecho civil y familia con un enfoque humanizado.',
      fullBio: 'Stefany Rodríguez es abogada con especialización en Derecho Civil y de Familia. Su dedicación y empatía con los clientes la distinguen en el ámbito jurídico. Ha representado exitosamente a cientos de clientes en procesos de sucesiones, divorcios, custodia y contratos civiles, siempre con un enfoque humano y estratégico que garantiza soluciones duraderas.',
      specialties: ['Derecho Civil', 'Derecho de Familia', 'Procesos Sucesorales', 'Contratos'],
    },
    {
      id: 3,
      name: 'Claudia Martínez',
      role: 'Abogada Especialista',
      photo: '/abogada_claudia.jpeg',
      shortBio: 'Experta en derecho laboral y penal con vasta experiencia en litigio.',
      fullBio: 'Claudia Martínez cuenta con amplia trayectoria en el litigio de casos laborales y penales. Su rigor técnico y habilidad para construir estrategias jurídicas sólidas le han permitido obtener resultados favorables en casos de alta complejidad. Es reconocida por su capacidad de análisis profundo y su compromiso inquebrantable con la justicia.',
      specialties: ['Derecho Laboral', 'Derecho Penal', 'Litigio', 'Investigación Jurídica'],
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
