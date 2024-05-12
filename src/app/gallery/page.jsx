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

const galleryPage = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.block}>
        <Link href='/residential-design'>жилые объекты</Link>
        <p>
          Этот проект поражает масштабом: два уровня, 470 кв. метров и более
          1000 кв. метров — площадь террас. Дизайнер Ирина Граве детально, с
          любовью проработала обширное пространство, показав высокий уровень
          мастерства. 
        </p>
      </div>
      <div className={classes.block}>
        <Image src={image1} alt='изображение 1' />
      </div>
      <div className={classes.block}><Image src={image2} alt='изображение 2' /></div>
      <div className={classes.block}><Image src={image3} alt='изображение 3' /></div>
      <div className={classes.block}><Image src={image4} alt='изображение 4' /></div>
      <div className={classes.block}>
        <Link href='/coming-soon'>коммерческие объекты</Link>
        <p>
          Этот проект поражает масштабом: два уровня, 470 кв. метров и более
          1000 кв. метров — площадь террас. Дизайнер Ирина Граве детально, с
          любовью проработала обширное пространство, показав высокий уровень
          мастерства. 
        </p>
      </div>
      <div className={classes.block}><Image src={image5} alt='изображение 5' /></div>
      <div className={classes.block}>
      <Link href='/coming-soon'>коммерческие объекты</Link>
        <p>
          Этот проект поражает масштабом: два уровня, 470 кв. метров и более
          1000 кв. метров — площадь террас. Дизайнер Ирина Граве детально, с
          любовью проработала обширное пространство, показав высокий уровень
          мастерства. 
        </p>
        <Link href='/extra' className={classes.last}>extra</Link>
      </div>
      <div className={classes.block}><Image src={image6} alt='изображение 6' /></div>
    </div>
  );
};

export default galleryPage;
