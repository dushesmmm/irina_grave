import { Inter } from "next/font/google";
import Header from "../UI/header/Header";
import PhotoDescription from "../UI/PhotoDescription/PhotoDescription";
import Brands from "../UI/brands/Brands";

export const metadata = {
  title: "Irina Grave",
  description:
    "Ирина Граве - дипломированный дизайнер, с отличием окончила школу «Детали». Занимается дизайном частных и общественных интерьеров. В основе её работы над каждым проектом лежит архитектура пространства и специфика образа жизни конкретного заказчика. Ирина ведет авторский надзор за осуществлением ремонтно-строительных работ. Все проекты осуществляются 'под ключ' : начиная от планировочных решений и заканчивая подбором текстиля и аксессуаров.",
  icon: "./favicon.ico",
  openGraph: {
    title: "Irina Grave",
    description:
      'Ирина Граве - дипломированный дизайнер, с отличием окончила школу «Детали». Занимается дизайном частных и общественных интерьеров. В основе её работы над каждым проектом лежит архитектура пространства и специфика образа жизни конкретного заказчика. Ирина ведет авторский надзор за осуществлением ремонтно-строительных работ. Все проекты осуществляются "под ключ" : начиная от планировочных решений и заканчивая подбором текстиля и аксессуаров.',
    url: "https://irinagrave.ru",
    siteName: "irinagrave.ru",
    images: [
      {
        url: "https://s3-alpha-sig.figma.com/img/f623/c076/3e44f1f94c12c84dfbd59bdf89427ba3?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kSJZiA2KVMKAC~eNEV7I29PwqHhGi7wXuCK3NLBKOeTg0U16V7lvr7H1kqNrDh5sM3-tgXRUbRb96sI4DjKymwSp9SeYLQ7QMtJY0KSmOXXMlgxVHjgcipX17MwDaBpplTiMH6gD66lyRatQ85p~LMWlP4ATQdbf7NN4G7SaOW~XBTSI4cTPun23KnzPhXyLhO9uYXLAtPdZ7PZo07iliODCmjshYnrOFYqDytmQezxU9bAFcOTbDZIR7sp9UEXu5bhiUk4FAHhg04PmM57UW5rBxYSvvMd~aQRp3bCwtn6XsKx2bchOPuysvS2gyeZiMAC3UM5VSSp6XAnE9GBegQ__",
        width: 800,
        height: 600,
      },
      {
        url: "https://s3-alpha-sig.figma.com/img/f623/c076/3e44f1f94c12c84dfbd59bdf89427ba3?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kSJZiA2KVMKAC~eNEV7I29PwqHhGi7wXuCK3NLBKOeTg0U16V7lvr7H1kqNrDh5sM3-tgXRUbRb96sI4DjKymwSp9SeYLQ7QMtJY0KSmOXXMlgxVHjgcipX17MwDaBpplTiMH6gD66lyRatQ85p~LMWlP4ATQdbf7NN4G7SaOW~XBTSI4cTPun23KnzPhXyLhO9uYXLAtPdZ7PZo07iliODCmjshYnrOFYqDytmQezxU9bAFcOTbDZIR7sp9UEXu5bhiUk4FAHhg04PmM57UW5rBxYSvvMd~aQRp3bCwtn6XsKx2bchOPuysvS2gyeZiMAC3UM5VSSp6XAnE9GBegQ__",
        width: 1800,
        height: 1600,
        alt: "Irina ",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
};

export default function about({ children }) {
  return (
    <div>
      <Header />
      <PhotoDescription showLink={false} />
      <Brands />
      {children}
    </div>
  );
}
