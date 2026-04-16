/* Agile House - i18n language switcher
   Requires translations.js loaded before this file
   Supports: data-i18n (textContent), data-i18n-html (innerHTML),
             data-i18n-placeholder (placeholder attr), data-i18n-meta (content attr) */

(function () {
  var STORAGE_KEY = 'agile-house-lang';
  var DEFAULT_LANG = 'en';
  var SUPPORTED = ['en', 'cs'];

  function getInitialLang() {
    var urlLang = new URLSearchParams(window.location.search).get('lang');
    if (urlLang && SUPPORTED.indexOf(urlLang) !== -1) return urlLang;
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;
    return DEFAULT_LANG;
  }

  function getNestedValue(obj, path) {
    return path.split('.').reduce(function (acc, key) {
      return acc != null ? acc[key] : undefined;
    }, obj);
  }

  function applyTranslations(lang) {
    if (!translations || !translations[lang]) return;
    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);

    // textContent swap
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var value = getNestedValue(translations[lang], key);
      if (value !== undefined) el.textContent = value;
    });

    // innerHTML swap (for elements containing nested HTML like <span class="accent">)
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      var value = getNestedValue(translations[lang], key);
      if (value !== undefined) el.innerHTML = value;
    });

    // placeholder attribute swap
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      var value = getNestedValue(translations[lang], key);
      if (value !== undefined) el.setAttribute('placeholder', value);
    });

    // meta content swap
    document.querySelectorAll('[data-i18n-meta]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-meta');
      var value = getNestedValue(translations[lang], key);
      if (value !== undefined) el.setAttribute('content', value);
    });

    // active state on switcher buttons
    document.querySelectorAll('[data-lang-switch]').forEach(function (btn) {
      var isActive = btn.getAttribute('data-lang-switch') === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    // Update URL without reload
    var url = new URL(window.location.href);
    if (lang === DEFAULT_LANG) {
      url.searchParams.delete('lang');
    } else {
      url.searchParams.set('lang', lang);
    }
    window.history.replaceState({}, '', url);
  }

  // Public API
  window.switchLanguage = applyTranslations;
  window.t = function (key) {
    var lang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    return getNestedValue(translations[lang], key) || key;
  };
  window.currentLang = function () {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  };

  document.addEventListener('DOMContentLoaded', function () {
    applyTranslations(getInitialLang());
    document.querySelectorAll('[data-lang-switch]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyTranslations(btn.getAttribute('data-lang-switch'));
      });
    });
  });
})();
