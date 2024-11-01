import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from '../../public/locales/ru/common.json';
import en from '../../public/locales/en/common.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      ru: {
        translation: ru,
      },
    },
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
