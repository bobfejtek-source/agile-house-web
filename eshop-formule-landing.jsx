import { useState, useEffect, useRef } from "react";

const BRAND = "Cashflow Blueprint";

function useCounter(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  useEffect(() => {
    if (!started) return;
    let s = 0;
    const step = target / (duration / 16);
    const id = setInterval(() => {
      s += step;
      if (s >= target) { setCount(target); clearInterval(id); }
      else setCount(Math.floor(s));
    }, 16);
    return () => clearInterval(id);
  }, [started, target, duration]);
  return [count, ref];
}

function Countdown() {
  const [time, setTime] = useState({ h: 23, m: 59, s: 47 });
  useEffect(() => {
    const id = setInterval(() => {
      setTime((t) => {
        let { h, m, s } = t;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  const pad = (n) => String(n).padStart(2, "0");
  return (
    <div style={{
      display: "flex", gap: "12px", justifyContent: "center",
      fontFamily: "'Oswald', sans-serif", fontSize: "2.4rem", fontWeight: 700,
      color: "#FFD700"
    }}>
      {[["HOD", time.h], ["MIN", time.m], ["SEC", time.s]].map(([label, val]) => (
        <div key={label} style={{ textAlign: "center" }}>
          <div style={{
            background: "rgba(255,215,0,0.08)", border: "1px solid rgba(255,215,0,0.25)",
            borderRadius: "10px", padding: "8px 16px", minWidth: "72px",
            textShadow: "0 0 20px rgba(255,215,0,0.4)"
          }}>{pad(val)}</div>
          <div style={{ fontSize: "0.6rem", letterSpacing: "2px", marginTop: "4px", color: "#888" }}>{label}</div>
        </div>
      ))}
    </div>
  );
}

function StoryCard({ name, age, city, before, now, amount, text }) {
  return (
    <div style={{
      background: "linear-gradient(135deg, rgba(168,85,247,0.08), rgba(255,215,0,0.04))",
      border: "1px solid rgba(168,85,247,0.2)", borderRadius: "20px",
      padding: "28px", minWidth: "300px", maxWidth: "340px", flex: "0 0 auto",
      position: "relative", overflow: "hidden"
    }}>
      <div style={{
        position: "absolute", top: "12px", right: "16px",
        background: "rgba(255,215,0,0.15)", border: "1px solid rgba(255,215,0,0.3)",
        borderRadius: "8px", padding: "4px 12px",
        color: "#FFD700", fontFamily: "'Oswald', sans-serif", fontSize: "1rem", fontWeight: 700
      }}>+{amount} Kč</div>
      <div style={{ display: "flex", gap: "4px", marginBottom: "14px" }}>
        {[1,2,3,4,5].map(i => <span key={i} style={{ color: "#FFD700", fontSize: "1rem" }}>&#9733;</span>)}
      </div>
      <div style={{
        display: "flex", gap: "8px", alignItems: "center", marginBottom: "14px", flexWrap: "wrap"
      }}>
        <span style={{
          background: "rgba(255,80,80,0.15)", color: "#f88", fontSize: "0.75rem",
          padding: "3px 10px", borderRadius: "6px", textDecoration: "line-through"
        }}>{before}</span>
        <span style={{ color: "#666", fontSize: "0.8rem" }}>&rarr;</span>
        <span style={{
          background: "rgba(168,85,247,0.15)", color: "#c084fc", fontSize: "0.75rem",
          padding: "3px 10px", borderRadius: "6px", fontWeight: 600
        }}>{now}</span>
      </div>
      <p style={{ color: "#ccc", fontSize: "0.9rem", lineHeight: 1.7, fontStyle: "italic", margin: "0 0 16px" }}>
        &bdquo;{text}&ldquo;
      </p>
      <div>
        <div style={{ color: "#fff", fontWeight: 600, fontSize: "0.95rem" }}>{name}, {age} let</div>
        <div style={{ color: "#888", fontSize: "0.8rem" }}>{city}</div>
      </div>
    </div>
  );
}

function CategoryCard({ emoji, title, desc, earning }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "16px", padding: "28px", flex: "1 1 280px", minWidth: "260px",
      transition: "transform 0.3s, border-color 0.3s"
    }}
    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = "rgba(168,85,247,0.3)"; }}
    onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
    >
      <div style={{ fontSize: "2.5rem", marginBottom: "12px" }}>{emoji}</div>
      <h3 style={{ color: "#fff", fontSize: "1.15rem", margin: "0 0 8px", fontFamily: "'Oswald', sans-serif", fontWeight: 600 }}>{title}</h3>
      <p style={{ color: "#999", fontSize: "0.88rem", lineHeight: 1.6, margin: "0 0 12px" }}>{desc}</p>
      <div style={{
        color: "#FFD700", fontSize: "0.9rem", fontWeight: 700,
        fontFamily: "'Oswald', sans-serif"
      }}>{earning}</div>
    </div>
  );
}

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [spots, setSpots] = useState(37);
  const [revenue, revRef] = useCounter(185, 2000);
  const [shops, shopsRef] = useCounter(50000, 2000);
  const [growth, growthRef] = useCounter(84, 1500);

  useEffect(() => {
    const id = setInterval(() => setSpots(s => Math.max(s - 1, 11)), 45000);
    return () => clearInterval(id);
  }, []);

  const handleSubmit = () => {
    if (email.includes("@")) setSubmitted(true);
  };

  const sec = { maxWidth: "900px", margin: "0 auto", padding: "80px 24px" };

  const EmailForm = ({ id }) => (
    !submitted ? (
      <div style={{
        display: "flex", gap: "0", maxWidth: "480px", width: "100%",
        borderRadius: "14px", overflow: "hidden",
        border: "2px solid rgba(168,85,247,0.5)",
        boxShadow: "0 0 50px rgba(168,85,247,0.15), 0 0 100px rgba(255,215,0,0.05)",
        margin: id === "bottom" ? "0 auto" : undefined
      }}>
        <input
          type="email" value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Tvůj email..."
          style={{
            flex: 1, padding: "17px 20px", background: "rgba(255,255,255,0.05)",
            border: "none", color: "#fff", fontSize: "1rem", outline: "none",
            fontFamily: "inherit"
          }}
          onKeyDown={e => e.key === "Enter" && handleSubmit()}
        />
        <button onClick={handleSubmit} style={{
          padding: "17px 28px",
          background: "linear-gradient(135deg, #a855f7, #7c3aed)",
          border: "none", color: "#fff", fontWeight: 700, fontSize: "0.95rem",
          cursor: "pointer", fontFamily: "'Oswald', sans-serif",
          textTransform: "uppercase", letterSpacing: "1px", whiteSpace: "nowrap"
        }}>
          CHCI TO &rarr;
        </button>
      </div>
    ) : (
      <div style={{
        background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.3)",
        borderRadius: "14px", padding: "24px 32px", maxWidth: "480px",
        margin: id === "bottom" ? "0 auto" : undefined
      }}>
        <div style={{ color: "#a855f7", fontWeight: 700, fontSize: "1.2rem" }}>&#10003; Hotovo!</div>
        <div style={{ color: "#aaa", fontSize: "0.9rem", marginTop: "6px" }}>
          Průvodce ti právě dorazil na email. Koukni i do spamu.
        </div>
      </div>
    )
  );

  return (
    <div style={{
      background: "#0a0a0f", color: "#fff", minHeight: "100vh",
      fontFamily: "'DM Sans', 'Segoe UI', sans-serif", overflow: "hidden"
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <style>{`
        @keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(8px)} }
        @keyframes goldPulse { 0%,100%{filter:drop-shadow(0 0 20px rgba(255,215,0,0.3))} 50%{filter:drop-shadow(0 0 50px rgba(255,215,0,0.6));transform:scale(1.06)} }
      `}</style>

      {/* =================== HERO =================== */}
      <section style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center", textAlign: "center",
        padding: "40px 24px", position: "relative"
      }}>
        <div style={{ position:"absolute",top:"-15%",left:"50%",transform:"translateX(-50%)",width:"700px",height:"700px",borderRadius:"50%",background:"radial-gradient(circle,rgba(168,85,247,0.07) 0%,transparent 70%)",pointerEvents:"none" }} />
        <div style={{ position:"absolute",bottom:"-10%",right:"-5%",width:"400px",height:"400px",borderRadius:"50%",background:"radial-gradient(circle,rgba(255,215,0,0.04) 0%,transparent 70%)",pointerEvents:"none" }} />
        <div style={{ position:"absolute",top:"20%",left:"-8%",width:"300px",height:"300px",borderRadius:"50%",background:"radial-gradient(circle,rgba(168,85,247,0.04) 0%,transparent 70%)",pointerEvents:"none" }} />

        <div style={{ fontSize: "5.5rem", lineHeight: 1, marginBottom: "6px", animation: "goldPulse 3s ease-in-out infinite" }}>
          &#128176;
        </div>

        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: "rgba(255,215,0,0.1)", border: "1px solid rgba(255,215,0,0.25)",
          borderRadius: "999px", padding: "6px 18px", marginBottom: "24px",
          fontSize: "0.78rem", color: "#FFD700", fontWeight: 600, letterSpacing: "0.5px"
        }}>
          <span style={{ width:"8px",height:"8px",borderRadius:"50%",background:"#FFD700",boxShadow:"0 0 8px #FFD700",display:"inline-block" }} />
          OMEZENÝ POČET MÍST - ZBÝVÁ JEN {spots}
        </div>

        <h1 style={{
          fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2rem, 6vw, 3.8rem)",
          fontWeight: 700, lineHeight: 1.1, margin: "0 0 24px",
          maxWidth: "780px", textTransform: "uppercase"
        }}>
          Jana pracovala u{" "}
          <span style={{ color: "#a855f7", textShadow: "0 0 30px rgba(168,85,247,0.3)" }}>pokladny</span>.
          {" "}Dnes vydělává{" "}
          <span style={{ color: "#FFD700", textShadow: "0 0 30px rgba(255,215,0,0.3)" }}>80 tisíc měsíčně</span>{" "}
          z&nbsp;domova.
        </h1>

        <p style={{
          fontSize: "1.15rem", color: "#aaa", maxWidth: "580px", lineHeight: 1.8, margin: "0 0 12px"
        }}>
          Stáhni si <strong style={{ color: "#fff" }}>zdarma průvodce</strong>, který ti krok za krokem
          ukáže, jak si obyčejní lidé rozjeli vlastní prodej na internetu.
          Bez zkušeností. Bez velkých investic.
        </p>
        <p style={{ fontSize: "1rem", color: "#c084fc", fontWeight: 600, margin: "0 0 16px", lineHeight: 1.7 }}>
          Stačí ti počítač a odhodlání něco změnit. Cestou tě provedeme, krok po kroku.
        </p>
        <div style={{
          background: "rgba(255,215,0,0.06)", border: "1px solid rgba(255,215,0,0.15)",
          borderRadius: "12px", padding: "14px 24px", marginBottom: "36px",
          maxWidth: "540px"
        }}>
          <p style={{ color: "#FFD700", fontSize: "0.92rem", fontWeight: 600, margin: "0 0 6px" }}>
            &#9888; Vybraný okruh pouze 100 lidí - volná místa mizí závratně rychle.
          </p>
          <p style={{ color: "#ccc", fontSize: "0.88rem", margin: 0, lineHeight: 1.6 }}>
            Hlavně proto, že začátek je u nás <strong style={{ color: "#fff" }}>ZCELA ZDARMA</strong>.
            Jinde podobné programy stojí i <span style={{ color: "#f88", textDecoration: "line-through" }}>250 000 Kč</span>.
          </p>
        </div>

        <EmailForm id="top" />

        <p style={{ color: "#555", fontSize: "0.75rem", marginTop: "16px" }}>
          &#128274; Žádný spam. Odhlásíš se kdykoliv. Už se přihlásilo 2 847 lidí.
        </p>

        <div style={{ position:"absolute",bottom:"40px",left:"50%",transform:"translateX(-50%)",animation:"bounce 2s infinite" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
        </div>
      </section>

      {/* =================== JANIN PŘÍBĚH =================== */}
      <section style={{
        borderTop: "1px solid rgba(168,85,247,0.15)",
        background: "linear-gradient(180deg, rgba(168,85,247,0.03), transparent)"
      }}>
        <div style={{
          height: "2px", maxWidth: "200px", margin: "0 auto",
          background: "linear-gradient(90deg, transparent, #a855f7, transparent)"
        }} />
        <div style={{ ...sec, padding: "80px 24px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div style={{ color: "#FFD700", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>
              SKUTEČNÝ PŘÍBĚH
            </div>
            <h2 style={{
              fontFamily: "'Oswald', sans-serif", fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
              fontWeight: 700, margin: 0, textTransform: "uppercase", lineHeight: 1.2
            }}>
              &bdquo;Říkali mi, že jsem blázen.&ldquo;<br />
              <span style={{ color: "#a855f7" }}>Dnes mi závidí.</span>
            </h2>
          </div>

          <div style={{
            background: "linear-gradient(135deg, rgba(168,85,247,0.06), rgba(255,215,0,0.03))",
            border: "1px solid rgba(168,85,247,0.15)", borderRadius: "20px",
            padding: "36px 32px", maxWidth: "700px", margin: "0 auto",
            position: "relative"
          }}>
            <div style={{
              position: "absolute", top: "-14px", left: "32px",
              background: "linear-gradient(135deg, #a855f7, #7c3aed)", color: "#fff",
              fontSize: "0.75rem", fontWeight: 700,
              padding: "4px 14px", borderRadius: "8px", textTransform: "uppercase", letterSpacing: "1px"
            }}>Příběh Jany z Brna</div>

            <p style={{ color: "#ccc", fontSize: "1.05rem", lineHeight: 1.9, margin: "12px 0 0" }}>
              Jana (34) pracovala 8 let u pokladny v supermarketu. Každý měsíc stejný plat,
              stejná směna, stejný pocit, že život utíká. Jednoho večera narazila na video
              o tom, jak si lidé vydělávají prodejem na internetu.{" "}
              <strong style={{ color: "#fff" }}>&bdquo;Myslela jsem si, že je to podvod,&ldquo;</strong> říká dnes s úsměvem.
            </p>
            <p style={{ color: "#ccc", fontSize: "1.05rem", lineHeight: 1.9, margin: "16px 0 0" }}>
              Přesto to zkusila. Investovala 3 000 Kč. První měsíc vydělala 8 tisíc navíc.
              Druhý 22 tisíc. <strong style={{ color: "#FFD700" }}>Pátý měsíc dala výpověď.</strong>{" "}
              Dnes pracuje z domova, stará se o dvě děti a vydělává přes 80 tisíc měsíčně.
            </p>
            <p style={{
              color: "#a855f7", fontSize: "1.15rem", fontWeight: 700, fontStyle: "italic",
              margin: "24px 0 0", lineHeight: 1.6,
              fontFamily: "'Oswald', sans-serif"
            }}>
              &bdquo;Nejlepší rozhodnutí mého života. Manžel říkal, že jsem blázen. Dnes doma zůstává on.&ldquo;
            </p>

            <div style={{
              display: "flex", gap: "20px", marginTop: "28px", flexWrap: "wrap"
            }}>
              {[
                { label: "Do toho dala", val: "3 000 Kč" },
                { label: "Po 1. měsíci", val: "+8 000 Kč" },
                { label: "Po 5. měsících", val: "+80 000 Kč" }
              ].map((item, i) => (
                <div key={i} style={{
                  background: "rgba(255,255,255,0.04)", borderRadius: "10px",
                  padding: "14px 20px", textAlign: "center", flex: "1 1 140px",
                  border: i === 2 ? "1px solid rgba(255,215,0,0.15)" : "1px solid transparent"
                }}>
                  <div style={{ color: "#888", fontSize: "0.75rem", marginBottom: "4px" }}>{item.label}</div>
                  <div style={{
                    color: i === 2 ? "#FFD700" : "#fff",
                    fontFamily: "'Oswald', sans-serif", fontSize: "1.3rem", fontWeight: 700
                  }}>{item.val}</div>
                </div>
              ))}
            </div>
          </div>

          <p style={{ color: "#555", fontSize: "0.7rem", textAlign: "center", marginTop: "20px" }}>
            * Výsledky se liší člověk od člověka. Záleží na tvém úsilí a okolnostech.
          </p>
        </div>
      </section>

      {/* =================== ČÍSLA =================== */}
      <section style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        background: "rgba(168,85,247,0.02)"
      }}>
        <div style={{
          ...sec, padding: "60px 24px",
          display: "flex", justifyContent: "center", gap: "48px", flexWrap: "wrap"
        }}>
          {[
            { val: revenue, unit: " miliard Kč", label: "Za rok utratí Češi na internetu", ref: revRef },
            { val: shops, unit: "+", label: "Internetových obchodů v Česku", ref: shopsRef },
            { val: growth, unit: "%", label: "Čechů už nakupuje na internetu", ref: growthRef }
          ].map((item, i) => (
            <div key={i} ref={item.ref} style={{ textAlign: "center", minWidth: "200px" }}>
              <div style={{
                fontFamily: "'Oswald', sans-serif", fontSize: "2.6rem", fontWeight: 700,
                color: "#FFD700", textShadow: "0 0 20px rgba(255,215,0,0.15)"
              }}>
                {item.val.toLocaleString()}{item.unit}
              </div>
              <div style={{ color: "#999", fontSize: "0.88rem", marginTop: "6px" }}>{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* =================== CO DOSTANEŠ =================== */}
      <section style={{ ...sec, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div style={{ color: "#FFD700", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>
            CO JE V PRŮVODCI
          </div>
          <h2 style={{
            fontFamily: "'Oswald', sans-serif", fontSize: "clamp(1.6rem, 4vw, 2.6rem)",
            fontWeight: 700, margin: 0, textTransform: "uppercase", lineHeight: 1.2
          }}>
            Všechno, co potřebuješ vědět<br />
            <span style={{ color: "#a855f7" }}>než do toho dáš první korunu</span>
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {[
            { num: "01", title: "Proč je právě teď ta správná chvíle", desc: "Lidé utrácí na internetu víc než kdykoliv předtím. A většina Čechů toho ještě nevyužívá. Ukážeme ti přesná čísla a proč jsou dveře dokořán." },
            { num: "02", title: "Jak to celé funguje - úplně jednoduše", desc: "Žádné složité pojmy. Vysvětlíme ti to, jako bychom si povídali u kávy. Pochopíš to během 10 minut." },
            { num: "03", title: "Kolik to reálně stojí na začátek", desc: "Možná si myslíš, že potřebuješ statisíce. Pravda? Většina lidí začíná s pár tisícovkami. Ukážeme ti přesně, na co jdou." },
            { num: "04", title: "Čím se dá vydělávat - skutečné příklady z Česka", desc: "Žádné teorie. Uvidíš, co prodávají lidé z Česka, kolik na tom mají a jak dlouho jim trvalo se rozjet." },
            { num: "05", title: "Prvních 30 dní - co dělat den po dni", desc: "Jasný plán, který tě provede od 'nevím vůbec nic' až k 'mám první objednávku'. Bez stresu, bez zbytečností." }
          ].map((item) => (
            <div key={item.num} style={{
              display: "flex", gap: "20px", alignItems: "flex-start",
              padding: "24px", borderRadius: "14px",
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.05)",
              transition: "border-color 0.3s"
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(168,85,247,0.2)"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"}
            >
              <div style={{
                fontFamily: "'Oswald', sans-serif", fontSize: "1.8rem", fontWeight: 700,
                color: "rgba(168,85,247,0.25)", flexShrink: 0, width: "44px"
              }}>{item.num}</div>
              <div>
                <h3 style={{ margin: "0 0 6px", fontSize: "1.05rem", fontWeight: 700, color: "#fff" }}>{item.title}</h3>
                <p style={{ margin: 0, color: "#999", fontSize: "0.9rem", lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =================== CO LIDÉ PRODÁVAJÍ =================== */}
      <section style={{ ...sec, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ color: "#FFD700", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>
            UKÁZKA Z PRŮVODCE
          </div>
          <h2 style={{
            fontFamily: "'Oswald', sans-serif", fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
            fontWeight: 700, margin: 0, textTransform: "uppercase"
          }}>
            Čím lidé <span style={{ color: "#FFD700" }}>reálně vydělávají</span>
          </h2>
        </div>

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <CategoryCard
            emoji="&#129461;"
            title="Věci pro mazlíčky"
            desc="Pelíšky, hračky, obojky, pamlsky. Každý, kdo má doma psa nebo kočku, za ně rád utratí. A těch lidí jsou miliony."
            earning="Výdělek: 20-60 tisíc měsíčně"
          />
          <CategoryCard
            emoji="&#128132;"
            title="Krása a péče o tělo"
            desc="Masážní pomůcky, pleťové masky, vlasová kosmetika. Ženy to milují a nakupují znovu a znovu."
            earning="Výdělek: 30-80 tisíc měsíčně"
          />
          <CategoryCard
            emoji="&#127968;"
            title="Věci do domácnosti"
            desc="Organizéry, kuchyňské pomůcky, dekorace, osvětlení. Každý chce mít hezký byt. A nakupuje to online."
            earning="Výdělek: 15-50 tisíc měsíčně"
          />
        </div>

        <p style={{ color: "#c084fc", textAlign: "center", marginTop: "32px", fontSize: "0.95rem", fontWeight: 500 }}>
          &#128161; V průvodci najdeš 7 dalších oblastí i s přesnými čísly.
        </p>
      </section>

      {/* =================== DALŠÍ PŘÍBĚHY =================== */}
      <section style={{ ...sec, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ color: "#FFD700", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>
            LIDÉ JAKO TY
          </div>
          <h2 style={{
            fontFamily: "'Oswald', sans-serif", fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
            fontWeight: 700, margin: 0, textTransform: "uppercase"
          }}>
            Začali z nuly. <span style={{ color: "#FFD700" }}>Změnili si život.</span>
          </h2>
        </div>

        <div style={{
          display: "flex", gap: "20px", overflowX: "auto",
          paddingBottom: "16px", scrollSnapType: "x mandatory"
        }}>
          <StoryCard
            name="Petra" age={29} city="Praha"
            before="Prodavačka, 22 000 Kč" now="Vlastní obchod, práce z domova"
            amount="35 000"
            text="Nikdy jsem nic neprodala na internetu. Po třech měsících mám stabilní příjem vedle práce. Nejsou to miliony, ale je to moje."
          />
          <StoryCard
            name="Martin" age={34} city="Ostrava"
            before="Skladník, noční směny" now="Sám sobě šéfem"
            amount="82 000"
            text="Zkoušel jsem různé vedlejšáky. Prodej na internetu je první věc, co mi fakt funguje. Za půl roku jsem odcházel ze skladu."
          />
          <StoryCard
            name="Lucka" age={26} city="Brno"
            before="Na mateřské, nula navíc" now="Vlastní značka šperků"
            amount="120 000"
            text="Začala jsem s pětitisícovkou na mateřské. Dnes mám svou značku a vlastní sklad. Nevěřila bych, že to půjde takhle rychle."
          />
        </div>
        <p style={{ color: "#555", fontSize: "0.7rem", textAlign: "center", marginTop: "16px" }}>
          * Výsledky se mohou lišit. Zobrazené příběhy ukazují, co je možné při pravidelné práci.
        </p>
      </section>

      {/* =================== GRAF =================== */}
      <section style={{ ...sec, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ color: "#FFD700", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>
            REÁLNÁ ČÍSLA
          </div>
          <h2 style={{
            fontFamily: "'Oswald', sans-serif", fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
            fontWeight: 700, margin: 0, textTransform: "uppercase"
          }}>
            Jak rychle to může <span style={{ color: "#a855f7" }}>růst</span>
          </h2>
        </div>

        <div style={{
          background: "rgba(255,255,255,0.02)", border: "1px solid rgba(168,85,247,0.12)",
          borderRadius: "20px", padding: "32px 24px"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px", flexWrap: "wrap", gap: "8px" }}>
            <span style={{ color: "#888", fontSize: "0.8rem" }}>Měsíční příjem (Kč)</span>
            <span style={{ color: "#a855f7", fontSize: "0.8rem", fontWeight: 600 }}>Jak to typicky roste od nuly</span>
          </div>
          <svg viewBox="0 0 700 250" style={{ width: "100%", height: "auto" }}>
            <defs>
              <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[200,160,120,80,40].map((y,i) => (
              <g key={i}>
                <line x1="50" y1={y} x2="680" y2={y} stroke="rgba(255,255,255,0.04)" strokeDasharray="4" />
                <text x="45" y={y+4} textAnchor="end" fill="#555" fontSize="10">{["0","50 tis.","100 tis.","150 tis.","200 tis."][i]}</text>
              </g>
            ))}
            {["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."].map((m,i) => (
              <text key={m} x={50+i*57.3} y={228} textAnchor="middle" fill="#555" fontSize="9">{m} měs.</text>
            ))}
            <path d="M50,200 L107,197 L164,188 L221,180 L279,168 L336,160 L393,144 L450,120 L507,88 L564,52 L621,42 L680,40 L680,200 Z" fill="url(#cg)" />
            <path d="M50,200 L107,197 L164,188 L221,180 L279,168 L336,160 L393,144 L450,120 L507,88 L564,52 L621,42 L680,40" fill="none" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" />
            {[[164,188,"15 tis."],[336,160,"50 tis."],[564,52,"185 tis.+"]].map(([cx,cy,label],i) => (
              <g key={i}>
                <circle cx={cx} cy={cy} r="6" fill="#0a0a0f" stroke="#FFD700" strokeWidth="2" />
                <circle cx={cx} cy={cy} r="3" fill="#FFD700" />
                <text x={cx} y={cy-12} textAnchor="middle" fill="#FFD700" fontSize="11" fontWeight="600">{label}</text>
              </g>
            ))}
          </svg>
          <p style={{ color: "#666", fontSize: "0.75rem", textAlign: "center", margin: "16px 0 0" }}>
            * Zobrazená křivka je orientační. Skutečné výsledky závisí na kategorii, úsilí a dalších okolnostech.
          </p>
        </div>

        <div style={{
          background: "linear-gradient(135deg, rgba(255,215,0,0.06), rgba(168,85,247,0.06))",
          border: "1px solid rgba(255,215,0,0.2)", borderRadius: "16px",
          padding: "28px 32px", marginTop: "28px", position: "relative"
        }}>
          <div style={{
            position: "absolute", top: "-12px", left: "28px",
            background: "linear-gradient(135deg, #FFD700, #f0a500)", color: "#000",
            fontSize: "0.7rem", fontWeight: 700,
            padding: "3px 12px", borderRadius: "6px", textTransform: "uppercase", letterSpacing: "1px"
          }}>Pro ty, co to myslí vážně</div>
          <p style={{ color: "#fff", fontSize: "1rem", lineHeight: 1.8, margin: "8px 0 0" }}>
            Graf nahoře ukazuje průměr. Ale běžně se stává, že lidé, kteří do toho jdou
            naplno - na 200% - vydělávají{" "}
            <strong style={{ color: "#FFD700" }}>přes 200 tisíc měsíčně už během 6 měsíců i méně</strong>.
            Záleží na startovním kapitálu a na tom, kolik tomu času a energie dáš.
            Čím víc dáš, tím rychleji se to vrátí.
          </p>
        </div>
      </section>

      {/* =================== OBAVY =================== */}
      <section style={{ ...sec, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={{
            fontFamily: "'Oswald', sans-serif", fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
            fontWeight: 700, margin: 0, textTransform: "uppercase"
          }}>
            Možná si teď říkáš...
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {[
            { q: "&bdquo;Na to nemám peníze&ldquo;", a: "Většina lidí začíná s 3 až 5 tisíci korunami. Žádný pronájem, žádný sklad. V průvodci ti přesně ukážeme, na co jdou první koruny a nic víc nepotřebuješ." },
            { q: "&bdquo;Tomu vůbec nerozumím, počítač moc neumím&ldquo;", a: "Pokud sis někdy něco objednal/a na internetu, tenhle zvládneš taky. Je to jednodušší, než si myslíš. A v průvodci ti to vysvětlíme úplně od základů." },
            { q: "&bdquo;Není už pozdě? Všichni to už dělají&ldquo;", a: "84 procent Čechů nakupuje na internetu. To je obrovský koláč a pořád roste. Stačí najít tu svoji oblast a místo se najde pro každého." },
            { q: "&bdquo;Nemám čas, chodím do práce na plný úvazek&ldquo;", a: "Jana taky makala na plný úvazek. Začala večer po směnách, hodinku až dvě denně. A stačilo to. V průvodci ti ukážeme, jak si čas najít." },
            { q: "&bdquo;Co když přijdu o peníze a nic nevydělám?&ldquo;", a: "Proto začínáš s malou částkou a proto si nejdřív přečti průvodce. Abys přesně věděl/a, do čeho jdeš a na co si dát pozor. Informace jsou zadarmo - chyby stojí peníze." }
          ].map((item, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "14px", padding: "24px"
            }}>
              <div style={{ color: "#c084fc", fontWeight: 700, fontSize: "1.05rem", marginBottom: "8px" }} dangerouslySetInnerHTML={{ __html: item.q }} />
              <div style={{ color: "#bbb", fontSize: "0.92rem", lineHeight: 1.7 }}>{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* =================== POSLEDNÍ ŠANCE =================== */}
      <section style={{
        background: "linear-gradient(180deg, transparent, rgba(168,85,247,0.04) 50%, transparent)",
        borderTop: "1px solid rgba(168,85,247,0.12)"
      }}>
        <div style={{ ...sec, textAlign: "center" }}>
          <div style={{
            display: "inline-block", background: "rgba(255,50,50,0.1)",
            border: "1px solid rgba(255,50,50,0.25)", borderRadius: "8px",
            padding: "8px 20px", marginBottom: "24px",
            color: "#f55", fontSize: "0.85rem", fontWeight: 600
          }}>
            &#9888; TATO NABÍDKA KONČÍ ZA:
          </div>

          <div style={{ marginBottom: "32px" }}><Countdown /></div>

          <h2 style={{
            fontFamily: "'Oswald', sans-serif", fontSize: "clamp(1.6rem, 4vw, 2.6rem)",
            fontWeight: 700, margin: "0 0 16px", textTransform: "uppercase", lineHeight: 1.2
          }}>
            Průvodce zdarma +<br />
            <span style={{ color: "#a855f7" }}>místo v uzavřené skupině</span>
          </h2>

          <p style={{ color: "#aaa", fontSize: "1rem", maxWidth: "520px", margin: "0 auto 12px", lineHeight: 1.7 }}>
            Přidej se k posledním {spots} lidem, kteří ještě mohou dostat
            <strong style={{ color: "#fff" }}> bezplatný přístup</strong> do první skupiny.
          </p>
          <p style={{ color: "#c084fc", fontSize: "0.95rem", fontWeight: 600, margin: "0 auto 32px" }}>
            &#128176; Tenhle průvodce může být začátek nové kapitoly. Stejně jako pro Janu.
          </p>

          <EmailForm id="bottom" />

          <div style={{
            display: "flex", justifyContent: "center", gap: "28px", marginTop: "32px", flexWrap: "wrap"
          }}>
            {[
              "&#128274; 100% zdarma",
              "&#9889; Přijde hned na email",
              "&#128683; Žádný spam, nikdy"
            ].map((t, i) => (
              <span key={i} style={{ color: "#888", fontSize: "0.85rem" }} dangerouslySetInnerHTML={{ __html: t }} />
            ))}
          </div>
        </div>
      </section>

      {/* =================== PATIČKA =================== */}
      <footer style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "32px 24px", textAlign: "center"
      }}>
        <div style={{
          fontFamily: "'Oswald', sans-serif", fontSize: "1.2rem", fontWeight: 700,
          color: "#FFD700", marginBottom: "8px",
          textShadow: "0 0 10px rgba(255,215,0,0.15)"
        }}>&#128176; {BRAND}</div>
        <p style={{ color: "#333", fontSize: "0.7rem", lineHeight: 1.5, maxWidth: "500px", margin: "0 auto" }}>
          Tento web negarantuje žádné konkrétní finanční výsledky. Všechny uvedené příklady
          jsou ilustrativní a výsledky závisí na individuální snaze a okolnostech.
          &copy; 2026 Všechna práva vyhrazena.
        </p>
      </footer>
    </div>
  );
}
