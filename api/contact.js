export default async function handler(req, res) {
  const info = { node: process.version };
  
  // Test 1: built-in fs
  try {
    const fs = await import('fs');
    info.fs = 'ok';
  } catch(e) { info.fs = e.message; }

  // Test 2: dynamic require of nodemailer
  try {
    const mod = await import('module');
    const req2 = mod.createRequire(import.meta.url);
    req2('nodemailer');
    info.nodemailer = 'ok';
  } catch(e) { info.nodemailer = e.message; }

  info.env = { hasUser: \!\!process.env.GMAIL_USER, hasPass: \!\!process.env.GMAIL_APP_PASSWORD };

  return res.status(200).json(info);
}
