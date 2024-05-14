import { useRouter } from "next/router";
import { residentialDesignPages } from "../api/data/rdp";
import Error from "next/error";
import Image from "next/image";
import Header from "@/app/UI/header/Header";
import Footer from "@/app/UI/footer/Footer";
import classes from './rdp.module.css'

const Pr = () => {
  const router = useRouter();

  const urls = residentialDesignPages.map((page) => page.name);

  const names = urls.map((url) => {
    const parts = url.split("/");
    return parts[parts.length - 1];
  });

  const isNameValid = names.includes(router.query.name);

  const index = names.indexOf(router.query.name);
  let matchedObject;
  if (index !== -1) {
    matchedObject = residentialDesignPages[index];
    console.log("Объект с индексом", index, ":", matchedObject);
  } else {
    console.log("Совпадений не найдено.");
  }

  if (!isNameValid) {
    return <Error statusCode={404} />;
  }

  return (
        <div className={classes.wrapper}>
        <Header />
        {matchedObject && (
          <div>
            <h1>{matchedObject.title}</h1>
            <p>{matchedObject.description}</p>
            <Image src={matchedObject.mainImage} />
            <p>{matchedObject.category}</p>
          </div>
        )}
        <Footer />
      </div>
  );
};

export default Pr;
