import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import { content, type Lang } from '@/data/content';

const STORAGE_KEY = 'lang';

const getSavedLang = (): Lang => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'id' || saved === 'en') return saved;
  } catch {
    // localStorage bisa diblokir browser
  }
  return 'id';
};

i18n.use(initReactI18next).init({
  // teks diambil dari data/content.ts, i18next cuma ngatur bahasa aktif
  resources: { id: {}, en: {} },
  lng: getSavedLang(),
  fallbackLng: 'id',
  interpolation: { escapeValue: false },
});

document.documentElement.lang = i18n.language;

i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
  try {
    localStorage.setItem(STORAGE_KEY, lng);
  } catch {
    // abaikan
  }
});

// ambil konten sesuai bahasa aktif
export const useContent = () => {
  const { i18n } = useTranslation();
  const lang: Lang = i18n.language === 'en' ? 'en' : 'id';
  const toggleLang = () => i18n.changeLanguage(lang === 'id' ? 'en' : 'id');
  return { t: content[lang], lang, toggleLang };
};

export default i18n;
