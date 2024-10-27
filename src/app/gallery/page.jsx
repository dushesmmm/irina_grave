import React from "react";
import classes from "./gallery.module.css";
import Link from "next/link";
import Image from "next/image";

import image1 from "../../../public/images/gallery/gallery image 1.jpg";
import image2 from "../../../public/images/gallery/gallery image 2.jpg";
import image3 from "../../../public/images/gallery/gallery image 3.jpg";
import image4 from "../../../public/images/gallery/gallery image 4.jpg";
import image5 from "../../../public/images/gallery/gallery image 5.jpg";
import image6 from "../../../public/images/gallery/gallery image 6.jpg";
import image7 from "../../../public/images/gallery/gallery image 7.jpg";

const galleryPage = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.block}>
        <Link href='/residential-design'>жилые объекты</Link>
        <p>
        Реализовано 30+ жилых объектов в России. <br />
        Работа над проектом ведется под ключ, начиная от разработки концепции интерьера до её полного воплощения с подбором искусства и аксессуаров. 
        </p>
      </div>
      <div className={classes.block}>
        <Image src={image1} alt='изображение 1' />
      </div>
      <div className={classes.block}>
        <Image src={image2} alt='изображение 2' />
      </div>
      <div className={classes.block}>
        <Image src={image3} alt='изображение 3' />
      </div>
      <div className={classes.block}>
        <Image src={image4} alt='изображение 4' />
      </div>
      <div className={classes.block}>
        <Link href='/coming-soon'>коммерческие объекты</Link>
        <p>
        Реализованы офисы, салоны красоты, бутик. <br />
        При работе над проектом учитывается персональная стилистка бренда и вид деятельности компании. 
        </p>
      </div>
      <div className={classes.block}>
        <Image src={image5} alt='изображение 5' />
      </div>
      <div className={classes.mobileBlock}>
        <Image src={image7} alt='изображение 6' />
      </div>
      <div className={classes.block}>
        <Link href='/extra'>extra</Link>
        <p className={classes.centered}>
          Участие в выставках и общественных проектах.
        </p>
        <Link href='/design-in-progress' className={classes.last}>
          объекты<br/> в работе
        </Link>
      </div>
      <div className={classes.block}>
        <Image src={image6} alt='изображение 6' />
      </div>
    </div>
  );
};

export default galleryPage;
