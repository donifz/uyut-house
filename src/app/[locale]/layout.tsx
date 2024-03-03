import type { Metadata } from "next";
import { Philosopher} from "next/font/google";
import '@/styles/globals.css'
import Layout from "../../components/Layout";

const inter = Philosopher({
  subsets: ["latin", "cyrillic"],
  weight: ["400","700"]
});

export const metadata: Metadata = {
  title: "Уют хаус хостел",
  description: "Остановитесь у нас и почувствуйте себя как дома",
  icons: {
    shortcut: '/static/favicons/favicon.ico'
  },
  openGraph: {
    title: "Уют хаус хостел",
    description: "Остановитесь у нас и почувствуйте себя как дома",
    siteName: "Uyut house hostel",
    type: "website",
  },
  keywords:["hostel", "хостел", "house", "osh", "Osh", "Ош", "uyut house osh hostel", "Гостиница", "квартира", "hotel", "guest house", "бронирование номеров", "дружелюбный персонал", "уютные номера"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <meta name="google-site-verification" content="M0w3Yyft_ONe2sw-GrSkFiYt1TrfyM9Pte5G1sUY5xE" />
      <meta name="author" content="Уют хаус хостел"/>
      <meta name="robots" content="index, follow"/>
      <meta name="revisit-after" content="7 days"/>
      <meta name="distribution" content="global"/>
      <meta name="rating" content="general"/>
      <meta name="geo.placename" content="Osh"/>
      <meta name="geo.region" content="KG"/>

      <body className={inter.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
