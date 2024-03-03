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
    siteName: "Online Store",
    type: "website",
  },
  keywords:["hostel", "хостел", "house", "osh", "Osh", "Ош", "uyut house osh hostel", "Гостиница", "квартира", "hotel", "guest house"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <meta name="google-site-verification" content="M0w3Yyft_ONe2sw-GrSkFiYt1TrfyM9Pte5G1sUY5xE" />
      <body className={inter.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
