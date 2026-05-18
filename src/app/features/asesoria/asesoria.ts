import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Service, ServiceItem, SERVICES } from '../../core/models/services.data';
import {
  ConsultaPayload,
  ConsultaService,
} from '../../core/services/consulta.service';

type Estado = 'idle' | 'enviando' | 'ok' | 'error';

@Component({
  selector: 'app-asesoria',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './asesoria.html',
  styleUrl: './asesoria.scss',
})
export class AsesoriaComponent implements OnInit {
  readonly servicios = SERVICES;
  readonly pasoActual = signal(1);
  readonly totalPasos = 4;
  readonly estado = signal<Estado>('idle');
  readonly mensajeError = signal<string>('');

  formulario!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private consulta: ConsultaService,
  ) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      // Paso 1
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellido: ['', [Validators.required, Validators.minLength(2)]],
      documento: ['', [Validators.required, Validators.pattern(/^[0-9]{6,15}$/)]],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9+\s-]{7,20}$/)]],
      email: ['', [Validators.required, Validators.email]],
      ciudad: ['', [Validators.required, Validators.minLength(2)]],

      // Paso 2
      servicioId: ['', Validators.required],
      subareaTitulo: ['', Validators.required],

      // Paso 3
      urgencia: ['media', Validators.required],
      procesoEnCurso: ['no', Validators.required],
      entidadInvolucrada: [''],
      fechaHecho: [''],
      descripcion: ['', [Validators.required, Validators.minLength(30), Validators.maxLength(2000)]],

      // Paso 4
      aceptaPolitica: [false, Validators.requiredTrue],
      aceptaContacto: [false, Validators.requiredTrue],
    });

    // Si vino ?servicio=xxx desde un detalle, lo preselecciono
    const preId = this.route.snapshot.queryParamMap.get('servicio');
    if (preId && SERVICES.some((s) => s.id === preId)) {
      this.formulario.patchValue({ servicioId: preId });
    }
  }

  // ─────────────────────────────────────────────────────────────
  // Derivados

  servicioSeleccionado(): Service | null {
    const id = this.formulario?.get('servicioId')?.value;
    return id ? SERVICES.find((s) => s.id === id) ?? null : null;
  }

  get subareasDisponibles(): ServiceItem[] {
    const id = this.formulario?.get('servicioId')?.value;
    const s = SERVICES.find((x) => x.id === id);
    return s?.items ?? [];
  }

  // ─────────────────────────────────────────────────────────────
  // Navegación de pasos

  siguiente(): void {
    if (!this.pasoValido(this.pasoActual())) {
      this.marcarPasoComoTocado(this.pasoActual());
      return;
    }
    if (this.pasoActual() < this.totalPasos) {
      this.pasoActual.update((p) => p + 1);
      this.scrollTop();
    }
  }

  anterior(): void {
    if (this.pasoActual() > 1) {
      this.pasoActual.update((p) => p - 1);
      this.scrollTop();
    }
  }

  irAPaso(n: number): void {
    if (n < this.pasoActual()) {
      this.pasoActual.set(n);
      this.scrollTop();
    }
  }

  pasoValido(paso: number): boolean {
    const c = this.camposPorPaso(paso);
    return c.every((nombre) => this.formulario.get(nombre)?.valid);
  }

  private camposPorPaso(paso: number): string[] {
    switch (paso) {
      case 1:
        return ['nombre', 'apellido', 'documento', 'telefono', 'email', 'ciudad'];
      case 2:
        return ['servicioId', 'subareaTitulo'];
      case 3:
        return ['urgencia', 'procesoEnCurso', 'descripcion'];
      case 4:
        return ['aceptaPolitica', 'aceptaContacto'];
      default:
        return [];
    }
  }

  private marcarPasoComoTocado(paso: number): void {
    this.camposPorPaso(paso).forEach((c) => {
      this.formulario.get(c)?.markAsTouched();
    });
  }

  // ─────────────────────────────────────────────────────────────
  // Submit

  async enviar(): Promise<void> {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    const v = this.formulario.value;
    const servicio = SERVICES.find((s) => s.id === v.servicioId);
    if (!servicio) return;

    const payload: ConsultaPayload = {
      nombre: v.nombre,
      apellido: v.apellido,
      documento: v.documento,
      telefono: v.telefono,
      email: v.email,
      ciudad: v.ciudad,
      servicioId: v.servicioId,
      servicioNombre: servicio.name,
      subareaTitulo: v.subareaTitulo,
      urgencia: v.urgencia,
      procesoEnCurso: v.procesoEnCurso,
      entidadInvolucrada: v.entidadInvolucrada,
      fechaHecho: v.fechaHecho,
      descripcion: v.descripcion,
      aceptaPolitica: v.aceptaPolitica,
      aceptaContacto: v.aceptaContacto,
    };

    this.estado.set('enviando');
    this.mensajeError.set('');
    this.bloquearScroll(true);

    try {
      await this.consulta.enviar(payload);
      this.estado.set('ok');
    } catch (err) {
      this.estado.set('error');
      this.mensajeError.set(
        err instanceof Error ? err.message : 'No se pudo enviar la solicitud.',
      );
    } finally {
      this.bloquearScroll(false);
    }
  }

  private bloquearScroll(bloquear: boolean): void {
    if (typeof document === 'undefined') return;
    document.body.style.overflow = bloquear ? 'hidden' : '';
  }

  abrirCalendario(event: Event): void {
    const input = event.target as HTMLInputElement & { showPicker?: () => void };
    input.showPicker?.();
  }

  reiniciar(): void {
    this.formulario.reset({
      urgencia: 'media',
      procesoEnCurso: 'no',
      aceptaPolitica: false,
      aceptaContacto: false,
    });
    this.pasoActual.set(1);
    this.estado.set('idle');
    this.scrollTop();
  }

  // ─────────────────────────────────────────────────────────────
  // Helpers de plantilla

  errorDe(campo: string): string | null {
    const c = this.formulario.get(campo);
    if (!c || !c.touched || !c.errors) return null;
    if (c.errors['required']) return 'Este campo es obligatorio.';
    if (c.errors['requiredTrue']) return 'Debes aceptar para continuar.';
    if (c.errors['email']) return 'Correo electrónico inválido.';
    if (c.errors['minlength']) return `Mínimo ${c.errors['minlength'].requiredLength} caracteres.`;
    if (c.errors['maxlength']) return `Máximo ${c.errors['maxlength'].requiredLength} caracteres.`;
    if (c.errors['pattern']) return 'Formato no válido.';
    return 'Campo inválido.';
  }

  private scrollTop(): void {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
