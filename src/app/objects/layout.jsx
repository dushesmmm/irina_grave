import { Inter } from "next/font/google";
import Header from "../UI/header/Header";
import Footer from "../UI/footer/Footer";
import { Playfair_Display_SC } from "next/font/google";
import PhotoDescription from "../UI/PhotoDescription/PhotoDescription";
import Brands from "../UI/brands/Brands";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

const playfair = Playfair_Display_SC({
  subsets: ['cyrillic', 'latin'],
  weight: '400',
  variable: '--font-playfair',
  display: 'swap'
})

export const metadata = {
  title: "Irina Grave",
  description: "COMING SOON",
  icon: './favicon.ico',
  openGraph: {
    title: 'Irina Grave',
    description: 'COMING SOON',
    url: 'https://irinagrave.ru',
    siteName: 'irinagrave.ru',
    images: [
      {
        url: 'https://s3-alpha-sig.figma.com/img/950c/5741/892f16b668fed0a2b73de5196e4f9755?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OloRhCNspV7dd2U5D0xU~0RPvA~SFPOU5OO7LUIPC9AcXWf71Jn3LpmQI~vvyUort81M86kNW625iOiAVnbSppqIgFD3Dx4Z7OQfO-HBCP2Pyz7h~n3UVFRhXSGdQZt4UfnJSwBdnuYDIZ2BneKcyBrzWwhEBziPKFJFDA26QdBOVhlfKwZC1xO~wr5XqPYkoIrj439IHPlQ~U74aBiYtbg87hhGaN-OOuYYAms2yrJkZP8pzrGZ29dTLgZqo0DoxljkOQGZUOEXyVoAzq4kH-ZDQiJTDNe2fWUGoEmOMYgnAVrAE~5pxRDABrJw-QkkOPXwqdHR1zaW5x~mYXF0RA__',
        width: 800,
        height: 600,
      },
      {
        url: 'https://s3-alpha-sig.figma.com/img/950c/5741/892f16b668fed0a2b73de5196e4f9755?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OloRhCNspV7dd2U5D0xU~0RPvA~SFPOU5OO7LUIPC9AcXWf71Jn3LpmQI~vvyUort81M86kNW625iOiAVnbSppqIgFD3Dx4Z7OQfO-HBCP2Pyz7h~n3UVFRhXSGdQZt4UfnJSwBdnuYDIZ2BneKcyBrzWwhEBziPKFJFDA26QdBOVhlfKwZC1xO~wr5XqPYkoIrj439IHPlQ~U74aBiYtbg87hhGaN-OOuYYAms2yrJkZP8pzrGZ29dTLgZqo0DoxljkOQGZUOEXyVoAzq4kH-ZDQiJTDNe2fWUGoEmOMYgnAVrAE~5pxRDABrJw-QkkOPXwqdHR1zaW5x~mYXF0RA__',
        width: 1800,
        height: 1600,
        alt: 'COMING SOON',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='ru'>
      <body className={`${inter.variable} ${playfair.variable}`}>
      <Header dark={true} />
        {children}
      <Footer />
      </body>
    </html>
  );
}
