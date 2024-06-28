
interface PageProps {
  params: {
    lang: string;
  };
}

export default function Home({ params: { lang } }: PageProps) {
    return (
      <section>
        <h2>About Page Lang: {lang}</h2>
      </section>
    );
}
