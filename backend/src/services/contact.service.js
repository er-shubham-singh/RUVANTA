// services/contact.service.js
import Contact from '../models/contact.model.js';
import transporter from '../config/email.config.js';

export async function createContact(payload) {
  const { name, email, company, budget, service, message } = payload || {};

  // --- Simple defensive validation ---
  const errors = [];

  // name: must exist & be at least 2 chars
  if (!name || String(name).trim().length < 2) {
    errors.push('Name is required (min 2 chars).');
  }

  // email: very basic regex check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(String(email).trim())) {
    errors.push('A valid email is required.');
  }

  // message: must exist & be at least 10 chars
  if (!message || String(message).trim().length < 10) {
    errors.push('Message is required (min 10 chars).');
  }

  if (errors.length) {
    const err = new Error('Validation failed');
    err.statusCode = 400;
    err.publicMessage = 'Validation failed';
    err.details = errors;
    throw err;
  }

  // --- Save to DB ---
  let saved;
  try {
    const contact = new Contact({
      name: String(name).trim(),
      email: String(email).trim(),
      company: company ? String(company).trim() : '',
      budget: budget ? String(budget).trim() : '',
      service: service ? String(service).trim() : '',
      message: String(message).trim(),
    });

    saved = await contact.save();
  } catch (dbErr) {
    console.error('❌ Error saving contact to DB:', dbErr);
    const err = new Error('Database error');
    err.statusCode = 500;
    err.publicMessage = 'Failed to save contact';
    throw err;
  }

  // --- Prepare emails ---
  const FROM = process.env.FROM_EMAIL || process.env.SMTP_USER;
  const ADMIN_TO = process.env.ADMIN_NOTIFY_EMAIL || process.env.FROM_EMAIL || process.env.SMTP_USER;

  // Owner notification email
  const ownerSubject = `New contact form submission from ${saved.name}`;
  const ownerHtml = `
    <h2>New Inquiry</h2>
    <p><strong>Name:</strong> ${saved.name}</p>
    <p><strong>Email:</strong> ${saved.email}</p>
    <p><strong>Company:</strong> ${saved.company || '-'}</p>
    <p><strong>Budget:</strong> ${saved.budget || '-'}</p>
    <p><strong>Service:</strong> ${saved.service || '-'}</p>
    <p><strong>Message:</strong><br/>${(saved.message || '').replace(/\n/g, '<br/>')}</p>
    <hr/>
    <p>Saved to DB with id: ${saved._id}</p>
    <p>Received: ${saved.createdAt}</p>
  `;

  const ownerText = `
New Inquiry
Name: ${saved.name}
Email: ${saved.email}
Company: ${saved.company || '-'}
Budget: ${saved.budget || '-'}
Service: ${saved.service || '-'}
Message:
${saved.message}

Saved to DB with id: ${saved._id}
Received: ${saved.createdAt}
  `;

  // User confirmation email
  const userHtml = `
    <div>
      <p>Hi ${saved.name},</p>
      <p>Thanks for contacting us — we've received your message and a member of our team will get back to you within 24 hours.</p>
      <h4>Your submission</h4>
      <p><strong>Service:</strong> ${saved.service || '-'}</p>
      <p><strong>Budget:</strong> ${saved.budget || '-'}</p>
      <p><strong>Message:</strong><br/>${(saved.message || '').replace(/\n/g, '<br/>')}</p>
      <hr/>
      <p>If you need to reach us urgently, reply to this email or call us.</p>
      <p>Best,<br/>The Team</p>
    </div>
  `;

  const userText = `
Hi ${saved.name},

Thanks for contacting us — we've received your message and a member of our team will get back to you within 24 hours.

Your submission:
Service: ${saved.service || '-'}
Budget: ${saved.budget || '-'}
Message:
${saved.message}

If you need to reach us urgently, reply to this email or call us.

Best,
The Team
  `;

  // --- Send emails (best-effort) ---
  const emailResults = {
    owner: { sent: false, error: null },
    user: { sent: false, error: null },
  };

  try {
    if (transporter) {
      await transporter.sendMail({
        from: FROM,
        to: ADMIN_TO,
        subject: ownerSubject,
        text: ownerText,
        html: ownerHtml,
        replyTo: saved.email,
      });
      emailResults.owner.sent = true;
    }
  } catch (err) {
    console.warn('⚠️ Failed to send owner email:', err?.message || err);
    emailResults.owner.error = err?.message || String(err);
  }

  try {
    if (transporter) {
      await transporter.sendMail({
        from: FROM,
        to: saved.email,
        subject: 'We received your request — NovaWorks Studio',
        text: userText,
        html: userHtml,
        replyTo: ADMIN_TO,
      });
      emailResults.user.sent = true;
    }
  } catch (err) {
    console.warn('⚠️ Failed to send user confirmation email:', err?.message || err);
    emailResults.user.error = err?.message || String(err);
  }

  return {
    data: { id: saved._id },
    message: 'Contact request received. We will respond within 24 hours.',
    emails: emailResults,
  };
}
