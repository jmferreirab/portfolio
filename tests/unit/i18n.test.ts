import { describe, it, expect } from 'vitest';
import { useTranslations, type Locale } from '../../src/i18n/ui';

describe('i18n utilities', () => {
  it('should return English translations for "en" locale', () => {
    const translations = useTranslations('en' as Locale);
    expect(translations.role).toBe('Senior Software Engineer');
  });

  it('should return Spanish translations for "es" locale', () => {
    const translations = useTranslations('es' as Locale);
    expect(translations.role).toBe('Ingeniero de Software Senior');
  });

  it('should fallback to English for unsupported locales', () => {
    // @ts-expect-error: testing runtime fallback for invalid locale
    const translations = useTranslations('fr');
    expect(translations.role).toBe('Senior Software Engineer');
  });
});
