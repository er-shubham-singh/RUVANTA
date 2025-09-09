// controllers/contact.controller.js
import { createContact } from '../services/contact.service.js';

export async function handleContactForm(req, res) {
  try {
    const payload = req.body;
    const result = await createContact(payload);
    return res.status(201).json({
      success: true,
      message: result.message || 'Contact request received.',
      data: result.data || {},
      emails: result.emails || {}
    });
  } catch (err) {
    console.error('Contact controller error:', err);
    const status = err.statusCode || 500;
    const message = err.publicMessage || err.message || 'Server error';
    return res.status(status).json({ success: false, message, details: err.details || undefined });
  }
}
