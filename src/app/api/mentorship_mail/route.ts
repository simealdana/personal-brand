import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type FileType = keyof typeof SUPPORTED_FILE_TYPES;

interface AttachmentFile {
  filename: string;
  content: string;
  contentType: FileType;
}

interface ResendAttachment {
  filename: string;
  content: Buffer;
  contentType: FileType;
}

const SUPPORTED_FILE_TYPES = {
  "application/pdf": ".pdf",
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/gif": ".gif",
  "application/msword": ".doc",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
    ".docx",
} as const;

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { from, to, subject, html, files } = data;

    // Validate required fields
    if (!from || !to || !subject || !html) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    let attachments: ResendAttachment[] = [];

    // Only process files if they are provided
    if (files) {
      // Convert files to array if it's a single object
      const filesArray = Array.isArray(files) ? files : [files];

      // Validate files
      for (const file of filesArray as AttachmentFile[]) {
        if (!file.filename || !file.content || !file.contentType) {
          return NextResponse.json(
            { error: "Each file must have filename, content, and contentType" },
            { status: 400 }
          );
        }

        if (!SUPPORTED_FILE_TYPES[file.contentType]) {
          return NextResponse.json(
            {
              error: `Unsupported file type: ${
                file.contentType
              }. Supported types are: ${Object.keys(SUPPORTED_FILE_TYPES).join(
                ", "
              )}`,
            },
            { status: 400 }
          );
        }
      }

      attachments = filesArray.map((file: AttachmentFile) => ({
        filename: file.filename,
        content: Buffer.from(file.content, "base64"),
        contentType: file.contentType,
      }));
    }

    const { data: emailData, error: emailError } = await resend.emails.send({
      from,
      to,
      subject,
      html,
      attachments,
    });

    if (emailError) {
      throw new Error("Failed to send email");
    }

    return NextResponse.json({
      message: "Email sent successfully",
      email_data: emailData,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
