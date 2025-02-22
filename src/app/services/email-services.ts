export function generateAutoReplyEmail({
  name = "",
  interest = "",
  subscribe = true,
  senderName = "Simeon",
  senderTitle = "Digital Product Consultant",
  senderContactInfo = "",
}) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Thank You for Reaching Out!</title>
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
        background-color: #f9fafb;
        font-family: Arial, sans-serif;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        background: white;
      }
      img {
        max-width: 100%;
        height: auto;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <table width="100%" cellpadding="0" cellspacing="0" style="background: white; font-family: Arial, sans-serif;">
        <!-- Header with gradient -->
        <tr>
          <td align="center" style="padding: 40px 20px; background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);">
            <h1 style="color: white; margin: 0 0 10px 0; font-size: 28px;">Message Received! 🚀</h1>
            <p style="color: white; margin: 0; font-size: 16px;">Thank you for reaching out</p>
          </td>
        </tr>
        
        <!-- Main content -->
        <tr>
          <td style="padding: 40px 30px;">
            <p style="color: #374151; font-size: 16px; line-height: 24px; margin: 0 0 20px 0;">
              Hi ${name},
            </p>
            <p style="color: #374151; font-size: 16px; line-height: 24px; margin: 0 0 20px 0;">
              Thank you for getting in touch! I've received your message about <strong>${interest}</strong> and wanted to confirm that I'll be reviewing it personally as soon as possible. Your interest is important to me.
            </p>
            <p style="color: #374151; font-size: 16px; line-height: 24px; margin: 0 0 20px 0;">
              I'm committed to responding within 24-48 business hours with all the information you need. If your inquiry is urgent or requires immediate attention, please let me know.
            </p>
            
            <!-- Central highlight -->
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td align="center" style="padding: 0 0 30px 0;">
                  <div style="background: #3b82f6; border-radius: 8px; padding: 15px 25px; display: inline-block;">
                    <p style="color: white; font-size: 16px; margin: 0;">
                      <strong>Your message is in good hands</strong>
                    </p>
                  </div>
                </td>
              </tr>
            </table>
            
            <p style="color: #374151; font-size: 16px; line-height: 24px; margin: 0 0 20px 0;">
              In the meantime, if you need any additional information, don't hesitate to let me know. I'm here to help.
            </p>
          </td>
        </tr>
    
        <!-- Footer -->
        <tr>
          <td style="padding: 30px; background: #f8fafc;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td align="center" style="padding-bottom: 20px;">
                  <p style="color: #64748b; font-size: 14px; margin: 0 0 15px 0;">Best regards,</p>
                  <p style="color: #374151; font-size: 16px; font-weight: bold; margin: 0 0 5px 0;">${senderName}</p>
                  <p style="color: #64748b; font-size: 14px; margin: 0 0 5px 0;">${senderTitle}</p>
                  <p style="color: #64748b; font-size: 14px; margin: 0;">${senderContactInfo}</p>
                </td>
              </tr>
              ${
                subscribe
                  ? `
              <tr>
                <td align="center">
                  <p style="color: #64748b; font-size: 12px; margin: 20px 0 0 0;">
                    You've been added to my newsletter. You can unsubscribe at any time.
                  </p>
                </td>
              </tr>
              `
                  : ""
              }
              <tr>
                <td align="center">
                  <p style="color: #64748b; font-size: 12px; margin: 20px 0 0 0;">
                    © ${new Date().getFullYear()} ${senderName}. All rights reserved.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </body>
  </html>
    `;
}

export const simpleEmailToMe = ({
  name,
  email,
  interest,
  message,
  subscribe,
}: {
  name: string;
  interest: string;
  email: string;
  message: string;
  subscribe: boolean;
}) => {
  return `
  Hi ${name},
  You've got a new message about ${interest}
  Email: ${email}
  Message: ${message}
  Subscribe: ${subscribe}
  `;
};
