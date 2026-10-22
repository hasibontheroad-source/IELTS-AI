// IELTS Academic AI Platform - Universal Theme Engine (Dark & Light Mode)
// Provides instant theme initialization, smooth transitions, and multi-page state persistence

(function() {
  'use strict';

  // 1. Instant execution to eliminate flash of unstyled theme (FOUC)
  function getInitialTheme() {
    try {
      const stored = localStorage.getItem('ielts_theme');
      if (stored === 'light' || stored === 'dark') return stored;
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
      }
    } catch (_) {}
    return 'dark'; // Premium dark default for IELTS AI
  }

  const initialTheme = getInitialTheme();
  document.documentElement.setAttribute('data-theme', initialTheme);
  if (initialTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  // 2. Global Theme Manager
  const ThemeManager = {
    current: initialTheme,

    init() {
      this.current = document.documentElement.getAttribute('data-theme') || 'dark';
      this.applyTheme(this.current, false);
      this.bindButtons();

      // Listen for system theme changes if user hasn't explicitly set a fixed theme
      if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
          if (!localStorage.getItem('ielts_theme_user_set')) {
            this.setTheme(e.matches ? 'dark' : 'light', false);
          }
        });
      }

      // Sync across browser tabs
      window.addEventListener('storage', e => {
        if (e.key === 'ielts_theme' && (e.newValue === 'light' || e.newValue === 'dark')) {
          this.applyTheme(e.newValue, false);
        }
      });
    },

    getTheme() {
      return this.current;
    },

    setTheme(theme, isUserAction = true) {
      if (theme !== 'dark' && theme !== 'light') theme = 'dark';
      this.current = theme;
      if (isUserAction) {
        try {
          localStorage.setItem('ielts_theme', theme);
          localStorage.setItem('ielts_theme_user_set', 'true');
        } catch (_) {}
      }
      this.applyTheme(theme, true);
    },

    toggle() {
      const target = this.current === 'dark' ? 'light' : 'dark';
      this.setTheme(target, true);
      return target;
    },

    applyTheme(theme, notify = true) {
      this.current = theme;
      document.documentElement.setAttribute('data-theme', theme);
      
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        if (document.body) document.body.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
        if (document.body) document.body.classList.remove('dark');
      }

      // Update UI toggle buttons
      this.updateToggles(theme);

      // Notify other components (like Chart.js)
      if (notify) {
        try {
          window.dispatchEvent(new CustomEvent('themechanged', { detail: { theme } }));
        } catch (_) {}
      }
    },

    updateToggles(theme) {
      const isDark = theme === 'dark';
      document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
        const iconEl = btn.querySelector('.theme-icon') || btn;
        const textEl = btn.querySelector('.theme-text');
        if (textEl) {
          textEl.textContent = isDark ? 'Light' : 'Dark';
        }
        if (iconEl && iconEl !== btn) {
          iconEl.textContent = isDark ? '☀️' : '🌙';
        } else if (btn.classList.contains('theme-toggle-icon-only')) {
          btn.textContent = isDark ? '☀️' : '🌙';
        }
        btn.setAttribute('aria-label', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
        btn.setAttribute('title', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
      });

      // Update any segmented radios or controls (like in Settings page)
      const radioDark = document.getElementById('theme-radio-dark');
      const radioLight = document.getElementById('theme-radio-light');
      if (radioDark && radioLight) {
        radioDark.checked = isDark;
        radioLight.checked = !isDark;
      }
    },

    bindButtons() {
      document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
        if (!btn.dataset.themeBound) {
          btn.dataset.themeBound = 'true';
          btn.addEventListener('click', e => {
            e.preventDefault();
            e.stopPropagation();
            this.toggle();
          });
        }
      });
    },

    createToggleHtml(extraClass = '') {
      const isDark = this.current === 'dark';
      return `
        <button class="theme-toggle-btn ${extraClass}" type="button" title="${isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}" aria-label="Toggle Theme">
          <span class="theme-toggle-indicator">
            <span class="theme-icon">${isDark ? '☀️' : '🌙'}</span>
          </span>
          <span class="theme-text">${isDark ? 'Light' : 'Dark'}</span>
        </button>
      `;
    },

    injectFloatingToggle() {
      if (document.getElementById('floating-theme-toggle-container')) return;
      // If page already has a visible header or sidebar theme toggle, do not clutter
      const existing = document.querySelector('.theme-toggle-btn');
      if (existing) return;

      const container = document.createElement('div');
      container.id = 'floating-theme-toggle-container';
      container.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:9999;';
      container.innerHTML = `
        <button class="theme-toggle-btn floating-theme-btn" type="button" aria-label="Toggle Theme">
          <span class="theme-toggle-indicator">
            <span class="theme-icon">${this.current === 'dark' ? '☀️' : '🌙'}</span>
          </span>
          <span class="theme-text">${this.current === 'dark' ? 'Light' : 'Dark'}</span>
        </button>
      `;
      document.body.appendChild(container);
      this.bindButtons();
    }
  };

  // Expose to window
  window.ThemeManager = ThemeManager;
  window.toggleTheme = () => ThemeManager.toggle();
  window.setTheme = (t) => ThemeManager.setTheme(t);

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      ThemeManager.init();
      // Optional fallback auto-mount for pages without explicit toggle slots
      setTimeout(() => ThemeManager.injectFloatingToggle(), 500);
    });
  } else {
    ThemeManager.init();
    setTimeout(() => ThemeManager.injectFloatingToggle(), 500);
  }
})();
