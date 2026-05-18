import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

export interface ConsultaPayload {
  // Paso 1 — Datos personales
  nombre: string;
  apellido: string;
  documento: string;
  telefono: string;
  email: string;
  ciudad: string;

  // Paso 2 — Servicio
  servicioId: string;
  servicioNombre: string;
  subareaTitulo: string;

  // Paso 3 — Caso
  urgencia: 'alta' | 'media' | 'baja';
  procesoEnCurso: 'si' | 'no';
  entidadInvolucrada: string;
  fechaHecho: string;
  descripcion: string;

  // Paso 4 — Aceptaciones
  aceptaPolitica: boolean;
  aceptaContacto: boolean;
}

@Injectable({ providedIn: 'root' })
export class ConsultaService {
  // ─────────────────────────────────────────────────────────────
  // ⚠️ Configura estos 3 valores desde tu cuenta de EmailJS:
  //    https://dashboard.emailjs.com/
  //
  // 1. SERVICE_ID:  Email Services → conecta tu Gmail/Outlook → copia el ID
  // 2. TEMPLATE_ID: Email Templates → crea una plantilla → copia el ID
  // 3. PUBLIC_KEY:  Account → API Keys → copia tu Public Key
  //
  // La Public Key es segura para exponer en el navegador (no es secreta).
  // ─────────────────────────────────────────────────────────────
  private readonly SERVICE_ID = 'service_c6m2nf4';
  private readonly TEMPLATE_ID = 'template_cuhedvj';
  private readonly PUBLIC_KEY = 'lW0Xl6VkIRTZDh3tF';

  // Correo de destino (debes ponerlo en el campo "To Email" de tu plantilla
  // de EmailJS, o pasarlo dinámicamente vía {{to_email}}).
  private readonly TO_EMAIL = 'danielsntos06@gmail.com';

  async enviar(payload: ConsultaPayload): Promise<void> {
    const templateParams = {
      // Campos para destinatarios y asunto en la plantilla de EmailJS
      to_email: this.TO_EMAIL,
      reply_to: payload.email,
      subject: `[${payload.urgencia.toUpperCase()}] ${payload.servicioNombre} · ${payload.subareaTitulo}`,

      // Datos personales
      nombre_completo: `${payload.nombre} ${payload.apellido}`.trim(),
      nombre: payload.nombre,
      apellido: payload.apellido,
      documento: payload.documento,
      telefono: payload.telefono,
      email: payload.email,
      ciudad: payload.ciudad,

      // Servicio
      servicio_nombre: payload.servicioNombre,
      subarea: payload.subareaTitulo,

      // Caso
      urgencia: payload.urgencia.toUpperCase(),
      proceso_en_curso: payload.procesoEnCurso === 'si' ? 'Sí' : 'No',
      entidad_involucrada: payload.entidadInvolucrada || 'No especifica',
      fecha_hecho: payload.fechaHecho || 'No especifica',
      descripcion: payload.descripcion,

      // Mensaje completo formateado (útil si tu plantilla solo usa {{message}})
      message: this.componerCuerpo(payload),
    };

    try {
      await emailjs.send(this.SERVICE_ID, this.TEMPLATE_ID, templateParams, {
        publicKey: this.PUBLIC_KEY,
      });
    } catch (err: any) {
      const detalle = err?.text || err?.message || 'Error desconocido';
      throw new Error(`EmailJS respondió con error: ${detalle}`);
    }
  }

  private componerCuerpo(p: ConsultaPayload): string {
    return [
      'NUEVA SOLICITUD DE ASESORÍA LEGAL',
      '────────────────────────────────────',
      '',
      '◆ Datos personales',
      `   Nombre:    ${p.nombre} ${p.apellido}`,
      `   Documento: ${p.documento}`,
      `   Teléfono:  ${p.telefono}`,
      `   Correo:    ${p.email}`,
      `   Ciudad:    ${p.ciudad}`,
      '',
      '◆ Servicio solicitado',
      `   Área:     ${p.servicioNombre}`,
      `   Subárea:  ${p.subareaTitulo}`,
      '',
      '◆ Detalles del caso',
      `   Urgencia:           ${p.urgencia.toUpperCase()}`,
      `   ¿Proceso en curso?: ${p.procesoEnCurso === 'si' ? 'Sí' : 'No'}`,
      `   Entidad/contraparte: ${p.entidadInvolucrada || '—'}`,
      `   Fecha del hecho:    ${p.fechaHecho || '—'}`,
      '',
      '◆ Descripción del caso',
      p.descripcion,
      '',
      '────────────────────────────────────',
      'Enviado desde el formulario web de LegalGroup',
    ].join('\n');
  }
}
