import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import { env } from "../config/env.js";
import { prisma } from "../config/prisma.js";

const transporter = env.MAIL_USER
  ? nodemailer.createTransport({
      host: env.MAIL_HOST,
      port: env.MAIL_PORT,
      secure: env.MAIL_SECURE,
      auth: { user: env.MAIL_USER, pass: env.MAIL_PASS },
    })
  : null;

export const createOtp = async (userId, purpose) => {
  const code = String(Math.floor(100000 + Math.random() * 900000));
  const codeHash = await bcrypt.hash(code, 10);
  await prisma.otpCode.create({
    data: {
      userId,
      purpose,
      codeHash,
      expiresAt: new Date(Date.now() + 10 * 60 * 1000),
    },
  });
  return code;
};

export const sendOtpEmail = async ({ to, name, code, purpose }) => {
  const subject = purpose === "RESET_PASSWORD" ? "Reset your Utkarsh password" : "Verify your Utkarsh email";
  const text = `Dear ${name}, your Utkarsh OTP is ${code}. It is valid for 10 minutes.`;

  if (!transporter) {
    console.log(`[DEV OTP] ${to}: ${code}`);
    return;
  }

  await transporter.sendMail({
    from: env.MAIL_FROM,
    to,
    subject,
    text,
  });
};
