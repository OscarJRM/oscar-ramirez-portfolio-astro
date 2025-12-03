import nodemailer from 'nodemailer';
import type { EmailConfig } from '../../types/contact.interface';

// Cargar variables de entorno explícitamente
import { config } from 'dotenv';
config();

export class NodemailerProvider {
  private transporter: nodemailer.Transporter;

  constructor(config: EmailConfig) {
    console.log('NodemailerProvider Config Debug:', {
      host: config.host,
      port: config.port,
      secure: config.secure,
      user: config.auth.user || 'VACÍO',
      pass: config.auth.pass ? 'CONFIGURADO' : 'VACÍO'
    });

    this.transporter = nodemailer.createTransporter({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: {
        user: config.auth.user,
        pass: config.auth.pass,
      },
      // Opciones adicionales para Gmail
      requireTLS: true,
      tls: {
        rejectUnauthorized: false
      }
    });
  } from 'nodemailer';
import type { EmailConfig } from '../../types/contact.interface';

export class NodemailerProvider {
  private transporter: nodemailer.Transporter;

  constructor(config: EmailConfig) {
    this.transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: {
        user: config.auth.user,
        pass: config.auth.pass,
      },
    });
  }

  async sendMail(options: {
    from: string;
    to: string;
    subject: string;
    html: string;
    replyTo?: string;
  }) {
    try {
      const result = await this.transporter.sendMail(options);
      return {
        success: true,
        messageId: result.messageId,
        response: result.response,
      };
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }

  async verifyConnection(): Promise<boolean> {
    try {
      await this.transporter.verify();
      return true;
    } catch (error) {
      console.error('SMTP connection error:', error);
      return false;
    }
  }
}

// Configuración usando variables de entorno
export const getEmailConfig = (): EmailConfig => {
  // Debug de variables de entorno
  console.log('Environment Variables Debug:');
  console.log('SMTP_HOST:', process.env.SMTP_HOST || 'NO ENCONTRADO');
  console.log('SMTP_USER:', process.env.SMTP_USER || 'NO ENCONTRADO');
  console.log('SMTP_PASS:', process.env.SMTP_PASS ? 'ENCONTRADO' : 'NO ENCONTRADO');

  // Configuración con fallback hardcodeado temporalmente
  const config = {
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER || 'ramirez7oscar8203@gmail.com',
      pass: process.env.SMTP_PASS || 'geys oyxf wzzf jxxj',
    },
  };

  console.log('Final Config:', {
    ...config,
    auth: {
      user: config.auth.user,
      pass: config.auth.pass ? 'CONFIGURADO' : 'VACÍO'
    }
  });

  return config;
};
