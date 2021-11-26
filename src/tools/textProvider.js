
import en_texts from '../data/lang_en.json';
import fi_texts from '../data/lang_fi.json';

export const getTextsByLang = (lang = 'en') => {
  return lang === 'fi' ? fi_texts : en_texts;
};