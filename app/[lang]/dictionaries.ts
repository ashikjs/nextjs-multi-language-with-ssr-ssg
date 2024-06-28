import 'server-only'

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  es: () => import('./dictionaries/es.json').then((module) => module.default),
  zh: () => import('./dictionaries/zh.json').then((module) => module.default),
};

type Locale = keyof typeof dictionaries;

export const getDictionary = async (locale: string) => {
  const loadDictionary = dictionaries[locale as Locale];
  if (loadDictionary) {
    return loadDictionary();
  }
  // Fallback to default locale if not found
  return dictionaries.en();
};
