document.addEventListener('DOMContentLoaded', function () {
  // Mobile navigation toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Publications: toggle the preprint list
  var pubsBtn = document.querySelector('[data-toggle="pubs"]');
  var extra = document.querySelector('.pub-extra');
  if (pubsBtn && extra) {
    pubsBtn.addEventListener('click', function () {
      extra.hidden = !extra.hidden;
      pubsBtn.textContent = extra.hidden ? 'show full list' : 'show selected only';
    });
  }
});
