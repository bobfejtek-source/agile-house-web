/* =========================================================
   Fitness studio Lípa - interactive layer
   ========================================================= */

(function () {
  'use strict';

  /* ---------- Schedule data ---------- */
  var scheduleData = {
    po: [
      { time: '07:00', name: 'Ranní jóga', trainer: 'Marie Nováková', booked: 8, total: 15 },
      { time: '09:30', name: 'Funkční trénink', trainer: 'Tomáš Dvořák', booked: 12, total: 15 },
      { time: '12:00', name: 'Polední HIIT', trainer: 'Tomáš Dvořák', booked: 6, total: 12 },
      { time: '17:30', name: 'Spinning', trainer: 'Lenka Kratochvílová', booked: 14, total: 16 },
      { time: '18:30', name: 'Power jóga', trainer: 'Marie Nováková', booked: 10, total: 15 },
      { time: '19:30', name: 'Silový trénink', trainer: 'Pavel Černý', booked: 7, total: 12 }
    ],
    ut: [
      { time: '06:30', name: 'Early Bird Lift', trainer: 'Pavel Černý', booked: 5, total: 12 },
      { time: '09:00', name: 'Body & Mind', trainer: 'Marie Nováková', booked: 11, total: 15 },
      { time: '12:15', name: 'Lunch HIIT', trainer: 'Tomáš Dvořák', booked: 8, total: 12 },
      { time: '17:00', name: 'Jumping', trainer: 'Lenka Kratochvílová', booked: 16, total: 16 },
      { time: '18:00', name: 'Funkční trénink', trainer: 'Tomáš Dvořák', booked: 9, total: 15 },
      { time: '19:15', name: 'Pilates', trainer: 'Marie Nováková', booked: 7, total: 14 }
    ],
    st: [
      { time: '07:00', name: 'Vinyasa jóga', trainer: 'Marie Nováková', booked: 12, total: 15 },
      { time: '10:00', name: 'Silový trénink', trainer: 'Pavel Černý', booked: 6, total: 12 },
      { time: '12:00', name: 'Core & Abs', trainer: 'Tomáš Dvořák', booked: 10, total: 14 },
      { time: '17:30', name: 'Spinning', trainer: 'Lenka Kratochvílová', booked: 13, total: 16 },
      { time: '18:30', name: 'HIIT', trainer: 'Tomáš Dvořák', booked: 11, total: 15 },
      { time: '19:30', name: 'Yin jóga', trainer: 'Marie Nováková', booked: 4, total: 15 }
    ],
    ct: [
      { time: '06:30', name: 'Ranní jóga', trainer: 'Marie Nováková', booked: 9, total: 15 },
      { time: '09:30', name: 'Kruhový trénink', trainer: 'Pavel Černý', booked: 8, total: 12 },
      { time: '12:00', name: 'Polední HIIT', trainer: 'Tomáš Dvořák', booked: 7, total: 12 },
      { time: '16:30', name: 'Jumping', trainer: 'Lenka Kratochvílová', booked: 15, total: 16 },
      { time: '18:00', name: 'Funkční trénink', trainer: 'Tomáš Dvořák', booked: 10, total: 15 },
      { time: '19:15', name: 'Power jóga', trainer: 'Marie Nováková', booked: 6, total: 15 }
    ],
    pa: [
      { time: '07:00', name: 'Silový trénink', trainer: 'Pavel Černý', booked: 5, total: 12 },
      { time: '10:00', name: 'Body & Mind', trainer: 'Marie Nováková', booked: 9, total: 15 },
      { time: '12:00', name: 'Lunch HIIT', trainer: 'Tomáš Dvořák', booked: 8, total: 12 },
      { time: '17:00', name: 'Spinning', trainer: 'Lenka Kratochvílová', booked: 12, total: 16 },
      { time: '18:30', name: 'Funkční trénink', trainer: 'Tomáš Dvořák', booked: 11, total: 15 },
      { time: '19:30', name: 'Yin jóga', trainer: 'Marie Nováková', booked: 7, total: 15 }
    ],
    so: [
      { time: '08:30', name: 'Ranní jóga', trainer: 'Marie Nováková', booked: 11, total: 15 },
      { time: '10:00', name: 'Weekend HIIT', trainer: 'Tomáš Dvořák', booked: 13, total: 15 },
      { time: '11:15', name: 'Kruhový trénink', trainer: 'Pavel Černý', booked: 9, total: 12 },
      { time: '15:00', name: 'Jumping', trainer: 'Lenka Kratochvílová', booked: 14, total: 16 },
      { time: '17:00', name: 'Power jóga', trainer: 'Marie Nováková', booked: 12, total: 15 }
    ],
    ne: [
      { time: '09:00', name: 'Slow flow jóga', trainer: 'Marie Nováková', booked: 10, total: 15 },
      { time: '10:30', name: 'Funkční trénink', trainer: 'Tomáš Dvořák', booked: 7, total: 15 },
      { time: '11:45', name: 'Spinning', trainer: 'Lenka Kratochvílová', booked: 8, total: 16 },
      { time: '16:00', name: 'Kruhový trénink', trainer: 'Pavel Černý', booked: 6, total: 12 },
      { time: '17:30', name: 'Yin jóga', trainer: 'Marie Nováková', booked: 9, total: 15 }
    ]
  };

  var dayLabels = { po: 'Pondělí', ut: 'Úterý', st: 'Středa', ct: 'Čtvrtek', pa: 'Pátek', so: 'Sobota', ne: 'Neděle' };
  var PRICE = 170;

  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  var nav = $('#nav');
  var scheduleList = $('#schedule-list');
  var modal = $('#booking-modal');
  var modalBody = $('#modal-body');
  var burger = $('.nav-burger');
  var mobileMenu = $('#mobile-menu');
  var mobileClose = $('.mobile-close');

  function updateNavState() {
    if (window.scrollY > 50) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  }
  updateNavState();
  window.addEventListener('scroll', updateNavState, { passive: true });

  function openMobileMenu() {
    mobileMenu.classList.add('is-open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeMobileMenu() {
    mobileMenu.classList.remove('is-open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  if (burger) burger.addEventListener('click', openMobileMenu);
  if (mobileClose) mobileClose.addEventListener('click', closeMobileMenu);
  $$('#mobile-menu a').forEach(function (a) { a.addEventListener('click', closeMobileMenu); });

  function capacityClass(b, t) {
    if (b >= t) return 'is-full';
    if (t - b <= 2) return 'is-low';
    return '';
  }
  function capacityText(b, t) {
    if (b >= t) return 'Obsazeno';
    return b + '/' + t + ' míst';
  }

  function renderDay(day) {
    var lessons = scheduleData[day] || [];
    var html = lessons.map(function (l, i) {
      var isFull = l.booked >= l.total;
      return '<article class="lesson">' +
        '<div class="lesson-time">' + l.time + '</div>' +
        '<div class="lesson-main"><h3>' + l.name + '</h3><div class="lesson-trainer">' + l.trainer + '</div></div>' +
        '<div class="lesson-capacity ' + capacityClass(l.booked, l.total) + '">' + capacityText(l.booked, l.total) + '</div>' +
        '<div class="lesson-price">' + PRICE + ' Kč</div>' +
        '<button class="btn btn-primary lesson-cta" data-book="' + day + '-' + i + '"' + (isFull ? ' disabled' : '') + '>' +
        (isFull ? 'Obsazeno' : 'Rezervovat') + '</button></article>';
    }).join('');
    scheduleList.innerHTML = html;
  }

  $$('.tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      $$('.tab').forEach(function (t) { t.classList.remove('is-active'); t.setAttribute('aria-selected', 'false'); });
      tab.classList.add('is-active');
      tab.setAttribute('aria-selected', 'true');
      renderDay(tab.dataset.day);
    });
  });
  renderDay('po');

  var lastFocused = null;

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function formMarkup(l, d) {
    return '<h3 id="modal-title">Rezervace: ' + escapeHtml(l.name) + '</h3>' +
      '<div class="modal-info">' +
        '<div><span class="modal-info-label">Den</span><span class="modal-info-value">' + dayLabels[d] + '</span></div>' +
        '<div><span class="modal-info-label">Čas</span><span class="modal-info-value">' + l.time + '</span></div>' +
        '<div><span class="modal-info-label">Trenér</span><span class="modal-info-value">' + escapeHtml(l.trainer) + '</span></div>' +
        '<div><span class="modal-info-label">Cena</span><span class="modal-info-value">' + PRICE + ' Kč</span></div>' +
      '</div>' +
      '<form id="booking-form" novalidate>' +
        '<div class="form-field" data-field="name"><label for="f-name">Jméno <span aria-hidden="true">*</span></label><input id="f-name" name="name" type="text" autocomplete="name" required><span class="form-error">Vyplňte prosím své jméno.</span></div>' +
        '<div class="form-field" data-field="email"><label for="f-email">E-mail <span aria-hidden="true">*</span></label><input id="f-email" name="email" type="email" autocomplete="email" required><span class="form-error">Zadejte platnou e-mailovou adresu.</span></div>' +
        '<div class="form-field" data-field="phone"><label for="f-phone">Telefon</label><input id="f-phone" name="phone" type="tel" autocomplete="tel"></div>' +
        '<button type="submit" class="btn btn-primary btn-block btn-lg modal-submit">Potvrdit rezervaci</button>' +
      '</form>';
  }

  function successMarkup(email, name) {
    return '<div class="modal-success">' +
      '<div class="modal-success-icon" aria-hidden="true">✓</div>' +
      '<h3 id="modal-title">Rezervace potvrzena</h3>' +
      '<p>Potvrzení lekce <strong>' + escapeHtml(name) + '</strong> jsme poslali na <strong>' + escapeHtml(email) + '</strong>. Těšíme se na vás!</p>' +
      '<button type="button" class="btn btn-outline btn-block" data-modal-close>Zavřít</button></div>';
  }

  function openModal(d, i) {
    var lesson = scheduleData[d][i];
    lastFocused = document.activeElement;
    modalBody.innerHTML = formMarkup(lesson, d);
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    var form = $('#booking-form');
    form.addEventListener('submit', function (e) { e.preventDefault(); handleSubmit(form, lesson); });
    setTimeout(function () { var f = $('#f-name'); if (f) f.focus(); }, 30);
  }

  function handleSubmit(form, lesson) {
    var nf = form.querySelector('[data-field="name"]');
    var ef = form.querySelector('[data-field="email"]');
    var ni = $('#f-name');
    var ei = $('#f-email');
    var valid = true;
    nf.classList.remove('has-error');
    ef.classList.remove('has-error');
    if (!ni.value.trim()) { nf.classList.add('has-error'); valid = false; }
    var rx = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!rx.test(ei.value.trim())) { ef.classList.add('has-error'); valid = false; }
    if (!valid) { var fe = form.querySelector('.has-error input'); if (fe) fe.focus(); return; }
    modalBody.innerHTML = successMarkup(ei.value.trim(), lesson.name);
    var cb = modalBody.querySelector('[data-modal-close]');
    if (cb) cb.focus();
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(function () {
      modalBody.innerHTML = '';
      if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
    }, 280);
  }

  scheduleList.addEventListener('click', function (e) {
    var t = e.target.closest('[data-book]');
    if (!t || t.disabled) return;
    var parts = t.getAttribute('data-book').split('-');
    openModal(parts[0], parseInt(parts[1], 10));
  });

  modal.addEventListener('click', function (e) {
    if (e.target.closest('[data-modal-close]')) closeModal();
  });

  document.addEventListener('keydown', function (e) {
    if (!modal.classList.contains('is-open')) return;
    if (e.key === 'Escape') { closeModal(); return; }
    if (e.key === 'Tab') {
      var fs = modal.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])');
      if (!fs.length) return;
      var first = fs[0], last = fs[fs.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    $$('.reveal').forEach(function (el) { obs.observe(el); });
  } else {
    $$('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
  }

  $$('.card').forEach(function (c) {
    c.addEventListener('mousemove', function (e) {
      var r = c.getBoundingClientRect();
      c.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
      c.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
    });
  });

  $$('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (id.length < 2) return;
      var t = document.querySelector(id);
      if (!t) return;
      e.preventDefault();
      var top = t.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  var scrollBar = $('#scroll-bar');
  function updateScrollProgress() {
    var dh = document.documentElement.scrollHeight - window.innerHeight;
    var p = dh > 0 ? window.scrollY / dh : 0;
    if (scrollBar) scrollBar.style.width = (p * 100) + '%';
  }
  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  window.addEventListener('resize', updateScrollProgress);
  updateScrollProgress();

  var glows = $$('.bg-glow');
  var lastScroll = 0, ticking = false;
  window.addEventListener('scroll', function () {
    lastScroll = window.scrollY;
    if (!ticking) {
      requestAnimationFrame(function () {
        var y = lastScroll;
        glows.forEach(function (g, idx) {
          var sp = [0.15, -0.1, 0.22][idx] || 0.1;
          g.style.transform = 'translate3d(0, ' + (y * sp) + 'px, 0)';
        });
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

})();
