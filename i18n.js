/* Agile House - i18n language switcher
   Requires translations.js loaded before this file */
(function () {
  var STORAGE_KEY = 'agile-house-lang';
  var DEFAULT_LANG = 'en';
  var SUPPORTED = ['en', 'cs'];
  var initialized = false;

  function getBrowserLang() {
    var raw = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (raw === 'cs' || raw.indexOf('cs-') === 0) return 'cs';
    return null;
  }

  function getInitialLang() {
    try { var u = new URLSearchParams(window.location.search).get('lang'); if (u && SUPPORTED.indexOf(u) !== -1) return u; } catch(e) {}
    try { var s = localStorage.getItem(STORAGE_KEY); if (s && SUPPORTED.indexOf(s) !== -1) return s; } catch(e) {}
    var b = getBrowserLang(); if (b) return b;
    return DEFAULT_LANG;
  }

  function getNestedValue(obj, path) {
    return path.split('.').reduce(function(a, k) { return a != null ? a[k] : undefined; }, obj);
  }

  function applyTranslations(lang) {
    var t = window.translations;
    if (!t || !t[lang]) { console.warn('[i18n] missing lang:', lang); return; }
    try {
      document.documentElement.lang = lang;
      try { localStorage.setItem(STORAGE_KEY, lang); } catch(e) {}
      document.querySelectorAll('[data-i18n]').forEach(function(el) {
        var v = getNestedValue(t[lang], el.getAttribute('data-i18n'));
        if (v !== undefined) el.textContent = v;
      });
      document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
        var v = getNestedValue(t[lang], el.getAttribute('data-i18n-html'));
        if (v !== undefined) el.innerHTML = v;
      });
      document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
        var v = getNestedValue(t[lang], el.getAttribute('data-i18n-placeholder'));
        if (v !== undefined) el.setAttribute('placeholder', v);
      });
      document.querySelectorAll('[data-i18n-meta]').forEach(function(el) {
        var v = getNestedValue(t[lang], el.getAttribute('data-i18n-meta'));
        if (v !== undefined) el.setAttribute('content', v);
      });
      document.querySelectorAll('[data-lang-switch]').forEach(function(btn) {
        var active = btn.getAttribute('data-lang-switch') === lang;
        btn.classList.toggle('active', active);
        btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
      try {
        var url = new URL(window.location.href);
        if (lang === DEFAULT_LANG) { url.searchParams.delete('lang'); } else { url.searchParams.set('lang', lang); }
        window.history.replaceState({}, '', url);
      } catch(e) {}
    } catch(e) { console.error('[i18n] error:', e); }
  }

  function wireButtons() {
    document.querySelectorAll('[data-lang-switch]').forEach(function(btn) {
      var fresh = btn.cloneNode(true);
      btn.parentNode.replaceChild(fresh, btn);
      fresh.addEventListener('click', function() { applyTranslations(fresh.getAttribute('data-lang-switch')); });
    });
  }

  function init() {
    if (initialized) return;
    initialized = true;
    applyTranslations(getInitialLang());
    wireButtons();
  }

  window.switchLanguage = applyTranslations;
  window.t = function(key) {
    var lang; try { lang = localStorage.getItem(STORAGE_KEY); } catch(e) {}
    return getNestedValue((window.translations || {})[lang || DEFAULT_LANG], key) || key;
  };
  window.currentLang = function() {
    var lang; try { lang = localStorage.getItem(STORAGE_KEY); } catch(e) {}
    return lang || DEFAULT_LANG;
  };

  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); } else { init(); }
})();
