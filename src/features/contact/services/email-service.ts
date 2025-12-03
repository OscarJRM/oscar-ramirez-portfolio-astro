import type { ContactFormData, EmailResponse } from '../types/contact.interface';
import { NodemailerProvider, getEmailConfig } from '../providers/nodemailer-provider';
import { createContactEmailTemplate, createAutoReplyTemplate } from '../templates/contact-template';

export class EmailService {
  private emailProvider: NodemailerProvider;
  private fromEmail: string;
  private toEmail: string;

  constructor() {
    const config = getEmailConfig();
    this.emailProvider = new NodemailerProvider(config);
    this.fromEmail = process.env.FROM_EMAIL || config.auth.user;
    this.toEmail = process.env.TO_EMAIL || config.auth.user;
    
    console.log('=== EmailService Constructor ===');
    console.log('FROM_EMAIL (quien envía):', this.fromEmail);
    console.log('TO_EMAIL (quien recibe el mensaje de contacto):', this.toEmail);
  }

  async sendContactEmail(formData: ContactFormData): Promise<EmailResponse> {
    try {
      // Verificar conexión SMTP
      const isConnected = await this.emailProvider.verifyConnection();
      if (!isConnected) {
        return {
          success: false,
          message: 'Error de conexión con el servidor de email',
          error: 'SMTP connection failed'
        };
      }

      // Enviar email principal (a ti)
      console.log('=== Enviando email PRINCIPAL ===');
      console.log('De:', this.fromEmail);
      console.log('Para:', this.toEmail, '(este debería ser TU email - Emilia)');
      console.log('Asunto: Nuevo mensaje de contacto');
      console.log('Template: createContactEmailTemplate (mensaje del usuario)');
      console.log('Datos del formulario:', { name: formData.name, email: formData.email });
      
      await this.emailProvider.sendMail({
        from: this.fromEmail,
        to: this.toEmail,
        subject: `💼 Nuevo mensaje de contacto de ${formData.name}`,
        html: createContactEmailTemplate(formData),
        replyTo: formData.email,
      });

      console.log('✅ Email principal enviado exitosamente');

      // Enviar email de confirmación (al usuario)
      console.log('=== Enviando AUTO-REPLY ===');
      console.log('De:', this.fromEmail);
      console.log('Para:', formData.email, '(este debería ser el email del usuario que llenó el formulario)');
      console.log('Asunto: Gracias por contactarme');
      console.log('Template: createAutoReplyTemplate (respuesta automática)');
      
      await this.emailProvider.sendMail({
        from: this.fromEmail,
        to: formData.email,
        subject: '✨ Gracias por contactarme - Emilia Galarza',
        html: createAutoReplyTemplate(formData.name),
      });

      console.log('✅ Auto-reply enviado exitosamente');

      return {
        success: true,
        message: 'Emails enviados exitosamente'
      };

    } catch (error) {
      console.error('Error in EmailService:', error);
      return {
        success: false,
        message: 'Error al enviar el email',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  async testConnection(): Promise<boolean> {
    try {
      return await this.emailProvider.verifyConnection();
    } catch (error) {
      console.error('Test connection failed:', error);
      return false;
    }
  }

  // Método para resetear el provider si hay problemas persistentes
  resetProvider(): void {
    console.log('=== Reseteando EmailService Provider ===');
    const config = getEmailConfig();
    this.emailProvider = new NodemailerProvider(config);
    console.log('Provider reseteado exitosamente');
  }
}

// Instancia singleton del servicio
export const emailService = new EmailService();
