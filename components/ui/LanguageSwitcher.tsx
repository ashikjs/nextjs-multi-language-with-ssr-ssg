'use client'

import {usePathname, useRouter, useSearchParams} from 'next/navigation'

const languages = [
  {code: 'en', label: 'English'},
  {code: 'es', label: 'Español'},
  {code: 'zh', label: '中文'},
];

export default function LanguageSwitcher({lang}: any) {
  const router = useRouter();
  const pathname = usePathname()

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = event.target.value;
    const path = pathname.split('/').slice(2).join('/');
    router.push(`/${newLang}/${path}`);
  };

  return (
    <select value={lang} onChange={handleChange}>
      {languages.map((language) => (
        <option key={language.code} value={language.code}>
          {language.label}
        </option>
      ))}
    </select>
  );
}
