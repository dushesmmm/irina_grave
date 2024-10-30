"use client";

import React, { useState, useEffect } from "react";
import classes from "./page.module.css";
import Image from "next/image";
import Header from "./UI/header/Header";

import mainImage1 from "../../public/images/main page/main image 1.jpg";
import mainImage2 from "../../public/images/main page/main image 2.jpg";
import mainImage3 from "../../public/images/main page/main image 3.jpg";
import mainImage4 from "../../public/images/main page/main image 4.jpg";
import mainImage5 from "../../public/images/main page/main image 5.jpg";
import mainImage6 from "../../public/images/main page/main image 6.jpg";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import Brands from "./UI/brands/Brands";
import PhotoDescription from "./UI/PhotoDescription/PhotoDescription";
import Link from "next/link";

const MainImage = ({ image, currentIndex, targetIndex }) => {
  const isVisible = currentIndex === targetIndex;

  return (
    <div className={`${classes.mainImage} ${isVisible ? classes.visible : ""}`}>
      <Image src={image} alt='Main Image' width={850} height={1000} />
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

const Links = ({ links, currentIndex, targetIndex }) => {
  const isVisible = currentIndex === targetIndex;

  return (
    <a href='/gallery' className={`${classes.links} ${isVisible ? classes.visible : ""}`}>
      перейти в галлерею проектов
    </a>
  );
};

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [targetIndex, setTargetIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const images = [
    mainImage1,
    mainImage2,
    mainImage3,
    mainImage4,
    mainImage5,
    mainImage6,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: {
      perView: 4,
      spacing: 15,
    },
    loop: true,
  });

  const descriptions = [
    "Этот проект поражает масштабом: два уровня, 470 кв. метров и более 1000 кв. метров — площадь террас. Дизайнер Ирина Граве детально, с любовью проработала обширное пространство, показав высокий уровень мастерства.",
    "«Я стремилась создать легкий, светлый, воздушный интерьер, отражающий мой стиль. Дом, в котором можно отдыхать от ежедневной работы над другими проектами и разместить семейную коллекцию искусства. Важно было так продумать дизайн, чтобы не захотелось ничего переделывать через короткое время»",
    '«Заказчик — молодой человек, живущий на две страны: получив образование во Франции, он проводит там много времени. Именно поэтому ему близка эстетика французского коллекционного дизайна, чему я была несказанно рада!"',
    "Хозяева этой квартиры долго прожили в Америке — сначала учеба, потом стажировки. После возвращения в Москву муж и жена — специалист в области IT и юрист — искали квартиру в новом доме. Пока длились поиски, они обращались к декоратору Ирине Граве за советами по обстановке съемной квартиры. Окончательный выбор новостройки они сделали вместе, чтобы максимально раскрыть потенциал квартиры.",
    "«Мы с заказчиком осмотрели квартиру, когда дом не был сдан, поднимались в касках на строительном лифте. Потом вместе принимали объект. А затем он объявил, что не хочет наблюдать за ремонтом и войдет в квартиру, когда она будет полностью завершена. Сказал: «Делай, как считаешь нужным. Но так, чтобы было красиво и мне понравилось».",
    "Заказчики хотели светлый, нежный интерьер, но в тоже время без явных феминных черт. Паре с двумя детьми было важно получить пространство с гардеробными, ванными и спальнями для каждого члена семьи. В интерьере Ирина использовала разнообразные геометрические акценты — в гипсовой лепнине, орнаменте мраморных полов, узоре паркета.",
  ];

  const titles = [
    "Московский пентхаус 470 кв. метров",
    "Квартира дизайнера Ирины Граве на Пресне",
    "Светлая квартира 65 кв. метров в Москве",
    "Квартира в Москве в черно-белой гамме",
    "Эклектичная квартира в Москве",
    "Московская квартира 250 м² в духе ар-деко",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTargetIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);
    return () => clearInterval(interval);
  }, []);

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
      <div className={classes.gif}>
      </div>
      <PhotoDescription showLink={true} />
      <div className={classes.banner}>
        <p>
          "МНЕ КАЖЕТСЯ, ЧТО ХОРОШИЙ ВКУС — ЭТО ВСЕ-ТАКИ ВТОРОСТЕПЕННАЯ ВЕЩЬ.
          ГЛАВНОЕ — СУПЕРСИЛА ВИДЕТЬ ПРЕКРАСНОЕ В ОБЫДЕННОМ ИЛИ ДАЖЕ В
          НЕПРЕКРАСНОМ."
        </p>
      </div>
      <Brands />
      <div className={classes.galleryContainer}>
        <div className={classes.descriptionSection}>
          <Title
            titles={titles}
            currentIndex={currentIndex}
            targetIndex={targetIndex}
          />
          <Description
            descriptions={descriptions}
            currentIndex={currentIndex}
            targetIndex={targetIndex}
          />
          <Links 
            currentIndex={currentIndex}
            tergetIndex={targetIndex}
          />
          <div className={classes.bottomSection}>
            <div ref={sliderRef} className={classes.smallImagesContainer}>
              {images.map((image, idx) => (
                <div
                  className='keen-slider__slide'
                  key={idx}
                  onClick={() => handleImageClick(idx)}
                >
                  <Image
                    key={idx}
                    src={image}
                    alt={`картинка ${startIndex + idx}`}
                    width={205}
                    height={275}
                    className={`${classes.smallImage} ${
                      currentIndex === startIndex + idx
                        ? classes.highlighted
                        : ""
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
