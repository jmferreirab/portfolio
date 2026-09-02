/**
 * Dark Mode Management Script
 * Handles:
 * - System preference detection
 * - User preference storage
 * - DOM manipulation for dark mode
 * - Toggle functionality
 */

const STORAGE_KEY = 'portfolio-theme-preference';

type ThemeMode = 'light' | 'dark';

interface ThemePreference {
  mode: ThemeMode;
}

export function isThemeMode(value: unknown): value is ThemeMode {
  return value === 'light' || value === 'dark';
}

export function getEffectiveTheme(): ThemeMode {
  const preference = getSavedPreference();

  if (preference) {
    return preference.mode;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

/**
 * Apply theme to the document
 */
function applyTheme(theme: ThemeMode) {
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
 * Get user preference from localStorage
 */
export function getSavedPreference(): ThemePreference | null {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (isThemeMode(parsed.mode)) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn('Failed to read theme preference from storage:', e);
  }
  return null;
}

/**
 * Save user preference to localStorage
 */
export function savePreference(preference: ThemePreference) {
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
  const currentPref = getEffectiveTheme();
  let nextMode: ThemeMode = currentPref === 'light' ? 'dark' : 'light';

  savePreference({ mode: nextMode });
  applyTheme(nextMode);
  updateThemeButton(nextMode);

  // Dispatch custom event for other components to react to
  window.dispatchEvent(
    new CustomEvent('theme-changed', {
      detail: { mode: nextMode },
    })
  );
}

/**
 * Update the theme button appearance and text
 */
function updateThemeButton(mode: ThemeMode) {
  const button = document.getElementById('theme-toggle-btn');
  if (!button) return;

  let newLabel =
    mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';

  button.setAttribute('aria-label', newLabel);
  button.title = newLabel;
}

/**
 * Initialize dark mode
 */
export function initDarkMode() {
  const effectiveTheme = getEffectiveTheme();

  updateThemeButton(effectiveTheme);

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  const handleMediaChange = (e: MediaQueryListEvent) => {
    // If the user has explicitly selected light/dark,
    // system changes should have no effect.
    if (!getSavedPreference()) {
      const theme = e.matches ? 'dark' : 'light';

      applyTheme(theme);
      updateThemeButton(theme);
    }
  };

  mediaQuery.addEventListener('change', handleMediaChange);

  document
    .getElementById('theme-toggle-btn')
    ?.addEventListener('click', toggleTheme);
}
