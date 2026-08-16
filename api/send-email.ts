/// <reference types="node" />
import { Resend } from "resend";

const escapeHtml = (value: unknown) =>
  String(value ?? "N/A")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

type ApiRequest = {
  method?: string;
  body?: unknown;
};

type ApiResponse = {
  status: (statusCode: number) => {
    json: (payload: unknown) => void;
  };
};

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const apiKey = process.env.RESEND_API_KEY?.trim();
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return res.status(500).json({ error: "Email service is not configured" });
    }

    const resend = new Resend(apiKey);
    const body = typeof req.body === "string" ? JSON.parse(req.body) : (req.body ?? {});
    const {
      fullName,
      phone,
      email,
      organization,
      userType,
      serviceRequired,
      projectName,
      existingLink,
      description,
      preferredContact,
      additionalMessage,
    } = body;

    if (!fullName || !phone) {
      return res.status(400).json({ error: "Full name and phone are required" });
    }

    const configuredFrom = process.env.RESEND_FROM_EMAIL?.trim();
    // A Resend account email is not automatically a verified sending domain.
    // Never use a Gmail address as `from`; use it as replyTo instead.
    const from = configuredFrom && !/@gmail\.com\s*>?$/i.test(configuredFrom)
      ? configuredFrom
      : "onboarding@resend.dev";

    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Project Lead</title>
</head>

