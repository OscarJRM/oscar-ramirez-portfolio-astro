import type { ContactFormData } from '../../types/contact.interface';

export const createContactEmailTemplate = (data: ContactFormData): string => {
  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nuevo mensaje de contacto</title>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap');
            
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Outfit', sans-serif;
                background: #000000;
                color: #ffffff;
                line-height: 1.6;
                padding: 20px;
            }
            
            .container {
                max-width: 600px;
                margin: 0 auto;
                background: #000000;
                border-radius: 20px;
                overflow: hidden;
                border: 1px solid #333333;
            }
            
            .header {
                text-align: center;
                padding: 40px 30px;
                background: linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(79, 70, 229, 0.1) 100%);
                border-bottom: 1px solid #333333;
            }
            
            .header h1 {
                font-size: 32px;
                font-weight: 700;
                margin-bottom: 10px;
                background: linear-gradient(135deg, #a855f7, #3b82f6);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            
            .header p {
                color: #9ca3af;
                font-size: 16px;
            }
            
            .content {
                padding: 40px 30px;
            }
            
            .field {
                margin-bottom: 24px;
                background: #111111;
                border-radius: 12px;
                padding: 20px;
                border: 1px solid #333333;
            }
            
            .field-label {
                font-weight: 600;
                color: #a855f7;
                margin-bottom: 8px;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }
            
            .field-value {
                color: #ffffff;
                font-size: 16px;
                line-height: 1.6;
            }
            
            .message-field {
                background: #0a0a0a;
                border: 1px solid #333333;
                border-radius: 8px;
                padding: 16px;
                margin-top: 8px;
                color: #ffffff;
                min-height: 100px;
            }
            
            .footer {
                background: #111111;
                padding: 30px;
                text-align: center;
                border-top: 1px solid #333333;
            }
            
            .footer p {
                color: #6b7280;
                font-size: 14px;
                margin-bottom: 5px;
            }
            
            .signature {
                margin-top: 20px;
                padding-top: 20px;
                border-top: 1px solid #333333;
            }
            
            .signature h3 {
                color: #a855f7;
                font-weight: 600;
                margin-bottom: 5px;
            }
            
            .signature p {
                color: #9ca3af;
                font-size: 14px;
            }
            
            .icon {
                display: inline-block;
                margin-right: 8px;
                font-size: 16px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>✨ Nuevo Mensaje</h1>
                <p>Portfolio de Emilia Galarza</p>
            </div>
            
            <div class="content">
                <div class="field">
                    <div class="field-label">
                        <span class="icon">👤</span> Nombre
                    </div>
                    <div class="field-value">${data.name}</div>
                </div>
                
                <div class="field">
                    <div class="field-label">
                        <span class="icon">📧</span> Email
                    </div>
                    <div class="field-value">${data.email}</div>
                </div>
                
                <div class="field">
                    <div class="field-label">
                        <span class="icon">💬</span> Mensaje
                    </div>
                    <div class="message-field">
                        ${data.message.replace(/\n/g, '<br>')}
                    </div>
                </div>
            </div>
            
            <div class="footer">
                <div class="signature">
                    <h3>Emilia Galarza</h3>
                    <p>Portfolio Profesional</p>
                </div>
                <p>Recibido el ${new Date().toLocaleString('es-ES', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}</p>
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
            @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap');
            
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Outfit', sans-serif;
                background: #000000;
                color: #ffffff;
                line-height: 1.6;
                padding: 20px;
            }
            
            .container {
                max-width: 600px;
                margin: 0 auto;
                background: #000000;
                border-radius: 20px;
                overflow: hidden;
                border: 1px solid #333333;
            }
            
            .header {
                text-align: center;
                padding: 50px 30px;
                background: linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(79, 70, 229, 0.1) 100%);
                border-bottom: 1px solid #333333;
            }
            
            .header h1 {
                font-size: 36px;
                font-weight: 700;
                margin-bottom: 10px;
                background: linear-gradient(135deg, #a855f7, #3b82f6);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            
            .content {
                padding: 40px 30px;
                text-align: center;
            }
            
            .greeting {
                font-size: 24px;
                font-weight: 600;
                color: #ffffff;
                margin-bottom: 20px;
            }
            
            .message {
                font-size: 16px;
                color: #d1d5db;
                margin-bottom: 20px;
                line-height: 1.7;
            }
            
            .highlight {
                color: #a855f7;
                font-weight: 600;
            }
            
            .footer {
                background: #111111;
                padding: 30px;
                text-align: center;
                border-top: 1px solid #333333;
            }
            
            .signature {
                margin-bottom: 20px;
            }
            
            .signature h3 {
                color: #a855f7;
                font-weight: 600;
                font-size: 20px;
                margin-bottom: 5px;
            }
            
            .signature p {
                color: #9ca3af;
                font-size: 14px;
            }
            
            .footer p {
                color: #6b7280;
                font-size: 12px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>✨ ¡Gracias!</h1>
            </div>
            
            <div class="content">
                <div class="greeting">Hola ${name},</div>
                
                <div class="message">
                    Gracias por contactarme a través de mi portfolio. <br>
                    He recibido tu mensaje y me pondré en contacto contigo <span class="highlight">lo antes posible</span>.
                </div>
                
                <div class="message">
                    Generalmente respondo en un plazo de <span class="highlight">24-48 horas</span>.
                </div>
                
                <div class="message">
                    ¡Que tengas un excelente día! 🚀
                </div>
            </div>
            
            <div class="footer">
                <div class="signature">
                    <h3>Emilia Galarza</h3>
                    <p>Desarrolladora & Diseñadora</p>
                </div>
                <p>Este es un mensaje automático. Por favor, no respondas a este email.</p>
            </div>
        </div>
    </body>
    </html>
  `;
};
