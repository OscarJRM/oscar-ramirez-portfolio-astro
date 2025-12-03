import type { ContactFormData } from '../types/contact.interface';

export const createContactEmailTemplate = (data: ContactFormData): string => {
  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nuevo mensaje de contacto</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                color: #ffffff;
                background-color: #0a0a0a;
                margin: 0;
                padding: 20px;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                background: #1a1a1a;
                border-radius: 16px;
                box-shadow: 0 20px 40px rgba(0,0,0,0.5);
                overflow: hidden;
                border: 1px solid #333;
            }
            .header {
                background: #8b5cf6;
                color: white;
                padding: 40px 30px;
                text-align: center;
            }
            .header h1 {
                margin: 0;
                font-size: 28px;
                font-weight: 700;
                margin-bottom: 8px;
            }
            .header p {
                margin: 0;
                font-size: 16px;
                opacity: 0.9;
            }
            .content {
                padding: 40px 30px;
            }
            .field {
                margin-bottom: 24px;
                padding: 20px;
                background: #2a2a2a;
                border-radius: 12px;
                border: 1px solid #404040;
                transition: all 0.3s ease;
            }
            .field:hover {
                border-color: #8b5cf6;
                box-shadow: 0 0 20px rgba(139, 92, 246, 0.1);
            }
            .field-label {
                font-weight: 600;
                color: #8b5cf6;
                margin-bottom: 8px;
                text-transform: uppercase;
                font-size: 12px;
                letter-spacing: 1px;
            }
            .field-value {
                font-size: 16px;
                color: #ffffff;
                word-break: break-word;
            }
            .message-field {
                background: #333;
                border: 1px solid #555;
                border-radius: 8px;
                padding: 20px;
                margin-top: 10px;
                line-height: 1.7;
                color: white;
            }
            .footer {
                background: #2a2a2a;
                padding: 30px;
                text-align: center;
                color: #888;
                font-size: 14px;
                border-top: 1px solid #404040;
            }
            .footer p {
                margin: 5px 0;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Nuevo Mensaje de Contacto</h1>
                <p>Portfolio de Emilia Galarza</p>
            </div>
            
            <div class="content">
                <div class="field">
                    <div class="field-label">👤 Nombre</div>
                    <div class="field-value">${data.name}</div>
                </div>
                
                <div class="field">
                    <div class="field-label">📧 Email</div>
                    <div class="field-value">${data.email}</div>
                </div>
                
                <div class="field">
                    <div class="field-label">💬 Mensaje</div>
                    <div class="message-field">
                        ${data.message.replace(/\n/g, '<br>')}
                    </div>
                </div>
            </div>
            
            <div class="footer">
                <p>Este mensaje fue enviado desde el formulario de contacto de tu portfolio.</p>
                <p>Fecha: ${new Date().toLocaleString('es-ES')}</p>
            </div>
        </div>
    </body>
    </html>
  `;
};

export const createAutoReplyTemplate = (name: string): string => {
  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Gracias por tu mensaje</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                color: #ffffff;
                background-color: #0a0a0a;
                margin: 0;
                padding: 20px;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                background: #1a1a1a;
                border-radius: 16px;
                box-shadow: 0 20px 40px rgba(0,0,0,0.5);
                overflow: hidden;
                border: 1px solid #333;
            }
            .header {
                background: #8b5cf6;
                color: white;
                padding: 40px 30px;
                text-align: center;
            }
            .header h1 {
                margin: 0;
                font-size: 28px;
                font-weight: 700;
                margin-bottom: 8px;
            }
            .content {
                padding: 40px 30px;
                text-align: center;
            }
            .content h2 {
                color: #8b5cf6;
                font-size: 24px;
                margin-bottom: 20px;
                font-weight: 600;
            }
            .content p {
                margin-bottom: 20px;
                font-size: 16px;
                color: #cccccc;
                line-height: 1.7;
            }
            .signature {
                background: #2a2a2a;
                border: 1px solid #404040;
                border-radius: 12px;
                padding: 25px;
                margin: 30px 0;
                display: inline-block;
            }
            .signature strong {
                color: #8b5cf6;
                font-size: 18px;
                font-weight: 600;
            }
            .footer {
                background: #2a2a2a;
                padding: 30px;
                text-align: center;
                color: #888;
                font-size: 14px;
                border-top: 1px solid #404040;
            }
            .emoji {
                font-size: 24px;
                margin-bottom: 10px;
                display: block;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <span class="emoji">✨</span>
                <h1>¡Gracias por contactarme!</h1>
            </div>
            
            <div class="content">
                <h2>Hola ${name},</h2>
                <p>Gracias por tu mensaje. He recibido tu consulta y me pondré en contacto contigo lo antes posible.</p>
                <p>Generalmente respondo en un plazo de <strong style="color: #8b5cf6;">24-48 horas</strong>.</p>
                <p>¡Que tengas un excelente día!</p>
                
                <div class="signature">
                    <strong>Emilia Galarza</strong><br>
                </div>
            </div>
            
            <div class="footer">
                <p>Este es un mensaje automático. Por favor, no respondas a este email.</p>
                <p>Si necesitas contactarme urgentemente, puedes responder al email original.</p>
            </div>
        </div>
    </body>
    </html>
  `;
};
