/// <reference types="node" />
import { Resend } from "resend";

const escapeHtml = (value: unknown) =>
  String(value ?? "N/A")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = req.body ?? {};
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

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["techindiasolution7@gmail.com"],
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
      return res.status(400).json({ error });
    }

    return res.status(200).json({ success: true, data });
  } catch {
    return res.status(500).json({ error: "Failed to send email" });
  }
}
