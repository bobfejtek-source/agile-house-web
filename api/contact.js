const nodemailer = require('nodemailer');

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitize(str) {
  return String(str).replace(/[\r\n]/g, ' ').trim();
}

module.exports = async function handler(req, res) {
  if (req.method \!== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, message } = req.body || {};

  if (\!name || \!email || \!message) return res.status(400).json({ error: 'Name, email and message are required' });
  if (String(name).length > 100) return res.status(400).json({ error: 'Name too long' });
  if (String(email).length > 254) return res.status(400).json({ error: 'Email too long' });
  if (String(message).length > 5000) return res.status(400).json({ error: 'Message too long' });
  if (\!EMAIL_REGEX.test(String(email))) return res.status(400).json({ error: 'Invalid email' });

  const safeName = sanitize(name);
  const safeEmail = sanitize(email);
  const safeMessage = String(message).trim();

  const GMAIL_USER = process.env.GMAIL_USER;
  const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;

  if (\!GMAIL_USER || \!GMAIL_APP_PASSWORD) return res.status(500).json({ error: 'Email service not configured' });

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD }
    });

    await transporter.sendMail({
      from: `"Agile House Contact" <${GMAIL_USER}>`,
      to: 'bob.fejtek@gmail.com',
      replyTo: safeEmail,
      subject: `New message from ${safeName} via agilehouse.cz`,
      text: `Name: ${safeName}\nEmail: ${safeEmail}\n\nMessage:\n${safeMessage}`,
      html: `<div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0A0A08;color:#F1EFE8;padding:32px;border-radius:12px;"><div style="border-left:3px solid #D85A30;padding-left:16px;margin-bottom:24px;"><p style="margin:0;font-size:12px;letter-spacing:2px;color:#D85A30;font-family:monospace;">AGILE HOUSE</p><p style="margin:4px 0 0;font-size:12px;color:rgba(241,239,232,0.4);font-family:monospace;">NEW MESSAGE</p></div><table style="width:100%;border-collapse:collapse;margin-bottom:24px;"><tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:rgba(241,239,232,0.4);font-size:13px;width:80px;">From</td><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#F1EFE8;">${safeName}</td></tr><tr><td style="padding:10px 0;color:rgba(241,239,232,0.4);font-size:13px;">Email</td><td style="padding:10px 0;"><a href="mailto:${safeEmail}" style="color:#D85A30;text-decoration:none;">${safeEmail}</a></td></tr></table><div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:20px;"><p style="margin:0 0 12px;color:rgba(241,239,232,0.5);font-size:12px;font-family:monospace;">MESSAGE</p><p style="margin:0;color:#F1EFE8;line-height:1.7;white-space:pre-wrap;">${safeMessage.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</p></div><p style="margin:24px 0 0;color:rgba(241,239,232,0.2);font-size:12px;font-family:monospace;">Reply to this email to respond to ${safeName}.</p></div>`
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact error:', err);
    return res.status(500).json({ error: 'Failed to send message' });
  }
};
