"use client";

import React, { useState, useEffect } from "react";
import classes from "./page.module.css";
import Image from "next/image";
import Header from "./UI/header/Header";
import { useTranslation } from "react-i18next";

import mainImage1 from "../../public/images/main page/main image 1.jpg";
import mainImage2 from "../../public/images/main page/main image 2.jpg";
import mainImage3 from "../../public/images/main page/main image 3.jpg";
import mainImage4 from "../../public/images/main page/main image 4.jpg";
import mainImage5 from "../../public/images/main page/main image 5.jpg";
import mainImage6 from "../../public/images/main page/main image 6.jpg";

import Brands from "./UI/brands/Brands";
import PhotoDescription from "./UI/PhotoDescription/PhotoDescription";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Link from "next/link";

const MainImage = ({ image, currentIndex, targetIndex }) => {
  const isVisible = currentIndex === targetIndex;
  return (
    <div className={`${classes.mainImage} ${isVisible ? classes.visible : ""}`}>
      <Image src={image} alt="Main Image" width={850} height={1000} />
    </div>
  );
};

const Description = ({ descriptions, currentIndex, targetIndex }) => {
  const isVisible = currentIndex === targetIndex;
  return (
    <p className={`${classes.description} ${isVisible ? classes.visible : ""}`}>
      {descriptions[currentIndex]}
    </p>
  );
};

const Title = ({ titles, currentIndex, targetIndex }) => {
  const isVisible = currentIndex === targetIndex;
  return (
    <h1 className={`${classes.title} ${isVisible ? classes.visible : ""}`}>
      {titles[currentIndex]}
    </h1>
  );
};

export default function Home() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [targetIndex, setTargetIndex] = useState(0);

  const images = [mainImage1, mainImage2, mainImage3, mainImage4, mainImage5, mainImage6];
  const titles = t("mainPage.titles", { returnObjects: true });
  const descriptions = t("mainPage.descriptions", { returnObjects: true });

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentIndex(slider.track.details.rel);
    },
    slides: {
      perView: 4,
      spacing: 15,
    },
    loop: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTargetIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex(targetIndex);
    }, 350);
    return () => clearTimeout(timer);
  }, [targetIndex]);

  const handleImageClick = (index) => {
    setTargetIndex(index);
  };

  return (
    <div>
      <Header />
      <div className={classes.gif}></div>
      <PhotoDescription showLink={true} />
      <div className={classes.banner}>
        <p>{t("mainPage.bannerText")}</p>
      </div>
      <Brands />
      <div className={classes.galleryContainer}>
        <div className={classes.descriptionSection}>
          <Title titles={titles} currentIndex={currentIndex} targetIndex={targetIndex} />
          <Description descriptions={descriptions} currentIndex={currentIndex} targetIndex={targetIndex} />
          <Link href="/gallery" className={classes.links}>
            {t("mainPage.galleryLink", "перейти в галерею проектов")}
          </Link>
          <div className={classes.bottomSection}>
            <div ref={sliderRef} className={classes.smallImagesContainer}>
              {images.map((image, idx) => (
                <div
                  className="keen-slider__slide"
                  key={idx}
                  onClick={() => handleImageClick(idx)}
                >
                  <Image
                    src={image}
                    alt={`картинка ${idx + 1}`}
                    width={205}
                    height={275}
                    className={`${classes.smallImage} ${
                      currentIndex === idx ? classes.highlighted : ""
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <MainImage
          image={images[currentIndex]}
          currentIndex={currentIndex}
          targetIndex={targetIndex}
        />
      </div>
    </div>
  );
}
