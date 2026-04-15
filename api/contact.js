export default async function handler(req, res) {
  return res.status(200).json({
    version: 'diagnostic-v3',
    node: process.version,
    env: { 
      hasUser: \!\!process.env.GMAIL_USER, 
      hasPass: \!\!process.env.GMAIL_APP_PASSWORD 
    }
  });
}
