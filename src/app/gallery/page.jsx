'use client'

import React from "react";
import classes from "./gallery.module.css";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";

import image1 from "../../../public/images/gallery/gallery image 1.jpg";
import image2 from "../../../public/images/gallery/gallery image 2.jpg";
import image3 from "../../../public/images/gallery/gallery image 3.jpg";
import image4 from "../../../public/images/gallery/gallery image 4.jpg";
import image5 from "../../../public/images/gallery/gallery image 5.jpg";
import image6 from "../../../public/images/gallery/gallery image 6.jpg";
import image7 from "../../../public/images/gallery/gallery image 7.jpg";

const GalleryPage = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.wrapper}>
      <div className={classes.block}>
        <Link href="/residential-design">{t('galleryMain.residentialObjects')}</Link>
        <p>
          {t('galleryMain.residentialDescription')}
        </p>
      </div>
      <div className={classes.block}>
        <Image src={image1} alt={t('galleryMain.image1Alt')} />
      </div>
      <div className={classes.block}>
        <Image src={image2} alt={t('galleryMain.image2Alt')} />
      </div>
      <div className={classes.block}>
        <Image src={image3} alt={t('galleryMain.image3Alt')} />
      </div>
      <div className={classes.block}>
        <Image src={image4} alt={t('galleryMain.image4Alt')} />
      </div>
      <div className={classes.block}>
        <Link href="/commercial-objects">{t('galleryMain.commercialObjects')}</Link>
        <p>
          {t('galleryMain.commercialDescription')}
        </p>
      </div>
      <div className={classes.block}>
        <Image src={image5} alt={t('galleryMain.image5Alt')} />
      </div>
      <div className={classes.mobileBlock}>
        <Image src={image7} alt={t('galleryMain.image7Alt')} />
      </div>
      <div className={classes.block}>
        <Link href="/extra">{t('galleryMain.extra')}</Link>
        <p className={classes.centered}>
          {t('galleryMain.exhibitions')}
        </p>
        <Link href="/design-in-progress" className={classes.last}>
          {t('galleryMain.inProgress')}
        </Link>
      </div>
      <div className={classes.block}>
        <Image src={image6} alt={t('galleryMain.image6Alt')} />
      </div>
    </div>
  );
};

export default GalleryPage;
