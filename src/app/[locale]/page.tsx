import Cooperation from "@/components/Cooperation";
import Rooms from "@/components/Rooms";
import { Metadata } from "next";

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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    }
  }
};

export default function Home() {
  return (
    <main className="container mx-auto mt-5">
      <Rooms/>
      <Cooperation/>
    </main>
  );
}
