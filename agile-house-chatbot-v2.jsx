import { useState, useRef, useEffect } from "react";

const SYSTEM_PROMPT = `You are the AI assistant for Agile House, an AI-first digital studio based in the Czech Republic.

ABOUT AGILE HOUSE:
- Family-run AI studio. Founder Bohdan brings McKinsey and UBS transformation experience (200+ global teams). Harvard AMP.
- We build e-commerce brands, full-stack web apps, education platforms, and strategic research from zero to live.
- AI agents are our core team members. Every workflow runs through frontier AI models.
- We compress traditional agency timelines dramatically. IRON (ironmap.cz) - a full-stack web app with 1,562 listings, scraping pipeline, Google Places API, and SEO - was built in 4 working days.

LIVE PROJECTS:
1. LumiGlow Labs (lumiglowlabs.com) - DTC beauty-tech brand, LED mouthpiece, Shopify, UK market. 10 custom Liquid sections, Lighthouse 94.
2. Zoute Studio (zoutestudio.com) - Old Money men's fashion, Shopify, UK market. 3+ ROAS on Meta Ads, 4% conversion rate.
3. IRON (ironmap.cz) - Czech fitness directory, 1,562 gyms, Next.js, scraping pipeline, Google Places API, Cloudflare R2. Built in 4 days.
4. E-commerce Academy - Czech-language education platform, 50/50 international venture (CZ + Dubai). In development.
5. Betting Advisor App - Esports betting intelligence, real-time odds, portfolio tracking. In development.

PRICING (always state these are ESTIMATES - final quote after consultation):
- Hourly rate: from 2,000 CZK/hour
- Shopify e-shop (custom theme, product pages, Meta Ads setup): from 35,000 CZK. Market average is 70,000-165,000 CZK - we deliver at half the price and 5-10x faster.
- MVP web application (like IRON): from 100,000 CZK. Market average for MVP is 460,000-1,400,000 CZK - we built IRON in 4 days.
- Strategy and research (market analysis, GTM, business case): from 50,000 CZK. Market average is 115,000-690,000 CZK.
- Education platform: from 150,000 CZK depending on scope.

IMPORTANT: Always say these are ORIENTACNI (indicative/estimated) prices. Every project is unique. Recommend booking a call to discuss specifics and get an accurate quote.

DELIVERY TIMES (our actual track record):
- Shopify e-shop: days, not weeks
- MVP web app: days to 1-2 weeks (IRON was built in 4 working days)
- Strategy/research: hours to days
- Market average for these is weeks to months

SECURITY (CRITICAL - emphasize this whenever relevant):
- Every project goes through security audit before delivery
- OWASP Top 10 compliance check
- Penetration testing
- Automated Playwright UAT testing
- AI-built does NOT mean cutting corners - it means we test faster and deeper than manual teams
- All code is reviewed, all deployments are tested, all data is secured

SERVICES: E-commerce brand launches, full-stack web apps, education platforms, paid acquisition & CRO, market research & strategy, AI workflow automation.

YOUR GOAL: Be helpful, direct, and professional. Answer in the language the visitor uses (Czech or English). Qualify leads by understanding what they want to build. When discussing pricing, always mention the market comparison to show value. Guide them toward booking a call: https://calendly.com/bob-fejtek

RULES:
- Be concise. Max 3-4 sentences per response unless asked for detail.
- Never lie about results or capabilities.
- Never use em dashes or en dashes. Use hyphens.
- If you don't know something, say so honestly.
- When asked about price, give the indicative range, compare to market, and suggest a call for accurate quote.
- When asked about security, be thorough and reassuring. This is a common concern with AI-first studios.
- Always end with a soft push toward booking a call if relevant.`;

