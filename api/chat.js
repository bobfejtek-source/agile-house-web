const RATE_LIMIT_MAP = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX = 10;

function checkRateLimit(req) {
  const key = (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown';
  const now = Date.now();
  const entry = RATE_LIMIT_MAP.get(key);
  if (!entry || now - entry.t > RATE_LIMIT_WINDOW_MS) {
    RATE_LIMIT_MAP.set(key, { t: now, n: 1 });
    return true;
  }
  if (entry.n >= RATE_LIMIT_MAX) return false;
  entry.n++;
  return true;
}

const SYSTEM_PROMPT = `You are the AI assistant for Agile House, an AI-first digital studio based in the Czech Republic.

ABOUT AGILE HOUSE:
- Family-run AI studio. Founder Bohdan brings McKinsey and UBS transformation experience (200+ global teams). Harvard AMP.
- We build e-commerce brands, full-stack web apps, education platforms, and strategic research from zero to live.
- AI agents are our core team members. Every workflow runs through frontier AI models.
- We compress traditional agency timelines dramatically. IRON (ironmap.cz) built in 4 working days.

LIVE PROJECTS:
1. LumiGlow Labs (lumiglowlabs.com) - DTC beauty-tech brand, LED mouthpiece, Shopify, UK market. Lighthouse 94.
2. Zoute Studio (zoutestudio.com) - Old Money men's fashion, Shopify, UK market. 3+ ROAS on Meta Ads, 4% conversion rate.
3. IRON (ironmap.cz) - Czech fitness directory, 1,562 gyms, Next.js, Google Places API. Built in 4 days.
4. E-commerce Academy - Czech-language education platform, 50/50 venture (CZ + Dubai). In development.
5. Betting Advisor App - Esports betting intelligence, real-time odds. In development.

PRICING (always say ORIENTACNI - final quote after consultation):
- Hourly: from 2,000 CZK/hour
- Shopify e-shop: from 35,000 CZK (market avg 70,000-165,000 CZK)
- MVP web app: from 100,000 CZK (market avg 460,000-1,400,000 CZK)
- Strategy/research: from 50,000 CZK (market avg 115,000-690,000 CZK)
- Education platform: from 150,000 CZK

DELIVERY: Shopify in days. MVP in days to 2 weeks. Strategy in hours to days.
SECURITY: OWASP Top 10, penetration testing, Playwright UAT on every project.
SERVICES: E-commerce, full-stack apps, education platforms, paid acquisition, market research, AI automation.

GOAL: Be helpful, direct, professional. Answer in the visitor's language (Czech or English). Guide toward booking: https://calendly.com/bob-fejtek

RULES: Max 3-4 sentences unless asked for detail. No em dashes - use hyphens. Honest about pricing - always indicative.`;

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  if (!checkRateLimit(req)) return res.status(429).json({ error: 'Too many requests. Please wait.' });

  const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
  if (!ANTHROPIC_API_KEY) return res.status(500).json({ error: 'API key not configured' });

  try {
    const { messages } = req.body || {};
    if (!Array.isArray(messages) || messages.length === 0) return res.status(400).json({ error: 'Messages required' });
    if (messages.length > 20) return res.status(400).json({ error: 'Too many messages' });

    const safe = messages.slice(0, 20).map(m => ({
      role: ['user','assistant'].includes(m.role) ? m.role : 'user',
      content: String(m.content || '').slice(0, 4000)
    }));

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({ model: 'claude-sonnet-4-6', max_tokens: 1000, system: SYSTEM_PROMPT, messages: safe })
    });

    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    console.error('Chat error:', err.message);
    return res.status(500).json({ error: 'Failed to reach AI service' });
  }
};
