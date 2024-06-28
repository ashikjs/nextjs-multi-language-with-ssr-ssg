import {getDictionary} from './dictionaries';

interface PageProps {
  params: {
    lang: string;
  };
}

export default async function Home({params: {lang}}: PageProps) {
  const dict = await getDictionary(lang);
  return (
    <section>
      <h2>Page Lang: {dict.welcome}</h2>
    </section>
  )
}
