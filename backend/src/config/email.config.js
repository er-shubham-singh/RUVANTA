// config/email.config.js
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  FROM_EMAIL
} = process.env;

if (!SMTP_USER || !SMTP_PASS) {
  console.warn('⚠️ SMTP credentials missing. Emails will not be sent until configured.');
}

// create transporter using SMTP config (works for Gmail app passwords)
const transporter = nodemailer.createTransport({
  host: SMTP_HOST || 'smtp.gmail.com',
  port: SMTP_PORT ? Number(SMTP_PORT) : 587,
  secure: false, // use STARTTLS (false for port 587)
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

transporter.verify((err, success) => {
  if (err) {
    console.error('❌ SMTP verify error:', err);
  } else {
    console.log('✅ SMTP ready to send emails');
  }
});

export default transporter;
