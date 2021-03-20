import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { TRANSLATIONS_TR, TRANSLATIONS_EN } from "./languages";

export function changeLanguage(language = "en") {
  i18n.changeLanguage(language);
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: ["navigator"],
    },
    fallbackLng: "en",
    whitelist: ["tr", "en"],
    resources: {
      en: {
        translation: TRANSLATIONS_EN,
      },
      tr: {
        translation: TRANSLATIONS_TR,
      },
    },
  });
