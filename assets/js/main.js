/* ==========================================================================
   DHARAN SEO CONSULTANCY — LIGHTWEIGHT DEFERRED INTERACTIVITY
   Zero dependencies | Accessible | Core Web Vitals friendly
   ========================================================================== */

(function () {
  'use strict';

  /* 1. Mobile Navigation Toggle */
  const navToggle = document.querySelector('[data-nav-toggle]');
  const primaryNav = document.querySelector('[data-primary-nav]');

  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', function () {
      const isOpen = primaryNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.textContent = isOpen ? 'Close Menu' : 'Menu';
    });
  }

  /* 2. Sticky Table of Contents Scroll Spy */
  const tocLinks = Array.from(document.querySelectorAll('.toc-list a[href^="#"]'));
  if (tocLinks.length > 0 && 'IntersectionObserver' in window) {
    const sections = tocLinks
      .map(function (link) {
        const id = link.getAttribute('href').slice(1);
        return document.getElementById(id);
      })
      .filter(Boolean);

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            tocLinks.forEach(function (link) {
              link.classList.toggle('is-active', link.getAttribute('href') === '#' + id);
            });
          }
        });
      },
      { rootMargin: '-18% 0px -70% 0px', threshold: 0 }
    );

    sections.forEach(function (sec) {
      observer.observe(sec);
    });
  }

  /* 3. Knowledge Hub Cluster Filter */
  const filterButtons = Array.from(document.querySelectorAll('[data-filter-btn]'));
  const filterCards = Array.from(document.querySelectorAll('[data-cluster]'));

  if (filterButtons.length > 0 && filterCards.length > 0) {
    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const target = btn.getAttribute('data-filter-btn');
        filterButtons.forEach(function (b) {
          b.classList.toggle('is-active', b === btn);
          b.setAttribute('aria-pressed', String(b === btn));
        });
        filterCards.forEach(function (card) {
          const match = target === 'all' || card.getAttribute('data-cluster') === target;
          card.hidden = !match;
        });
      });
    });
  }

  /* 4. Conversion Forms (Consultation & Free SEO Audit)
        Builds an immediate WhatsApp handoff link + confirmation notice
        until connected to a backend webhook / form service. */
  const forms = Array.from(document.querySelectorAll('[data-seo-form]'));
  forms.forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const statusEl = form.querySelector('[data-form-status]');
      const formData = new FormData(form);
      const name = (formData.get('name') || '').toString().trim();
      const business = (formData.get('business') || '').toString().trim();
      const website = (formData.get('website') || '').toString().trim();
      const city = (formData.get('city') || 'Dharan').toString().trim();
      const service = (formData.get('service') || 'SEO Consultation').toString().trim();
      const notes = (formData.get('notes') || '').toString().trim();

      const summaryLines = [
        'Hello, I would like to request: ' + service,
        name ? 'Name: ' + name : '',
        business ? 'Business: ' + business : '',
        website ? 'Website: ' + website : '',
        city ? 'Location: ' + city : '',
        notes ? 'Goals/Notes: ' + notes : ''
      ].filter(Boolean);

      /* Replace 9779800000000 with your official WhatsApp business number */
      const waNumber = '9779800000000';
      const waUrl = 'https://wa.me/' + waNumber + '?text=' + encodeURIComponent(summaryLines.join('\n'));

      if (statusEl) {
        statusEl.classList.add('is-visible');
        statusEl.innerHTML =
          '<strong>Inquiry summary prepared.</strong> Connect this form to your production endpoint (Formspree, Cloudflare Workers, or SMTP) before launch. ' +
          'For immediate review, send your pre-filled brief directly via ' +
          '<a href="' + waUrl + '" target="_blank" rel="noopener noreferrer">WhatsApp Consultation Handoff</a>.';
      }
    });
  });

  /* 5. Homepage Interactive SEO Priority Finder */
  const finderForm = document.querySelector('[data-priority-finder]');
  if (finderForm) {
    finderForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const goal = finderForm.querySelector('[name="goal"]').value;
      const resultBox = document.querySelector('[data-finder-result]');
      const recommendations = {
        local: {
          title: 'Recommended Starting Point: Local SEO Services in Dharan',
          desc: 'Best for shops, clinics, hotels, restaurants, and service providers targeting Google Maps, "near me" queries, and calls across Dharan, Itahari, and Sunsari.',
          href: '/local-seo-services-dharan/',
          label: 'Explore Local SEO Services'
        },
        technical: {
          title: 'Recommended Starting Point: Technical SEO Services Nepal',
          desc: 'Best when pages are not indexing, rankings stalled after a redesign, or slow Core Web Vitals and crawl errors are holding back organic growth.',
          href: '/technical-seo-services-nepal/',
          label: 'Explore Technical SEO Services'
        },
        onpage: {
          title: 'Recommended Starting Point: Website & On-Page SEO Services',
          desc: 'Best when your website is indexed but fails to rank on page one due to weak search intent alignment, missing entity signals, or cannibalized keywords.',
          href: '/on-page-seo-services-nepal/',
          label: 'Explore On-Page SEO Services'
        },
        ecommerce: {
          title: 'Recommended Starting Point: E-commerce SEO Services Nepal',
          desc: 'Best for Shopify, WooCommerce, and custom online stores needing product schema, category architecture, and faceted filter control.',
          href: '/ecommerce-seo-services-nepal/',
          label: 'Explore E-commerce SEO Services'
        },
        full: {
          title: 'Recommended Starting Point: Comprehensive SEO Services in Dharan',
          desc: 'Best for growth-focused businesses wanting end-to-end technical foundation, semantic content architecture, local authority, and lead conversion tracking.',
          href: '/seo-services-dharan/',
          label: 'Explore Full SEO Services'
        }
      };

      const rec = recommendations[goal] || recommendations.full;
      if (resultBox) {
        resultBox.hidden = false;
        resultBox.innerHTML =
          '<p class="callout__title">' + rec.title + '</p>' +
          '<p>' + rec.desc + '</p>' +
          '<div class="btn-group" style="margin-top:12px;">' +
          '<a class="btn btn--primary btn--sm" href="' + rec.href + '">' + rec.label + '</a>' +
          '<a class="btn btn--outline btn--sm" href="/free-seo-audit/">Request Free SEO Audit</a>' +
          '</div>';
      }
    });
  }
})();
