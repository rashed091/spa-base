import en from './en-US';
import bn from './bn-BD';

export function getDict(locale) {
  if (locale === 'en') {
    return en;
  }
  return bn;
}

export default {
  en: en,
  zh: bn
};
