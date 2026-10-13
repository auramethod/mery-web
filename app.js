/* ============================================================
   RESTAURANTE MERY — interacciones
============================================================ */
(function () {
  "use strict";

  /* --- Header: estado al hacer scroll --- */
  var header = document.getElementById("header");
  function onScroll() {
    if (window.scrollY > 40) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* --- Menú móvil --- */
  var menu = document.getElementById("mobileMenu");
  var toggle = document.getElementById("navToggle");
  var close = document.getElementById("mobileClose");
  function openMenu() { menu.classList.add("open"); document.body.style.overflow = "hidden"; }
  function closeMenu() { menu.classList.remove("open"); document.body.style.overflow = ""; }
  if (toggle) toggle.addEventListener("click", openMenu);
  if (close) close.addEventListener("click", closeMenu);
  menu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", closeMenu);
  });

  /* --- Pestañas de la carta --- */
  document.addEventListener("click", function (e) {
    var tab = e.target.closest(".menu-tab");
    if (!tab) return;
    var name = tab.getAttribute("data-tab");
    document.querySelectorAll(".menu-tab").forEach(function (t) { t.classList.toggle("active", t === tab); });
    document.querySelectorAll(".menu-panel").forEach(function (p) { p.classList.toggle("active", p.getAttribute("data-panel") === name); });
  });

  /* --- Carrusel de opiniones --- */
  var reviews = Array.prototype.slice.call(document.querySelectorAll(".review"));
  var dotsWrap = document.getElementById("reviewDots");
  var current = 0;
  var timer = null;

  if (reviews.length && dotsWrap) {
    reviews.forEach(function (_, i) {
      var b = document.createElement("button");
      if (i === 0) b.classList.add("active");
      b.setAttribute("aria-label", "Opinión " + (i + 1));
      b.addEventListener("click", function () { goTo(i); restart(); });
      dotsWrap.appendChild(b);
    });
    var dots = dotsWrap.querySelectorAll("button");

    function goTo(i) {
      reviews[current].classList.remove("active");
      dots[current].classList.remove("active");
      current = (i + reviews.length) % reviews.length;
      reviews[current].classList.add("active");
      dots[current].classList.add("active");
    }
    function next() { goTo(current + 1); }
    function restart() { clearInterval(timer); timer = setInterval(next, 6000); }
    restart();
  }

  /* --- Reserva: fecha mínima = hoy --- */
  var fecha = document.getElementById("fecha");
  if (fecha) {
    var t = new Date();
    var iso = t.getFullYear() + "-" +
      String(t.getMonth() + 1).padStart(2, "0") + "-" +
      String(t.getDate()).padStart(2, "0");
    fecha.setAttribute("min", iso);
    fecha.value = iso;
  }

  /* --- Validación del formulario de reserva --- */
  var form = document.getElementById("resForm");
  var success = document.getElementById("resSuccess");
  var successMsg = document.getElementById("resSuccessMsg");
  var resetBtn = document.getElementById("resReset");

  function setInvalid(field, bad) {
    var wrap = field.closest(".field");
    if (!wrap) return;
    wrap.classList.toggle("invalid", bad);
  }

  function validateField(field) {
    var val = field.value.trim();
    var bad = false;
    if (field.hasAttribute("required") && !val) bad = true;
    if (!bad && field.type === "email" && val) {
      bad = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    }
    if (!bad && field.type === "tel" && val) {
      bad = !/^[+]?[\d\s().-]{7,}$/.test(val);
    }
    setInvalid(field, bad);
    return !bad;
  }

  if (form) {
    var fields = Array.prototype.slice.call(
      form.querySelectorAll("input[required], select[required]")
    );
    fields.forEach(function (f) {
      f.addEventListener("blur", function () { validateField(f); });
      f.addEventListener("input", function () {
        if (f.closest(".field").classList.contains("invalid")) validateField(f);
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;
      fields.forEach(function (f) { if (!validateField(f)) ok = false; });
      if (!ok) {
        var firstBad = form.querySelector(".field.invalid input, .field.invalid select");
        if (firstBad) firstBad.focus();
        return;
      }
      var nombre = document.getElementById("nombre").value.trim();
      var personas = document.getElementById("personas").value;
      var f = document.getElementById("fecha").value;
      var hora = document.getElementById("hora").value;
      var fechaTxt = f;
      try {
        fechaTxt = new Date(f + "T00:00:00").toLocaleDateString("es-ES", {
          weekday: "long", day: "numeric", month: "long"
        });
      } catch (err) {}
      successMsg.innerHTML = "Gracias, <strong>" + nombre + "</strong>. Hemos recibido tu solicitud para <strong>" +
        personas + "</strong> el <strong>" + fechaTxt + " a las " + hora +
        "</strong>. Te confirmaremos por teléfono o email en menos de 24 h.";
      form.style.display = "none";
      success.classList.add("show");
    });

    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        form.reset();
        if (fecha) fecha.value = fecha.getAttribute("min");
        form.style.display = "";
        success.classList.remove("show");
        form.scrollIntoView ? null : null;
      });
    }
  }

  /* --- Hero: pase de fotos --- */
  var hi = 0;
  setInterval(function () {
    var heroSlides = document.querySelectorAll(".hero__slide");
    if (heroSlides.length < 2) return;
    if (hi >= heroSlides.length) hi = 0;
    heroSlides[hi].classList.remove("active");
    hi = (hi + 1) % heroSlides.length;
    heroSlides[hi].classList.add("active");
  }, 5500);

  /* --- Antes / después: comparador deslizante --- */
  var ba = document.getElementById("baCompare");
  if (ba) {
    var setPos = function (clientX) {
      var r = ba.getBoundingClientRect();
      var p = (clientX - r.left) / r.width;
      p = Math.max(0, Math.min(1, p));
      ba.style.setProperty("--pos", (p * 100) + "%");
    };
    ba.addEventListener("pointermove", function (e) { setPos(e.clientX); });
    ba.addEventListener("pointerdown", function (e) { setPos(e.clientX); });
  }

  /* --- Opiniones: carrusel continuo (duplica para bucle) --- */
  var reviewTrack = document.getElementById("reviewTrack");
  if (reviewTrack) { reviewTrack.innerHTML += reviewTrack.innerHTML; }

  /* --- Año del footer --- */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
