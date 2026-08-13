/**
 * Dark Mode Management Script
 * Handles:
 * - System preference detection
 * - User preference storage
 * - DOM manipulation for dark mode
 * - Toggle functionality
 */

const STORAGE_KEY = 'portfolio-theme-preference';

interface ThemePreference {
  mode: 'light' | 'dark' | 'system';
}

/**
 * Get the effective theme based on user preference and system settings
 */
function getEffectiveTheme(preference: 'light' | 'dark' | 'system'): 'light' | 'dark' {
  if (preference === 'system') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return preference;
}

/**
 * Apply theme to the document
 */
function applyTheme(theme: 'light' | 'dark') {
  const html = document.documentElement;
  if (theme === 'dark') {
    html.classList.add('dark');
    document.documentElement.style.colorScheme = 'dark';
  } else {
    html.classList.remove('dark');
    document.documentElement.style.colorScheme = 'light';
  }
}

/**
 * Get user preference from localStorage, with fallback to system preference
 */
function getSavedPreference(): ThemePreference {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.mode === 'light' || parsed.mode === 'dark' || parsed.mode === 'system') {
        return parsed;
      }
    }
  } catch (e) {
    console.warn('Failed to read theme preference from storage:', e);
  }
  return { mode: 'system' };
}

/**
 * Save user preference to localStorage
 */
function savePreference(preference: ThemePreference) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preference));
  } catch (e) {
    console.warn('Failed to save theme preference to storage:', e);
  }
}

/**
 * Toggle between light, dark, and system modes
 */
function toggleTheme() {
  const currentPref = getSavedPreference();
  let nextMode: 'light' | 'dark' | 'system';

  switch (currentPref.mode) {
    case 'light':
      nextMode = 'dark';
      break;
    case 'dark':
      nextMode = 'system';
      break;
    case 'system':
      nextMode = 'light';
      break;
  }

  const newPref: ThemePreference = { mode: nextMode };
  savePreference(newPref);
  applyTheme(getEffectiveTheme(nextMode));
  updateThemeButton(nextMode);

  // Dispatch custom event for other components to react to
  window.dispatchEvent(
    new CustomEvent('theme-changed', {
      detail: { mode: nextMode, effective: getEffectiveTheme(nextMode) },
    })
  );
}

/**
 * Update the theme button appearance and text
 */
function updateThemeButton(mode: 'light' | 'dark' | 'system') {
  const button = document.getElementById('theme-toggle-btn');
  if (button) {
    const icon = button.querySelector('[data-icon]');
    const label = button.getAttribute('aria-label');

    let newIcon = '◐';
    let newLabel = 'Switch to dark mode';

    if (mode === 'dark') {
      // newIcon = '◐';
      newLabel = 'Use system preference';
    } else if (mode === 'light') {
      // newIcon = '🕶️';
      newLabel = 'Switch to dark mode';
    } else if (mode === 'system') {
      const effective = getEffectiveTheme('system');
      // newIcon = effective === 'dark' ? '🔅' : '🕶️';
      newLabel = 'Switch to light mode';
    }

    if (icon) {
      icon.textContent = newIcon;
    }
    if (label) {
      button.setAttribute('aria-label', newLabel);
      button.title = newLabel;
    }
  }
}

/**
 * Initialize dark mode
 */
export function initDarkMode() {
  const preference = getSavedPreference();
  const effectiveTheme = getEffectiveTheme(preference.mode);

  // Apply theme immediately to avoid flash
  applyTheme(effectiveTheme);

  // Update button UI
  updateThemeButton(preference.mode);

  // Listen for system theme changes when in system mode
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const handleMediaChange = (e: MediaQueryListEvent | MediaQueryList) => {
    const currentPref = getSavedPreference();
    if (currentPref.mode === 'system') {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  };

  // Use addEventListener for better compatibility
  mediaQuery.addEventListener('change', handleMediaChange);

  // Attach toggle function to global scope
  (window as any).toggleDarkMode = toggleTheme;

  return () => {
    mediaQuery.removeEventListener('change', handleMediaChange);
  };
}

// Run initialization on page load if DOM is ready, otherwise wait for it
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initDarkMode);
} else {
  initDarkMode();
}
