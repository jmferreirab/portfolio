import { describe, it, expect, beforeEach, vi } from 'vitest';
import { isThemeMode, getSavedPreference, savePreference, getEffectiveTheme } from '../../src/scripts/dark-mode';

describe('dark-mode utilities', () => {
  beforeEach(() => {
    vi.clearAllMocks();

    // Mock localStorage
    const localStorageMock = (() => {
      let store: Record<string, string> = {};
      return {
        getItem: vi.fn((key: string) => store[key] || null),
        setItem: vi.fn((key: string, value: string) => {
          store[key] = value.toString();
        }),
        clear: vi.fn(() => {
          store = {};
        }),
        removeItem: vi.fn((key: string) => {
          delete store[key];
        }),
      };
    })();

    vi.stubGlobal('localStorage', localStorageMock);

    // Mock window.matchMedia
    vi.stubGlobal('window', {
      matchMedia: vi.fn().mockImplementation((query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  describe('isThemeMode', () => {
    it('should return true for "light"', () => {
      expect(isThemeMode('light')).toBe(true);
    });

    it('should return true for "dark"', () => {
      expect(isThemeMode('dark')).toBe(true);
    });

    it('should return false for invalid modes', () => {
      expect(isThemeMode('blue')).toBe(false);
      expect(isThemeMode(null)).toBe(false);
      expect(isThemeMode(undefined)).toBe(false);
      expect(isThemeMode(123)).toBe(false);
    });
  });

  describe('getSavedPreference', () => {
    it('should return parsed preference when valid JSON is stored', () => {
      const pref = { mode: 'dark' };
      localStorage.setItem('portfolio-theme-preference', JSON.stringify(pref));
      expect(getSavedPreference()).toEqual(pref);
    });

    it('should return null when storage is empty', () => {
      expect(getSavedPreference()).toBeNull();
    });

    it('should return null when invalid JSON is stored', () => {
      localStorage.setItem('portfolio-theme-preference', 'invalid-json');
      expect(getSavedPreference()).toBeNull();
    });

    it('should return null when JSON is valid but mode is invalid', () => {
      localStorage.setItem('portfolio-theme-preference', JSON.stringify({ mode: 'blue' }));
      expect(getSavedPreference()).toBeNull();
    });
  });

  describe('savePreference', () => {
    it('should save stringified preference to localStorage', () => {
      const pref = { mode: 'light' as const };
      savePreference(pref);
      expect(localStorage.getItem('portfolio-theme-preference')).toBe(JSON.stringify(pref));
    });
  });

  describe('getEffectiveTheme', () => {
    it('should prioritize saved preference over system preference', () => {
      localStorage.setItem('portfolio-theme-preference', JSON.stringify({ mode: 'light' }));

      // Mock system to prefer dark
      (window.matchMedia as any).mockImplementation((query: string) => ({
        matches: true,
      }));

      expect(getEffectiveTheme()).toBe('light');
    });

    it('should return system preference when no saved preference exists', () => {
      // Mock system to prefer dark
      (window.matchMedia as any).mockImplementation((query: string) => ({
        matches: true,
      }));

      expect(getEffectiveTheme()).toBe('dark');
    });

    it('should return light when no preference and system prefers light', () => {
      // Mock system to prefer light
      (window.matchMedia as any).mockImplementation((query: string) => ({
        matches: false,
      }));

      expect(getEffectiveTheme()).toBe('light');
    });
  });
});
