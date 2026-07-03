import dotenv from "dotenv";

dotenv.config();

export const env = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: Number(process.env.PORT || 5000),
  CLIENT_URL: process.env.CLIENT_URL || "http://127.0.0.1:5173",
  DATABASE_URL:
    process.env.DATABASE_URL ||
    "postgresql://postgres:postgres@localhost:5432/utkarsh_scholarship?schema=public",
  JWT_SECRET: process.env.JWT_SECRET || "dev-only-utkarsh-secret",
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "7d",
  UPLOAD_DIR: process.env.UPLOAD_DIR || "server/uploads",
  PUBLIC_UPLOAD_URL: process.env.PUBLIC_UPLOAD_URL || "http://127.0.0.1:5000/uploads",
  MAIL_HOST: process.env.MAIL_HOST,
  MAIL_PORT: Number(process.env.MAIL_PORT || 587),
  MAIL_SECURE: process.env.MAIL_SECURE === "true",
  MAIL_USER: process.env.MAIL_USER,
  MAIL_PASS: process.env.MAIL_PASS,
  MAIL_FROM: process.env.MAIL_FROM || "Utkarsh Scholarship <noreply@aderf.co.in>",
};
