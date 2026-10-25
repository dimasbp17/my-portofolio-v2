import { useSyncExternalStore } from 'react';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';
const listeners = new Set<() => void>();

// class awal sudah dipasang script di index.html biar tidak kedip
const getTheme = (): Theme =>
  document.documentElement.classList.contains('dark') ? 'dark' : 'light';

const setTheme = (theme: Theme) => {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // localStorage bisa diblokir browser
  }
  listeners.forEach((l) => l());
};

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

export const useTheme = () => {
  const theme = useSyncExternalStore(subscribe, getTheme);
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  return { theme, toggleTheme };
};
