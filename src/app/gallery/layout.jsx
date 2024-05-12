import Header from "../UI/header/Header";

export const metadata = {
  title: "Irina Grave - Gallery",
  description: "Ирина Граве - галерея проектов",
  icon: "./favicon.ico",
  openGraph: {
    title: "Irina Grave - Gallery",
    description: "Ирина Граве - галерея проектов",
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
        alt: "Irina Grave",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
};

export default function projects({ children }) {
  return (
    <div>
      <Header dark={true} />
      {children}
    </div>
  );
}
