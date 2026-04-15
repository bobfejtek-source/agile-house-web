module.exports = async function handler(req, res) {
  return res.status(200).json({ ok: true, v: 'cjs-no-deps', env: { hasUser: \!\!process.env.GMAIL_USER, hasPass: \!\!process.env.GMAIL_APP_PASSWORD } });
};
