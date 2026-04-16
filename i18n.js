/* Agile House - i18n language switcher
   Requires translations.js loaded before this file
   Supports: data-i18n (textContent), data-i18n-html (innerHTML),
             data-i18n-placeholder (placeholder attr), data-i18n-meta (content attr) */

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
    // 1. Explicit URL param
    try {
      var urlLang = new URLSearchParams(window.location.search).get('lang');
      if (urlLang && SUPPORTED.indexOf(urlLang) !== -1) return urlLang;
    } catch(e) {}
    // 2. Stored user preference
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;
    } catch(e) {}
    // 3. Browser/OS language — covers Czech users automatically
    var browserLang = getBrowserLang();
    if (browserLang) return browserLang;
    return DEFAULT_LANG;
  }

  function getNestedValue(obj, path) {
    return path.split('.').reduce(function (acc, key) {
      return acc != null ? acc[key] : undefined;
    }, obj);
  }

  function applyTranslations(lang) {
    var t = window.translations;
    if (!t || !t[lang]) {
      console.warn('[i18n] translations not ready or lang missing:', lang);
      return;
    }
    try {
      document.documentElement.lang = lang;
      try { localStorage.setItem(STORAGE_KEY, lang); } catch(e) {}

      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var value = getNestedValue(t[lang], el.getAttribute('data-i18n'));
        if (value !== undefined) el.textContent = value;
      });

      document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
        var value = getNestedValue(t[lang], el.getAttribute('data-i18n-html'));
        if (value !== undefined) el.innerHTML = value;
      });

      document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
        var value = getNestedValue(t[lang], el.getAttribute('data-i18n-placeholder'));
        if (value !== undefined) el.setAttribute('placeholder', value);
      });

      document.querySelectorAll('[data-i18n-meta]').forEach(function (el) {
        var value = getNestedValue(t[lang], el.getAttribute('data-i18n-meta'));
        if (value !== undefined) el.setAttribute('content', value);
      });

      document.querySelectorAll('[data-lang-switch]').forEach(function (btn) {
        var isActive = btn.getAttribute('data-lang-switch') === lang;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      });

      try {
        var url = new URL(window.location.href);
        if (lang === DEFAULT_LANG) {
          url.searchParams.delete('lang');
        } else {
          url.searchParams.set('lang', lang);
        }
        window.history.replaceState({}, '', url);
      } catch(e) {}

    } catch (e) {
      console.error('[i18n] applyTranslations error:', e);
    }
  }

  function wireButtons() {
    document.querySelectorAll('[data-lang-switch]').forEach(function (btn) {
      // Remove any previously attached handler by cloning
      var fresh = btn.cloneNode(true);
 