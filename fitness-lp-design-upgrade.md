# Fitness LP - Design Upgrade (3 fáze)

## Kontext

Fitness LP je hotová a funkční na `agilehouse.vercel.app/fitness`. Teď dostane vizuální upgrade, aby působila jako portfolio kus - majitel fitka ji má vidět a pomyslet si "wow, tohle dokážou udělat".

Stack: vanilla HTML/CSS/JS, žádné frameworky.

## Operating rules (důležité)

Dodržuj tato pravidla, ať se vyhneš předchozím problémům:

1. **1 prompt = 1 fáze.** Tento brief má 3 fáze. Zpracuj fázi 1, ukaž mi diff, nech mě schválit, pak fáze 2, pak fáze 3. Nedělej všechny najednou.

2. **Žádné dlouhé CSS/JS do Write toolu najednou.** Pokud je soubor velký, použij str_replace / edit pro jednotlivé sekce. Write tool ořezává velké obsahy, což způsobuje broken soubory.

3. **Žádné bash heredoc na soubory s vykřičníky.** Bash escape mění `!` na `\!`. Piš přímo přes Write tool.

4. **Git lock na Windows = stop.** Pokud narazíš na `.git/index.lock`, nezkoušej to opakovaně. Řekni mi, ať to smažu ručně v PowerShellu (`taskkill /F /IM git.exe && del .git\index.lock`).

5. **Po každé fázi: ukaž diff + screenshot + Lighthouse score.** Čekej na schválení před pushem.

6. **Lighthouse performance nesmí klesnout pod 90.** Pokud klesá, oběť efekty (vyhoď parallax nebo gradient mesh animaci).

7. **Mobile first.** Efekty jako 3D tilt, parallax background-attachment:fixed, custom cursor - vypni na mobilu přes `@media (hover: hover) and (pointer: fine)` nebo detekci viewport šířky.

8. **Žádné em dashes (—) ani en dashes (–)** - pouze obyčejný spojovník (-).

---

## FÁZE 1 - Atmosféra (start here)

Cíl: Pozvednout premium feel celého webu bez dotýkání obsahu.

### 1.1 Animated gradient mesh background

**Kam:** `body` nebo hlavní container (zjisti podle struktury)

**Jak:**
- 4-5 radial-gradient kruhů jako background-image
- Barvy: `#0a0a0a` (base), `#1a1a2e`, `#2a1810`, `#3a2418` (warm bronze)
- Každý kruh 40-60% viewport size, různé pozice
- CSS-only animace: pomalá rotace/shift pozic (keyframes, 20s infinite, ease-in-out)
- NO JavaScript

**Příklad směr (uprav dle reality):**
```css
body {
  background: 
    radial-gradient(at 20% 30%, #2a1810 0%, transparent 50%),
    radial-gradient(at 80% 70%, #1a1a2e 0%, transparent 50%),
    radial-gradient(at 50% 50%, #3a2418 0%, transparent 40%),
    #0a0a0a;
  animation: meshShift 20s ease-in-out infinite;
}

@keyframes meshShift {
  0%, 100% { background-position: 0% 0%, 100% 100%, 50% 50%; }
  50% { background-position: 20% 10%, 80% 90%, 40% 60%; }
}
```

### 1.2 Noise overlay (grain texture)

**Kam:** Fixed overlay přes celou stránku

**Jak:**
- SVG noise filter inline jako background-image, nebo base64 PNG noise
- `position: fixed`, `inset: 0`
- `pointer-events: none`
- `opacity: 0.04` až `0.06`
- `z-index: 1` (nad pozadím, pod obsahem)
- `mix-blend-mode: overlay`

**Reference technika:** Používá to Linear, Vercel, Netflix. "Film grain" efekt.

### 1.3 Vignette na hero

**Kam:** Hero sekce

**Jak:**
- Pseudo-element `::after` nebo overlay div
- `background: radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)`
- Dotáhne focus na obsah uprostřed

### Acceptance kritéria fáze 1

- [ ] Gradient mesh animuje (subtle, ne rušivé)
- [ ] Noise overlay viditelný ale nenápadný (otestuj zoom in)
- [ ] Vignette na hero dotahuje pozornost
- [ ] Lighthouse performance 90+
- [ ] Text všude čitelný
- [ ] Mobile funguje bez performance drop

**Po fázi 1: diff + screenshot + Lighthouse. Čekej na schválení.**

---

## FÁZE 2 - Interaktivita (po schválení fáze 1)

Cíl: Cenová sekce bude nejsilnější konverzní moment. Tam dávej nejvíc "wow".

### 2.1 3D tilt na cenových kartách

**Kam:** Karty BASIC, PROFI, ELITE

**Jak (CSS-only, žádné JS knihovny):**
- `transform-style: preserve-3d`
- Hover: `transform: perspective(1000px) rotateY(3deg) rotateX(2deg)` 
- PROFI karta (NEJOBLÍBENĚJŠÍ) má víc výrazný tilt než ostatní
- Transition: `0.4s cubic-bezier(0.2, 0.8, 0.2, 1)`
- Vypnout na mobilu: `@media (hover: hover) and (pointer: fine)`

### 2.2 Shine effect na cenových kartách

**Kam:** Karty BASIC, PROFI, ELITE (on hover)

