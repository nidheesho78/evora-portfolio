// app/api/contact/route.js
const nodemailer = require("nodemailer");
import fs from "fs";
import path from "path";

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

    // // Send thank-you auto-reply to the user
    // await transporter.sendMail({
    //   from: `"Evora Future" <${process.env.ZOHO_EMAIL}>`,
    //   to: email,
    //   subject: "We received your message – Thank You!",
    //   html: `
    //     <p>Hi ${name},</p>
    //     <p>Thank you for contacting <strong>Evora Future</strong>.</p>
    //     <p>We’ve received your message and our team will get back to you shortly.</p>
    //     <br/>
    //     <p>Best regards,<br/>Evora Future Team</p>
    //   `,
    // });

    // Send thank-you auto-reply to the user
    await transporter.sendMail({
      from: `"Evora Future" <${process.env.ZOHO_EMAIL}>`,
      to: email,
      subject: "Thank You for Reaching Out – Evora Future",
      html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You - Evora Future</title>
      <style>
        body { font-family: Arial, Helvetica, sans-serif; margin: 0; padding: 0; background-color: #f6f6f6; color: #333; }
        .container { max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        .header { background: #ffffff; padding: 30px 20px; text-align: center; }
        .header img { max-width: 180px; height: auto; }
        .content { padding: 30px 25px; line-height: 1.6; font-size: 16px; }
        .content p { margin: 0 0 20px; }
        .highlight { color: #005369; font-weight: bold; }
        .signature { margin-top: 40px; border-top: 1px solid #eee; padding-top: 25px; font-size: 15px; }
        .signature strong { color: #005369; }
        .contact-info { margin-top: 12px; font-size: 14px; color: #555; }
        .contact-info a { color: #005369; text-decoration: none; }
        .contact-info a:hover { text-decoration: underline; }
        .footer { background: #f8f8f8; padding: 20px; text-align: center; font-size: 13px; color: #777; border-top: 1px solid #eee; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
  <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; display: inline-block;">
    <img src="cid:logo" alt="Evora Future Logo" style="max-width:180px; height:auto; display:block;" />
  </div>
</div>
        
        <div class="content">
          <p>Dear <strong>${name}</strong>,</p>
          
          <p>Thank you for getting in touch with <span class="highlight">Evora Future Technical Services LLC</span>.</p>
          
          <p>We have received your message and our team is reviewing it carefully. We will get back to you very shortly with a personalized response.</p>

          <div class="signature">
            <p style="margin: 0;">Warm regards,</p>
            <p style="margin: 8px 0 4px;"><strong>Niyasudeen</strong><br>General Manager</p>
            <p style="margin: 0; color: #005369; font-weight: bold;">Evora Future Technical Services LLC</p>
            
            <div class="contact-info">
              <div><strong>Mobile:</strong> +971 54 200 4993</div>
              <div><strong>Email:</strong> <a href="mailto:niyas@evorafuture.com">niyas@evorafuture.com</a></div>
              <!-- <div><strong>Website:</strong> <a href="https://www.evorafuture.com">www.evorafuture.com</a></div>  ← uncomment & update if you have a website -->
              <div>Dubai, United Arab Emirates</div>
            </div>
          </div>
        </div>
        
        <div class="footer">
          © ${new Date().getFullYear()} Evora Future Technical Services LLC. All rights reserved.<br>
          Transforming spaces with precision, quality, and creativity.
        </div>
      </div>
    </body>
    </html>
  `,
      attachments: [
        {
          filename: "logo.png", // can be any name
          path: path.join(process.cwd(), "public/logo.png"), // ← adjust path to your file
          cid: "logo", // must match src="cid:logo"
        },
      ],
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
