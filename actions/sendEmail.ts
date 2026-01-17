// actions/sendEmail.ts
"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  const subject = formData.get("subject") as string || null; // optional

  if (!name || !email || !message) {
    return { error: "Please fill in all required fields" };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.FROM_EMAIL}>`,
      to: process.env.TO_EMAIL,
      subject: subject ? `${subject} - from ${name}` : `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n${subject ? `Subject: ${subject}\n` : ""}\nMessage:\n${message}`,
      replyTo: email,
    });

    return { success: true, message: "Thank you! Your message has been sent." };
  } catch (err) {
    console.error("SMTP error:", err);
    return { error: "Failed to send email. Please try again." };
  }
}