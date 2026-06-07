import { en } from "./en";
import { ar } from "./ar";
export { en, ar };
export type { Translations } from "./ar";
export type Locale = "en" | "ar";
export function getT(locale: Locale) {
  return locale === "ar" ? ar : en;
}
