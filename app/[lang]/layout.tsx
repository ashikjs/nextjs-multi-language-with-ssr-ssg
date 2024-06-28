import type {Metadata} from "next";
import {Inter} from "next/font/google";

import "@/styles/app.scss";
import Header from "@/components/layout/Header";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Traveli Nextjs",
  description: "Develop by pakxaros Team",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}

export default function RootLayout({children, params}: RootLayoutProps) {
  return (
    <html lang={params?.lang}>
    <body className={inter.className}>
    <Header lang={params?.lang}/>
    <main>
      {children}
    </main>
    </body>
    </html>
  );
}

export async function generateStaticParams() {
  return [{lang: 'en'}, {lang: 'es'}, {lang: 'zh'}];
}
