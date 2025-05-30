import { NextResponse } from "next/server";
import { Resend } from "resend";
import supabase from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

// Function to generate waitlist confirmation email
function generateWaitlistConfirmationEmail() {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Welcome to the Course Waitlist!</title>
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
    </style>
  </head>
  <body>
    <div class="container">
      <table width="100%" cellpadding="0" cellspacing="0" style="background: white; font-family: Arial, sans-serif;">
        <!-- Header with gradient -->
        <tr>
          <td align="center" style="padding: 40px 20px; background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);">
            <h1 style="color: white; margin: 0 0 10px 0; font-size: 28px;">🎉 You're on the List!</h1>
            <p style="color: white; margin: 0; font-size: 16px;">Welcome to the AI Agents Course Waitlist</p>
          </td>
        </tr>
        
        <!-- Main content -->
        <tr>
          <td style="padding: 40px 30px;">
            <p style="color: #374151; font-size: 16px; line-height: 24px; margin: 0 0 20px 0;">
              Hi there!
            </p>
            <p style="color: #374151; font-size: 16px; line-height: 24px; margin: 0 0 20px 0;">
              Thank you for joining the waitlist for our <strong>AI Agents Course with N8n</strong>! You're now part of an exclusive group that will get early access to this comprehensive program.
            </p>
            <p style="color: #374151; font-size: 16px; line-height: 24px; margin: 0 0 20px 0;">
              Here's what you can expect:
            </p>
            
            <!-- Features list -->
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding: 0 0 15px 0;">
                  <p style="color: #374151; font-size: 14px; margin: 0;">
                    ✅ <strong>Early access</strong> to course enrollment
                  </p>
                </td>
              </tr>
              <tr>
                <td style="padding: 0 0 15px 0;">
                  <p style="color: #374151; font-size: 14px; margin: 0;">
                    ✅ <strong>Special pricing</strong> for waitlist members
                  </p>
                </td>
              </tr>
              <tr>
                <td style="padding: 0 0 15px 0;">
                  <p style="color: #374151; font-size: 14px; margin: 0;">
                    ✅ <strong>Course updates</strong> and behind-the-scenes content
                  </p>
                </td>
              </tr>
              <tr>
                <td style="padding: 0 0 30px 0;">
                  <p style="color: #374151; font-size: 14px; margin: 0;">
                    ✅ <strong>Live guidance</strong> from an instructor with 8+ years of experience
                  </p>
                </td>
              </tr>
            </table>
            
            <!-- Central highlight -->
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td align="center" style="padding: 0 0 30px 0;">
                  <div style="background: #3b82f6; border-radius: 8px; padding: 15px 25px; display: inline-block;">
                    <p style="color: white; font-size: 16px; margin: 0;">
                      <strong>From zero to production-ready AI Agents</strong>
                    </p>
                  </div>
                </td>
              </tr>
            </table>
            
            <p style="color: #374151; font-size: 16px; line-height: 24px; margin: 0 0 20px 0;">
              I'll keep you updated on the course development and notify you as soon as enrollment opens. In the meantime, feel free to reach out if you have any questions!
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
                  <p style="color: #374151; font-size: 16px; font-weight: bold; margin: 0 0 5px 0;">Simeon</p>
                  <p style="color: #64748b; font-size: 14px; margin: 0 0 5px 0;">AI Instructor & Course Creator</p>
                  <p style="color: #64748b; font-size: 14px; margin: 0;">simeon@cover-io.com</p>
                </td>
              </tr>
              <tr>
                <td align="center">
                  <p style="color: #64748b; font-size: 12px; margin: 20px 0 0 0;">
                    © ${new Date().getFullYear()} Sime.dev. All rights reserved.
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

// Function to generate notification email to admin
function generateAdminNotificationEmail(email: string) {
  return `
  <h2>New Course Waitlist Signup</h2>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Joined at:</strong> ${new Date().toLocaleString()}</p>
  <p><strong>Source:</strong> Course Waitlist Page</p>
  `;
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { email } = data;

    // Validate email
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const { data: insertData, error: insertError } = await supabase
      .from("course_waitlist")
      .insert([{ email }])
      .select();

    if (insertError) {
      // Check if it's a duplicate email error
      if (insertError.code === "23505") {
        return NextResponse.json(
          { error: "This email is already on the waitlist" },
          { status: 409 }
        );
      }

      console.error("Database error:", insertError);
      return NextResponse.json(
        { error: "Failed to join waitlist" },
        { status: 500 }
      );
    }

    // Send confirmation email to user
    const confirmationEmailHtml = generateWaitlistConfirmationEmail();

    const { error: emailError } = await resend.emails.send({
      from: "simeon@cover-io.com",
      to: email,
      subject: "🎉 Welcome to the AI Agents Course Waitlist!",
      html: confirmationEmailHtml,
    });

    // Send notification email to admin
    const adminEmailHtml = generateAdminNotificationEmail(email);

    await resend.emails.send({
      from: "simeon@cover-io.com",
      to: "simeon@cover-io.com",
      subject: "New Course Waitlist Signup",
      html: adminEmailHtml,
    });

    if (emailError) {
      console.error("Email error:", emailError);
      // Don't fail the request if email fails, user is already in database
    }

    return NextResponse.json({
      success: true,
      message: "Successfully joined the waitlist",
      data: insertData,
    });
  } catch (error) {
    console.error("Server error processing waitlist signup:", error);
    return NextResponse.json(
      { error: "Server error processing request" },
      { status: 500 }
    );
  }
}
