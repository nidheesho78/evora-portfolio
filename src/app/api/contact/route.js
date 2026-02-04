// app/api/contact/route.js
const nodemailer = require("nodemailer");

async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone = "", subject, message } = body;

    if (
      !name?.trim() ||
      !email?.trim() ||
      !subject?.trim() ||
      !message?.trim()
    ) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.in", // Correct for @zohomail.in / personal Zoho accounts
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_PASSWORD, // Use app-specific password only!
      },

      // ── ONLY FOR LOCAL DEVELOPMENT ──
      // Keep if you still get "self-signed certificate in certificate chain"
      // Remove/comment before deploying to Vercel/etc.
      tls: {
        rejectUnauthorized: false,
      },
      // ─────────────────────────────────
      // Optional debug: uncomment to see SMTP conversation in terminal
      // logger: true,
      // debug: true,
    });
    console.log("Using Zoho Email:", process.env.ZOHO_EMAIL);
    console.log("Password length:", process.env.ZOHO_PASSWORD?.length); // Should be exactly 16

    // Send email to your company inbox
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.ZOHO_EMAIL}>`,
      to: process.env.ZOHO_EMAIL,
      replyTo: email,
      subject: `New Inquiry: ${subject}`,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Message:</strong><br>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    // Send thank-you auto-reply to the user
    await transporter.sendMail({
      from: `"Evora Future" <${process.env.ZOHO_EMAIL}>`,
      to: email,
      subject: "We received your message – Thank You!",
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for contacting <strong>Evora Future</strong>.</p>
        <p>We’ve received your message and our team will get back to you shortly.</p>
        <br/>
        <p>Best regards,<br/>Evora Future Team</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Contact API Error:");
    console.error("Message:", error.message);
    console.error("Code:", error.code);
    console.error("Full error:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || "Failed to send email",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}

module.exports = { POST };
