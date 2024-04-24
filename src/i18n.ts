import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import pl from "./locales/pl/translation.json";
import en from "./locales/en/translation.json";

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    debug: true,
    react: {
      transEmptyNodeValue: "",
    },
    returnNull: false,
    returnEmptyString: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
        en: {
            translation: en
        },
        pl: {
            translation: pl
        }
      }
  });


export default i18n;