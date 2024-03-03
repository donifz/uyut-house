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
      <body className={inter.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
