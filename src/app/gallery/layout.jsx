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
        url: "https://3.downloader.disk.yandex.ru/preview/22c2966fc2048f9fa9f5e51eab40bcadcc1c9d16059feeab3cce5f7b4b954bb8/inf/PjAxIH_LofpgX-OjafGiR3EjVoVXe6fXQRdtR9w2jIB7JBObW5zbYaYv9nSoHXITs5VEzSetV0QkZvOBfCUb4A%3D%3D?uid=1487643918&filename=logo.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1487643918&tknv=v2&size=1264x945'",
        width: 800,
        height: 600,
      },
      {
        url: "https://3.downloader.disk.yandex.ru/preview/22c2966fc2048f9fa9f5e51eab40bcadcc1c9d16059feeab3cce5f7b4b954bb8/inf/PjAxIH_LofpgX-OjafGiR3EjVoVXe6fXQRdtR9w2jIB7JBObW5zbYaYv9nSoHXITs5VEzSetV0QkZvOBfCUb4A%3D%3D?uid=1487643918&filename=logo.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1487643918&tknv=v2&size=1264x945'",
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