**Jak:**
- Pseudo-element `::before`
- `background: linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)`
- Transform: `translateX(-100%)` outside, `translateX(100%)` on hover
- Transition: `0.8s ease`
- Overflow hidden na parent kartě

### 2.3 Magnetic buttons na CTA

**Kam:** Tlačítka "Chci BASIC", "Chci PROFI", "Chci ELITE" (a případně hero CTA)

**Jak (JS bez knihoven):**
```javascript
document.querySelectorAll('.btn-magnetic').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
  });
});
```
- Transition na tlačítku: `transform 0.3s cubic-bezier`
- Max offset 8px (clamp pokud potřeba)
- Mobile: vypnuto (touch events)

### 2.4 Scroll reveal animace

**Kam:** Všechny hlavní sekce

**Jak (IntersectionObserver):**
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

CSS:
```css
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s, transform 0.8s;
}
.reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}
```

**Stagger u gridů:** Karty ceníku nebo "Co řešíme" cards se objevují postupně s `transition-delay: 100ms * index`.

### Acceptance kritéria fáze 2

- [ ] 3D tilt funguje smoothly na desktop, vypnutý na mobile
- [ ] Shine effect viditelný ale elegantní (ne moc agresivní)
- [ ] Magnetic buttons se vrátí do pozice po mouseleave
- [ ] Scroll reveal nerozbíjí layout (CLS = 0)
- [ ] Stagger timing vypadá přirozeně (ne moc rychlý, ne moc pomalý)
- [ ] Lighthouse performance 90+
- [ ] Žádné console errors

**Po fázi 2: diff + screenshot GIF interakcí (pokud možno) + Lighthouse.**

---

## FÁZE 3 - Hero polish (po schválení fáze 2)

Cíl: Hero je první 3 sekundy. Musí zarazit.

### 3.1 Scroll-triggered number counter

**Kam:** Trust line pod hero ("Od 9 999 Kč")

**Jak:**
- Číslo `9 999` počítá od 0 na 9 999 při page load (s 500ms delay)
- Duration: 1.5s
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo)
- Format: přidávej mezeru jako tisícovkový oddělovač za běhu (`9 999`, ne `9999`)

### 3.2 Animated SVG underline pod H1

**Kam:** Pod hlavním H1 "Web pro vaše fitko..."

**Jak:**
- SVG path s ručně nakreslenou "hand-drawn" podtržením (ne rovná linka)
- `stroke-dasharray` + `stroke-dashoffset` animace
- Barva: warm bronze `#c88a5a` nebo podobný accent
- Trigger: page load, 800ms delay (po tom co H1 fade-inne)
- Duration: 1.2s

**Reference SVG path:**
```svg
<svg viewBox="0 0 300 20" width="100%">
  <path d="M5,15 Q75,5 150,12 T295,10" 
        stroke="#c88a5a" 
        stroke-width="2" 
        fill="none"
        stroke-linecap="round"/>
</svg>
```

### 3.3 Staggered hero reveal

**Kam:** Hero sekce elementy

**Jak:**
- H1: fade-in + translateY při load (0ms delay)
- Podtext: 400ms delay
- CTA tlačítka: 600ms a 700ms delay (každé zvlášť)
- Trust line: 800ms delay
- Všechny s duration 0.8s, ease-out

### 3.4 Parallax na hero obrázku (fit1)

**Kam:** Hero background image (fit1.jpg)

**Jak:**
- `background-attachment: fixed` na desktop
- `@media (max-width: 768px) { background-attachment: scroll; }` na mobile (iOS problémy)
- Alternativa bez background-attachment: JS scroll listener s `requestAnimationFrame` (posunuje obrázek pomaleji než scroll)

### Acceptance kritéria fáze 3

- [ ] Number counter počítá smooth, končí přesně na 9 999
- [ ] SVG underline se kreslí zleva doprava
- [ ] Hero reveal vypráví příběh (postupné, ne vše najednou)
- [ ] Parallax funguje na desktop, vypnutý na mobile
- [ ] Lighthouse performance 90+
- [ ] LCP pod 2.5s

**Po fázi 3: diff + screenshot + Lighthouse + preview URL pro ruční test.**

---

## Co NEDĚLAT

- Nedotýkej se obsahu (texty, ceny, struktura sekcí). Jen vizuální vrstva.
- Nepřidávaj knihovny (žádný GSAP, Framer Motion, Three.js). Vanilla JS + CSS jen.
- Nepřepisuj celé soubory, když stačí str_replace konkrétní sekce.
- Nepoužívej em/en dashes (—, –) v CSS komentářích ani HTML.
- Neslovenčuj a nepřekládej anglická CSS vlastnosti/variabily.

## Workflow pro každou fázi

1. Přečti si fázi celou.
2. Zkontroluj aktuální kód (ls, cat, grep) - co už existuje, co musíš přidat.
3. Napiš krátký plán kroků (2-3 věty).
4. Implementuj jen tuto fázi.
5. Test lokálně (otevři v prohlížeči, ověř efekty).
6. Spusť Lighthouse.
7. Ukaž mi diff, screenshoty, Lighthouse score.
8. Čekej na schválení.
9. Push.
10. Pokračuj na další fázi v novém promptu.

Ready to start fáze 1?
