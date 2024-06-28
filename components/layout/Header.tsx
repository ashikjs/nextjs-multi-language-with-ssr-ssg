import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

export default function Header({lang}: any) {
  return (
    <>
      <LanguageSwitcher lang={lang}/>
    </>
  );
}
