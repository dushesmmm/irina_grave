import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./UI/header/Header";
import Footer from "./UI/footer/Footer";
import { Playfair_Display_SC } from "next/font/google";

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${playfair.variable}`}>
      <Header />
        {children}
      <Footer />
        </body>
    </html>
  );
}
