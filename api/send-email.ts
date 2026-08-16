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

    const { data, error } = await resend.emails.send({
      // The test sender works when the recipient is the Resend account email.
      // For production, set RESEND_FROM_EMAIL to a verified custom domain.
      from,
      to: ["techindiasolution7@gmail.com"],
      ...(typeof email === "string" && email.includes("@") ? { replyTo: email } : {}),
      subject: `New Project Requirement - ${fullName}`,
      html: `
        <h2>New Project Requirement</h2>
        <p><strong>Full Name:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Organization:</strong> ${escapeHtml(organization)}</p>
        <p><strong>User Type:</strong> ${escapeHtml(userType)}</p>
        <p><strong>Service:</strong> ${escapeHtml(serviceRequired)}</p>
        <p><strong>Project Name:</strong> ${escapeHtml(projectName)}</p>
        <p><strong>Existing Link:</strong> ${escapeHtml(existingLink)}</p>
        <p><strong>Description:</strong> ${escapeHtml(description)}</p>
        <p><strong>Preferred Contact:</strong> ${escapeHtml(preferredContact)}</p>
        <p><strong>Additional Notes:</strong> ${escapeHtml(additionalMessage)}</p>
      `,
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
