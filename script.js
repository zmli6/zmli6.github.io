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

  // News: show the first N items, reveal the rest on demand
  var newsList = document.querySelector('.news-list');
  var newsBtn = document.querySelector('[data-toggle="news"]');
  if (newsList && newsBtn) {
    var visible = parseInt(newsList.dataset.visible, 10) || 5;
    var items = Array.prototype.slice.call(newsList.children);
    var hidden = items.slice(visible);
    if (hidden.length === 0) {
      newsBtn.hidden = true;
    } else {
      var collapsed = true;
      var render = function () {
        hidden.forEach(function (li) { li.classList.toggle('is-hidden', collapsed); });
        newsBtn.textContent = collapsed ? 'Show more (' + hidden.length + ')' : 'Show less';
      };
      render();
      newsBtn.addEventListener('click', function () {
        collapsed = !collapsed;
        render();
      });
    }
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
