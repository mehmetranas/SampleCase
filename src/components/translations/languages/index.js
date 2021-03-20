import tr from "./tr.json";
import en from "./en.json";

// // Antd Locale
// import deDe from "antd/lib/locale/de_DE";
// import enUs from "antd/lib/locale/en_US";

// Flags
import germany from "../../../assets/images/turkey.svg";
import unitedKingdom from "../../../assets/images/united-kingdom.svg";

export const TRANSLATIONS_EN = en;
export const TRANSLATIONS_TR = tr;

export const LanguagesImplementations = [
  { flag: germany, value: "tr" },
  { flag: unitedKingdom, value: "en" },
];
