export default async function handler(req, res) {
  try {
    const { createRequire } = await import('module');
    const require = createRequire(import.meta.url);
    const nodemailer = require('nodemailer');
    return res.status(200).json({ 
      ok: true, 
      nodemailer: typeof nodemailer.createTransport,
      env: {
        hasUser: \!\!process.env.GMAIL_USER,
        hasPass: \!\!process.env.GMAIL_APP_PASSWORD
      }
    });
  } catch (err) {
    return res.status(500).json({ error: err.message, code: err.code, stack: err.stack?.split('\n')[0] });
  }
}