<body style="margin:0;padding:0;background:#eef1f5;font-family:'Segoe UI',Arial,Helvetica,sans-serif;color:#172033;">

  <div style="max-width:660px;margin:0 auto;padding:32px 16px;">

    <!-- Main Card -->
    <div style="background:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 4px 24px rgba(17,24,39,0.08);border:1px solid #e5e7eb;">

      <!-- Header -->
      <div style="padding:36px 32px;background:linear-gradient(135deg,#111827 0%,#1f2937 100%);color:#ffffff;">

        <div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#9ca3af;font-weight:700;margin-bottom:10px;">
          New Project Requirement
        </div>

        <h1 style="margin:0;font-size:28px;line-height:1.3;font-weight:700;">
          🚀 New Project Lead Received
        </h1>

        <p style="margin:12px 0 0;font-size:14px;line-height:1.6;color:#d1d5db;">
          A new requirement has been submitted through your project requirement form.
        </p>
      </div>

      <!-- Lead Summary -->
      <div style="padding:28px 32px 16px;">
        <div style="font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#6b7280;font-weight:700;margin-bottom:10px;">
          Lead
        </div>

        <div style="font-size:26px;font-weight:700;color:#111827;margin-bottom:8px;">
          ${escapeHtml(fullName)}
        </div>

        <div style="display:inline-block;font-size:13px;font-weight:600;color:#374151;background:#f3f4f6;padding:6px 14px;border-radius:999px;">
          ${escapeHtml(userType)} · ${escapeHtml(serviceRequired)}
        </div>
      </div>

      <!-- Contact Information -->
      <div style="padding:20px 32px 8px;">
        <div style="font-size:13px;font-weight:700;color:#111827;margin-bottom:14px;">
          👤 &nbsp;CONTACT INFORMATION
        </div>

        <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;border-collapse:collapse;">
          <tr>
            <td style="padding:11px 0;color:#6b7280;width:200px;border-bottom:1px solid #f3f4f6;">Full Name</td>
            <td style="padding:11px 0;font-weight:600;color:#111827;border-bottom:1px solid #f3f4f6;">${escapeHtml(fullName)}</td>
          </tr>
          <tr>
            <td style="padding:11px 0;color:#6b7280;border-bottom:1px solid #f3f4f6;">WhatsApp / Contact Number</td>
            <td style="padding:11px 0;font-weight:600;color:#111827;border-bottom:1px solid #f3f4f6;">${escapeHtml(phone)}</td>
          </tr>
          <tr>
            <td style="padding:11px 0;color:#6b7280;border-bottom:1px solid #f3f4f6;">Email Address</td>
            <td style="padding:11px 0;border-bottom:1px solid #f3f4f6;">
              <a href="mailto:${escapeHtml(email)}" style="color:#2563eb;text-decoration:none;font-weight:600;">${escapeHtml(email)}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:11px 0;color:#6b7280;border-bottom:1px solid #f3f4f6;">School / College / Company / Shop</td>
            <td style="padding:11px 0;font-weight:600;color:#111827;border-bottom:1px solid #f3f4f6;">${escapeHtml(organization)}</td>
          </tr>
          <tr>
            <td style="padding:11px 0;color:#6b7280;border-bottom:1px solid #f3f4f6;">User Type</td>
            <td style="padding:11px 0;font-weight:600;color:#111827;border-bottom:1px solid #f3f4f6;">${escapeHtml(userType)}</td>
          </tr>
          <tr>
            <td style="padding:11px 0;color:#6b7280;">Preferred Contact Method</td>
            <td style="padding:11px 0;font-weight:600;color:#111827;">${escapeHtml(preferredContact)}</td>
          </tr>
        </table>
      </div>

      <!-- Project Information -->
      <div style="margin:24px 32px;padding:24px;background:#f8fafc;border:1px solid #e5e7eb;border-radius:16px;">
        <div style="font-size:13px;font-weight:700;color:#111827;margin-bottom:16px;">
          💻 &nbsp;PROJECT INFORMATION
        </div>

        <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;">
          <tr>
            <td style="padding:10px 0;color:#6b7280;width:200px;">Service Required</td>
            <td style="padding:10px 0;font-weight:700;color:#111827;">${escapeHtml(serviceRequired)}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;color:#6b7280;">Project / Website Name</td>
            <td style="padding:10px 0;font-weight:600;color:#111827;">${escapeHtml(projectName)}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;color:#6b7280;">Existing Website / GitHub Link</td>
            <td style="padding:10px 0;word-break:break-word;">
              ${existingLink && String(existingLink).trim() !== ""
                ? `<a href="${escapeHtml(existingLink)}" style="color:#2563eb;text-decoration:none;font-weight:600;">${escapeHtml(existingLink)}</a>`
                : `<span style="color:#9ca3af;">Not provided</span>`
              }
            </td>
          </tr>
        </table>
      </div>

      <!-- Requirement Description -->
      <div style="padding:0 32px 24px;">
        <div style="font-size:13px;font-weight:700;color:#111827;margin-bottom:12px;">
          📋 &nbsp;REQUIREMENT DESCRIPTION
        </div>
        <div style="background:#ffffff;border:1px solid #e5e7eb;border-radius:14px;padding:18px;font-size:14px;line-height:1.7;color:#374151;">
          ${escapeHtml(description)}
        </div>
      </div>

      <!-- Additional Notes -->
      <div style="padding:0 32px 28px;">
        <div style="font-size:13px;font-weight:700;color:#111827;margin-bottom:12px;">
          📝 &nbsp;ADDITIONAL NOTES
        </div>
        <div style="background:#f9fafb;border-left:4px solid #111827;border-radius:10px;padding:16px 18px;font-size:14px;line-height:1.7;color:#374151;">
          ${escapeHtml(additionalMessage)}
        </div>
      </div>

      <!-- Quick Action -->
      <div style="padding:28px 32px;background:#f8fafc;border-top:1px solid #e5e7eb;">
        <div style="font-size:13px;font-weight:700;color:#111827;margin-bottom:14px;">
          ⚡ &nbsp;QUICK ACTION
        </div>

        <div style="font-size:14px;line-height:1.7;color:#374151;margin-bottom:20px;">
          Contact the lead using their preferred contact method and collect any missing project requirements.
        </div>

        <table cellpadding="0" cellspacing="0" style="width:100%;">
          <tr>
            <td style="padding-right:8px;padding-bottom:8px;">
              <a href="https://wa.me/${String(phone ?? "").replace(/[^0-9]/g, "")}"
                style="display:block;text-align:center;background:#25D366;color:#ffffff;text-decoration:none;padding:13px 18px;border-radius:10px;font-size:14px;font-weight:700;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#ffffff" style="vertical-align:middle;margin-right:6px;">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12.004 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.464 3.484 1.345 5.001L2 22l5.117-1.341a9.958 9.958 0 004.887 1.246h.004c5.514 0 9.997-4.483 9.997-9.998 0-2.67-1.04-5.182-2.929-7.070a9.935 9.935 0 00-7.072-2.834zm5.845 15.842a8.245 8.245 0 01-5.845 2.421h-.003a8.263 8.263 0 01-4.213-1.155l-.302-.179-3.013.79.804-2.936-.197-.312a8.253 8.253 0 01-1.266-4.42c0-4.552 3.705-8.257 8.259-8.257a8.209 8.209 0 015.842 2.42 8.196 8.196 0 012.42 5.842 8.243 8.243 0 01-2.486 5.786z"/>
                </svg>
                WhatsApp
              </a>
            </td>
            <td style="padding-right:8px;padding-bottom:8px;">
              <a href="tel:${escapeHtml(phone)}"
                style="display:block;text-align:center;background:#111827;color:#ffffff;text-decoration:none;padding:13px 18px;border-radius:10px;font-size:14px;font-weight:700;">
                📞 Call
              </a>
            </td>
            <td style="padding-bottom:8px;">
              <a href="mailto:${escapeHtml(email)}"
                style="display:block;text-align:center;background:#ffffff;color:#111827;text-decoration:none;padding:12px 18px;border-radius:10px;border:1px solid #d1d5db;font-size:14px;font-weight:700;">
                ✉️ Email
              </a>
            </td>
          </tr>
        </table>
      </div>

      <!-- Footer -->
      <div style="padding:20px 32px;background:#111827;text-align:center;color:#9ca3af;font-size:12px;">
        Automated Project Lead Notification &nbsp;•&nbsp; Do not reply to this email
      </div>

    </div>

    <div style="text-align:center;padding:18px 0;color:#9ca3af;font-size:12px;">
      This is an automated message generated from your website's project requirement form.
    </div>

  </div>

</body>
</html>
`;

    const { data, error } = await resend.emails.send({
      // The test sender works when the recipient is the Resend account email.
      // For production, set RESEND_FROM_EMAIL to a verified custom domain.
      from,
      to: ["techindiasolution7@gmail.com"],
      ...(typeof email === "string" && email.includes("@") ? { replyTo: email } : {}),
      subject: `New Project Requirement - ${fullName}`,
      html,
    });

    if (error) {
      console.error("Resend rejected the email", error);
      return res.status(502).json({
        error: error.message || "Email provider rejected the message",
      });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Email handler failed", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}