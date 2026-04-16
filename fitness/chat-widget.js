(function() {

  // ---- 1. CSS INJEKCE ----
  var style = document.createElement('style');
  style.textContent = [
    '.ah-chat-wrap{position:fixed;bottom:0;right:0;z-index:10000;pointer-events:none;}',
    '.ah-chat-wrap *{pointer-events:auto;}',
    '.ah-chat-toggle{position:fixed;bottom:24px;right:24px;z-index:10001;width:56px;height:56px;border-radius:16px;background:linear-gradient(135deg,#D85A30,#B84A28);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 24px rgba(216,90,48,0.35);transition:transform 0.2s,box-shadow 0.2s;}',
    '.ah-chat-toggle:hover{transform:scale(1.05);box-shadow:0 6px 32px rgba(216,90,48,0.45);}',
    '.ah-chat-panel{position:fixed;bottom:92px;right:24px;z-index:10000;width:400px;max-height:560px;background:#0C0C10;border:1px solid rgba(255,255,255,0.08);border-radius:20px;display:none;flex-direction:column;overflow:hidden;box-shadow:0 16px 64px rgba(0,0,0,0.6),0 0 0 1px rgba(255,255,255,0.04);}',
    '.ah-chat-panel.ah-open{display:flex;}',
    '.ah-chat-header{padding:18px 20px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,0.06);background:rgba(255,255,255,0.02);}',
    '.ah-chat-header-left{display:flex;align-items:center;gap:10px;}',
    '.ah-chat-dot{width:8px;height:8px;border-radius:3px;background:#D85A30;}',
    '.ah-chat-title{font-size:14px;font-weight:600;color:#F1EFE8;font-family:system-ui,sans-serif;}',
    '.ah-chat-status{font-size:11px;color:rgba(241,239,232,0.35);font-family:system-ui,sans-serif;}',
    '.ah-chat-close{background:none;border:none;cursor:pointer;color:rgba(241,239,232,0.3);font-size:18px;padding:4px;line-height:1;}',
    '.ah-chat-close:hover{color:rgba(241,239,232,0.6);}',
    '.ah-chat-msgs{flex:1;overflow-y:auto;padding:16px 20px;display:flex;flex-direction:column;gap:12px;min-height:220px;max-height:380px;}',
    '.ah-chat-msgs::-webkit-scrollbar{width:4px;}',
    '.ah-chat-msgs::-webkit-scrollbar-track{background:transparent;}',
    '.ah-chat-msgs::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.08);border-radius:2px;}',
    '.ah-chat-msg-bot{background:rgba(255,255,255,0.04);border-radius:14px 14px 14px 4px;padding:12px 16px;font-size:14px;color:rgba(241,239,232,0.85);line-height:1.6;max-width:88%;align-self:flex-start;font-family:system-ui,sans-serif;}',
    '.ah-chat-msg-user{background:rgba(216,90,48,0.15);border:1px solid rgba(216,90,48,0.2);border-radius:14px 14px 4px 14px;padding:12px 16px;font-size:14px;color:#F1EFE8;line-height:1.55;max-width:88%;align-self:flex-end;font-family:system-ui,sans-serif;}',
    '.ah-chat-input-area{padding:14px 16px;border-top:1px solid rgba(255,255,255,0.06);display:flex;gap:8px;align-items:center;background:rgba(255,255,255,0.02);}',
    '.ah-chat-input{flex:1;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:11px 16px;color:#F1EFE8;font-size:14px;outline:none;font-family:system-ui,sans-serif;}',
    '.ah-chat-input::placeholder{color:rgba(241,239,232,0.25);}',
    '.ah-chat-input:focus{border-color:rgba(216,90,48,0.35);}',
    '.ah-chat-send{width:38px;height:38px;border-radius:10px;background:linear-gradient(135deg,#D85A30,#B84A28);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:opacity 0.2s;}',
    '.ah-chat-send:disabled{opacity:0.4;cursor:default;}',
    '.ah-chat-dots{display:flex;gap:4px;padding:10px 16px;align-self:flex-start;}',
    '.ah-chat-dots span{width:6px;height:6px;border-radius:50%;background:#D85A30;opacity:0.4;animation:ahChatDot 1.2s infinite;}',
    '.ah-chat-dots span:nth-child(2){animation-delay:0.2s;}',
    '.ah-chat-dots span:nth-child(3){animation-delay:0.4s;}',
    '@keyframes ahChatDot{0%,80%,100%{opacity:0.4;}40%{opacity:1;}}',
    '@media(max-width:500px){.ah-chat-panel{width:calc(100vw - 32px);right:16px;bottom:84px;}}'
  ].join('');
  document.head.appendChild(style);

  // ---- 2. HTML INJEKCE ----
  var wrap = document.createElement('div');
  wrap.className = 'ah-chat-wrap';
  wrap.innerHTML = [
    '<div class="ah-chat-panel" id="ahFitChatPanel">',
    '  <div class="ah-chat-header">',
    '    <div class="ah-chat-header-left">',
    '      <div class="ah-chat-dot"></div>',
    '      <div>',
    '        <div class="ah-chat-title">Agile House AI</div>',
    '        <div class="ah-chat-status">Powered by Claude</div>',
    '      </div>',
    '    </div>',
    '    <button class="ah-chat-close" id="ahFitChatClose">&#x2715;</button>',
    '  </div>',
    '  <div class="ah-chat-msgs" id="ahFitChatMsgs"></div>',
    '  <div class="ah-chat-input-area">',
    '    <input class="ah-chat-input" id="ahFitChatInput" placeholder="Zeptejte se na cokoliv..." />',
    '    <button class="ah-chat-send" id="ahFitChatSend">',
    '      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">',
    '        <path d="M14 8L2 2l2.5 6L2 14l12-6z" fill="#fff"/>',
    '      </svg>',
    '    </button>',
    '  </div>',
    '</div>',
    '<button class="ah-chat-toggle" id="ahFitChatToggle">',
    '  <svg id="ahFitIconChat" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">',
    '    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    '  </svg>',
    '  <svg id="ahFitIconClose" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" style="display:none">',
    '    <line x1="18" y1="6" x2="6" y2="18"/>',
    '    <line x1="6" y1="6" x2="18" y2="18"/>',
    '  </svg>',
    '</button>'
  ].join('');
  document.body.appendChild(wrap);

  // ---- 3. JS LOGIKA ----
  var panel     = document.getElementById('ahFitChatPanel');
  var toggle    = document.getElementById('ahFitChatToggle');
  var closeBtn  = document.getElementById('ahFitChatClose');
  var msgsEl    = document.getElementById('ahFitChatMsgs');
  var inp       = document.getElementById('ahFitChatInput');
  var sendBtn   = document.getElementById('ahFitChatSend');
  var iconChat  = document.getElementById('ahFitIconChat');
  var iconClose = document.getElementById('ahFitIconClose');

  var isOpen   = false;
  var loading  = false;
  var history  = [
    {
      role: 'assistant',
      content: 'Ahoj! Jsem AI asistent Agile House. Zeptejte se me na balicky, ceny, terminy nebo cokoliv ohledne webu pro vase fitko.'
    }
  ];

  function renderMsgs() {
    msgsEl.innerHTML = '';
    history.forEach(function(m) {
      var d = document.createElement('div');
      d.className = m.role === 'user' ? 'ah-chat-msg-user' : 'ah-chat-msg-bot';
      d.textContent = m.content;
      msgsEl.appendChild(d);
    });
    if (loading) {
      var dots = document.createElement('div');
      dots.className = 'ah-chat-dots';
      dots.innerHTML = '<span></span><span></span><span></span>';
      msgsEl.appendChild(dots);
    }
    msgsEl.scrollTop = msgsEl.scrollHeight;
  }

  function togglePanel() {
    isOpen = !isOpen;
    panel.classList.toggle('ah-open', isOpen);
    iconChat.style.display  = isOpen ? 'none'  : 'block';
    iconClose.style.display = isOpen ? 'block' : 'none';
    if (isOpen) {
      renderMsgs();
      inp.focus();
    }
  }

  async function sendMsg() {
    var text = inp.value.trim();
    if (!text || loading) return;
    history.push({ role: 'user', content: text });
    inp.value = '';
    loading = true;
    sendBtn.disabled = true;
    renderMsgs();
    try {
      var apiMessages = history
        .filter(function(m) { return m.role !== 'system'; })
        .map(function(m) { return { role: m.role, content: m.content }; });
      var res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ page_context: 'fitness', messages: apiMessages })
      });
      var data = await res.json();
      var reply = (data.content && data.content[0] && data.content[0].text)
        ? data.content[0].text
        : 'Spojeni se nepodarilo. Napiste nam prosim primo do formulare nize nebo na bohdan@agilehouse.cz';
      history.push({ role: 'assistant', content: reply });
    } catch (e) {
      history.push({
        role: 'assistant',
        content: 'Spojeni se nepodarilo. Napiste nam prosim primo do formulare nize nebo na bohdan@agilehouse.cz'
      });
    }
    loading = false;
    sendBtn.disabled = false;
    renderMsgs();
  }

  toggle.addEventListener('click', togglePanel);
  closeBtn.addEventListener('click', togglePanel);
  sendBtn.addEventListener('click', sendMsg);
  inp.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMsg();
    }
  });

})();
