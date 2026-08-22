import type { Locale } from './translations';

const STORAGE_KEY = 'portfolio-language';

function isLocale(value: string | null): value is Locale {
  return value === 'en' || value === 'es';
}

function getLocale(): Locale {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLocale(saved)) return saved;
  } catch {
    // Ignore storage errors and fall back to English.
  }
  return 'en';
}

function getTranslation(locale: Locale, key: string): unknown {
  const dictionary = window.__portfolioTranslations?.[locale];
  if (!dictionary) return undefined;
  return key.split('.').reduce<unknown>((value, part) => {
    if (value && typeof value === 'object' && part in value) return (value as Record<string, unknown>)[part];
    return undefined;
  }, dictionary);
}

function setLocale(locale: Locale) {
  document.documentElement.lang = locale;
  document.documentElement.dataset.locale = locale;

  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (!key) return;
    const value = getTranslation(locale, key);
    if (typeof value !== 'string') return;
    if (element.dataset.i18nHtml === 'true') element.innerHTML = value;
    else element.textContent = value;
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-aria-label]').forEach((element) => {
    const value = getTranslation(locale, element.dataset.i18nAriaLabel ?? '');
    if (typeof value === 'string') element.setAttribute('aria-label', value);
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-locale]').forEach((element) => {
    element.textContent = locale === 'en' ? 'ES' : 'EN';
    element.setAttribute('aria-label', locale === 'en' ? 'Switch to Spanish' : 'Switch to English');
    element.title = locale === 'en' ? 'Switch to Spanish' : 'Switch to English';
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-date]').forEach((element) => {
    const parsed = new Date(element.dataset.i18nDate ?? '');
    if (Number.isNaN(parsed.getTime())) return;
    element.textContent = new Intl.DateTimeFormat(locale === 'es' ? 'es-CO' : 'en-US', { year: 'numeric', month: 'short' }).format(parsed);
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-present]').forEach((element) => {
    element.textContent = locale === 'es' ? 'Actualidad' : 'Present';
  });

  const title = getTranslation(locale, 'meta.title');
  const description = getTranslation(locale, 'meta.description');
  if (typeof title === 'string') document.title = title;
  if (typeof description === 'string') document.querySelector('meta[name="description"]')?.setAttribute('content', description);

  try {
    localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // Ignore storage errors.
  }

  document.dispatchEvent(new CustomEvent('locale-changed', { detail: { locale } }));
}

declare global {
  interface Window {
    __portfolioTranslations?: Readonly<Record<Locale, Record<string, unknown>>>;
  }
}

export function initI18n(translations: Readonly<Record<Locale, Record<string, unknown>>>) {
  window.__portfolioTranslations = translations;

  const apply = () => setLocale(getLocale());
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply, { once: true });
  else apply();

  document.querySelector('[data-language-toggle]')?.addEventListener('click', () => {
    setLocale(getLocale() === 'en' ? 'es' : 'en');
  });
}