const WELCOME = "Hey! I'm the Agile House AI. Ask me about what we build, how fast we deliver, pricing, or tell me about your project - I'll tell you how we'd approach it.";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: WELCOME }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEnd = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (messagesEnd.current) {
      messagesEnd.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMsg = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const apiMessages = newMessages
        .filter(m => m.role !== "system")
        .map(m => ({ role: m.role, content: m.content }));

      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: apiMessages,
        }),
      });

      const data = await response.json();
      const reply = data.content?.[0]?.text || "Sorry, I couldn't process that. Try again or email us at bob.fejtek@gmail.com";
      setMessages(prev => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "Connection issue. Email us directly at bob.fejtek@gmail.com or book a call at calendly.com/bob-fejtek"
      }]);
    }
    setLoading(false);
  };

  const s = {
    toggle: {
      position: "fixed", bottom: "24px", right: "24px", zIndex: 9999,
      width: "56px", height: "56px", borderRadius: "16px",
      background: "linear-gradient(135deg, #D85A30, #B84A28)",
      border: "none", cursor: "pointer", display: "flex",
      alignItems: "center", justifyContent: "center",
      boxShadow: "0 4px 24px rgba(216,90,48,0.35)",
      transition: "transform 0.2s, box-shadow 0.2s",
    },
    panel: {
      position: "fixed", bottom: "92px", right: "24px", zIndex: 9998,
      width: "400px", maxHeight: "560px",
      background: "#0C0C10", border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "20px", display: "flex", flexDirection: "column",
      overflow: "hidden",
      boxShadow: "0 16px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
    },
    header: {
      padding: "18px 20px", display: "flex", alignItems: "center",
      justifyContent: "space-between",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      background: "rgba(255,255,255,0.02)",
    },
    headerLeft: { display: "flex", alignItems: "center", gap: "10px" },
    headerDot: { width: "8px", height: "8px", borderRadius: "3px", background: "#D85A30" },
    headerTitle: { fontSize: "14px", fontWeight: 600, color: "#F1EFE8", fontFamily: "system-ui, sans-serif" },
    headerStatus: { fontSize: "11px", color: "rgba(241,239,232,0.35)", fontFamily: "system-ui, sans-serif" },
    closeBtn: { background: "none", border: "none", cursor: "pointer", color: "rgba(241,239,232,0.3)", fontSize: "18px", padding: "4px", lineHeight: 1 },
    messages: { flex: 1, overflowY: "auto", padding: "16px 20px", display: "flex", flexDirection: "column", gap: "12px", minHeight: "300px", maxHeight: "400px" },
    msgUser: {
      alignSelf: "flex-end", maxWidth: "85%", padding: "10px 16px",
      borderRadius: "14px 14px 4px 14px",
      background: "rgba(216,90,48,0.15)", border: "1px solid rgba(216,90,48,0.2)",
      color: "#F1EFE8", fontSize: "14px", lineHeight: 1.55, fontFamily: "system-ui, sans-serif",
    },
    msgBot: {
      alignSelf: "flex-start", maxWidth: "85%", padding: "10px 16px",
      borderRadius: "14px 14px 14px 4px",
      background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)",
      color: "rgba(241,239,232,0.75)", fontSize: "14px", lineHeight: 1.6, fontFamily: "system-ui, sans-serif",
      whiteSpace: "pre-wrap",
    },
    inputArea: {
      padding: "14px 16px", borderTop: "1px solid rgba(255,255,255,0.06)",
      display: "flex", gap: "8px", alignItems: "center", background: "rgba(255,255,255,0.02)",
    },
    input: {
      flex: 1, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "12px", padding: "11px 16px", color: "#F1EFE8", fontSize: "14px",
      outline: "none", fontFamily: "system-ui, sans-serif",
    },
    sendBtn: {
      width: "38px", height: "38px", borderRadius: "10px",
      background: loading ? "rgba(216,90,48,0.3)" : "linear-gradient(135deg, #D85A30, #B84A28)",
      border: "none", cursor: loading ? "default" : "pointer",
      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
    },
    dots: { display: "flex", gap: "4px", padding: "10px 16px", alignSelf: "flex-start" },
    dot: (i) => ({
      width: "6px", height: "6px", borderRadius: "50%", background: "#D85A30", opacity: 0.4,
      animation: `dotPulse 1.2s ${i * 0.2}s infinite`,
    }),
  };

  return (
    <>
      <style>{`
        @keyframes dotPulse {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        .ah-chat-input::placeholder { color: rgba(241,239,232,0.25); }
        .ah-chat-messages::-webkit-scrollbar { width: 4px; }
        .ah-chat-messages::-webkit-scrollbar-track { background: transparent; }
        .ah-chat-messages::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 2px; }
        .ah-toggle:hover { transform: scale(1.05); box-shadow: 0 6px 32px rgba(216,90,48,0.45); }
      `}</style>

      {open && (
        <div style={s.panel}>
          <div style={s.header}>
            <div style={s.headerLeft}>
              <div style={s.headerDot} />
              <div>
                <div style={s.headerTitle}>Agile House AI</div>
                <div style={s.headerStatus}>Powered by Claude</div>
              </div>
            </div>
            <button style={s.closeBtn} onClick={() => setOpen(false)}>x</button>
          </div>
          <div style={s.messages} className="ah-chat-messages">
            {messages.map((m, i) => (
              <div key={i} style={m.role === "user" ? s.msgUser : s.msgBot}>{m.content}</div>
            ))}
            {loading && (
              <div style={s.dots}>{[0,1,2].map(i => <div key={i} style={s.dot(i)} />)}</div>
            )}
            <div ref={messagesEnd} />
          </div>
          <div style={s.inputArea}>
            <input ref={inputRef} className="ah-chat-input" style={s.input} value={input}
              onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && sendMessage()}
              placeholder="Zeptejte se na cokoliv..." />
            <button style={s.sendBtn} onClick={sendMessage} disabled={loading}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <button className="ah-toggle" style={s.toggle} onClick={() => setOpen(!open)}>
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>
    </>
  );
}
