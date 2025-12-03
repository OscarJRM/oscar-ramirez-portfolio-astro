import nodemailer from 'nodemailer';
import type { EmailConfig } from '../types/contact.interface';

export class NodemailerProvider {
  private transporter!: nodemailer.Transporter;
  private config: EmailConfig;

  constructor(config: EmailConfig) {
    this.config = config;
    this.createTransporter();
  }

  private createTransporter() {
    console.log('=== Creando nuevo transporter ===');
    this.transporter = nodemailer.createTransport({
      host: this.config.host,
      port: this.config.port,
      secure: this.config.secure,
      auth: {
        user: this.config.auth.user,
        pass: this.config.auth.pass,
      },
      pool: true,
      maxConnections: 5,
      maxMessages: 100,
      rateDelta: 20000,
      rateLimit: 5,
    });
    console.log('Transporter creado exitosamente');
  }

  private async ensureConnection(): Promise<boolean> {
    try {
      console.log('=== Verificando conexión===');
      await this.transporter.verify();
      console.log('✅ Conexión SMTP verificada exitosamente');
      return true;
    } catch (error) {
      console.warn('⚠️ Conexión falló, recreando transporter...');
      console.error('Error de conexión:', error);
      
      
      this.createTransporter();
      
      
      try {
        await this.transporter.verify();
        console.log('✅ Conexión recreada exitosament');
        return true;
      } catch (retryError) {
        console.error('❌ Error al recrear conexión:', retryError);
        return false;
      }
    }
  }

  async sendMail(options: {
    from: string;
    to: string;
    subject: string;
    html: string;
    replyTo?: string;
  }) {
    try {
      
      const isConnected = await this.ensureConnection();
      if (!isConnected) {
        throw new Error('No se pudo establecer conexión SMTP');
      }

      console.log('=== Enviando email ===');
      console.log('Opciones de envío:', {
        from: options.from,
        to: options.to,
        subject: options.subject,
        replyTo: options.replyTo,
        htmlLength: options.html.length,
      });
      
      const result = await this.transporter.sendMail(options);
      
      console.log('Email enviado exitosamente:', {
        messageId: result.messageId,
        response: result.response,
      });
      
      return {
        success: true,
        messageId: result.messageId,
        response: result.response,
      };
    } catch (error) {
      console.error('=== Error enviando email ===');
      console.error('Error details:', error);
      throw error;
    }
  }

  async verifyConnection(): Promise<boolean> {
    return await this.ensureConnection();
  }
}

// Configuración usando variables de entorno
export const getEmailConfig = (): EmailConfig => {
  console.log('=== Cargando configuración de email ===');
  

  console.log('Variables de entorno disponibles:');
  console.log('SMTP_HOST:', process.env.SMTP_HOST || 'NO DEFINIDO');
  console.log('SMTP_PORT:', process.env.SMTP_PORT || 'NO DEFINIDO');
  console.log('SMTP_SECURE:', process.env.SMTP_SECURE || 'NO DEFINIDO');
  console.log('SMTP_USER:', process.env.SMTP_USER || 'NO DEFINIDO');
  console.log('SMTP_PASS:', process.env.SMTP_PASS ? '***CONFIGURADO***' : 'NO DEFINIDO');
  
  const config = {
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER || '',
      pass: process.env.SMTP_PASS || '',
    },
  };
  
  console.log('Configuración final:', {
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.auth.user,
      pass: config.auth.pass ? '***CONFIGURADO***' : 'VACÍO',
    },
  });
  
  return config;
};
