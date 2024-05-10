import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./UI/header/Header";
import Footer from "./UI/footer/Footer";
import { Playfair_Display_SC } from "next/font/google";
import PhotoDescription from "./UI/PhotoDescription/PhotoDescription";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

const playfair = Playfair_Display_SC({
  subsets: ['cyrillic', 'latin'],
  weight: '400',
  variable: '--font-playfair',
  display: 'swap'
})

export const metadata = {
  title: "Irina Grave",
  description: "Luxury Interior Design Studio",
  icon: './favicon.ico',
  openGraph: {
    title: 'Irina Grave',
    description: 'Luxury Interior Design Studio',
    url: 'https://irinagrave.ru',
    siteName: 'irinagrave.ru',
    images: [
      {
        url: 'https://s3-alpha-sig.figma.com/img/f623/c076/3e44f1f94c12c84dfbd59bdf89427ba3?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kSJZiA2KVMKAC~eNEV7I29PwqHhGi7wXuCK3NLBKOeTg0U16V7lvr7H1kqNrDh5sM3-tgXRUbRb96sI4DjKymwSp9SeYLQ7QMtJY0KSmOXXMlgxVHjgcipX17MwDaBpplTiMH6gD66lyRatQ85p~LMWlP4ATQdbf7NN4G7SaOW~XBTSI4cTPun23KnzPhXyLhO9uYXLAtPdZ7PZo07iliODCmjshYnrOFYqDytmQezxU9bAFcOTbDZIR7sp9UEXu5bhiUk4FAHhg04PmM57UW5rBxYSvvMd~aQRp3bCwtn6XsKx2bchOPuysvS2gyeZiMAC3UM5VSSp6XAnE9GBegQ__',
        width: 800,
        height: 600,
      },
      {
        url: 'https://s3-alpha-sig.figma.com/img/f623/c076/3e44f1f94c12c84dfbd59bdf89427ba3?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kSJZiA2KVMKAC~eNEV7I29PwqHhGi7wXuCK3NLBKOeTg0U16V7lvr7H1kqNrDh5sM3-tgXRUbRb96sI4DjKymwSp9SeYLQ7QMtJY0KSmOXXMlgxVHjgcipX17MwDaBpplTiMH6gD66lyRatQ85p~LMWlP4ATQdbf7NN4G7SaOW~XBTSI4cTPun23KnzPhXyLhO9uYXLAtPdZ7PZo07iliODCmjshYnrOFYqDytmQezxU9bAFcOTbDZIR7sp9UEXu5bhiUk4FAHhg04PmM57UW5rBxYSvvMd~aQRp3bCwtn6XsKx2bchOPuysvS2gyeZiMAC3UM5VSSp6XAnE9GBegQ__',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${playfair.variable}`}>
          {children}
        <Footer />
        </body>
    </html>
  );
}
