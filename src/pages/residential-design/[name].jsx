import { useState } from "react";
import { useRouter } from "next/router";
import { residentialDesignPages } from "../api/data/rdp";
import Error from "next/error";
import Image from "next/image";
import Header from "@/app/UI/header/Header";
import Footer from "@/app/UI/footer/Footer";
import classes from "./rdp.module.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import arrow from '../../../public/images/arrow-project-switcher.svg'
import galleryArrow from '../../../public/images/gallery-arrow.svg'
import galleryCross from '../../../public/images/gallery-cross.svg'

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
  }

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 6,
      spacing: 20
    },
    loop: true
  });

  if (!isNameValid) {
    return <Error statusCode={404} />;
  }

  const openModal = (index) => {
    setActiveImage(index);
    setIsModalOpen(true);
  };

  const closeModal = (e) => {
    if (e.target.classList.contains(classes.modal)) {
      setIsModalOpen(false);
      setActiveImage(null);
    }
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveImage((prev) => (prev + 1) % matchedObject.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveImage((prev) =>
      prev === 0 ? matchedObject.images.length - 1 : prev - 1
    );
  };

  // Function to navigate to the next project
  const goToNextProject = () => {
    const nextIndex = (index + 1) % residentialDesignPages.length;
    router.push({
      pathname: "/residential-design/[name]",
      query: { name: names[nextIndex] },
    });
  };

  // Function to navigate to the previous project
  const goToPreviousProject = () => {
    const prevIndex =
      index === 0 ? residentialDesignPages.length - 1 : index - 1;
    router.push({
      pathname: "/residential-design/[name]",
      query: { name: names[prevIndex] },
    });
  };

  return (
    <div>
      <Header />
      {matchedObject && (
        <>
          <div className={classes.wrapper}>
            <h1 className={classes.title}>{matchedObject.title}</h1>
            <h2 className={classes.category}>{matchedObject.category}</h2>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image
                className={classes.mainImage}
                src={matchedObject.mainimage}
                alt={matchedObject.title}
              />
            </div>
            <div className={classes.mainDescription}>
              <p>{matchedObject.description}</p>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div ref={sliderRef} className="keen-slider" style={{ width: 1300 }}>
              {matchedObject.images.map((image, idx) => (
                <div
                  className="keen-slider__slide"
                  key={idx}
                  onClick={() => openModal(idx)}
                >
                  <Image
                    src={image}
                    alt={`Slide ${idx}`}
                    className={`${classes.slideImage} `}
                  />
                </div>
              ))}
            </div>
          </div>

          {isModalOpen && (
            <div className={classes.modal} onClick={closeModal}>
              <Image className={classes.prevButton} onClick={prevImage} src={galleryArrow} />
              <Image
                src={matchedObject.images[activeImage]}
                alt={`Image ${activeImage}`}
                className={classes.fullscreenImage}
              />
              <Image className={classes.nextButton} onClick={nextImage} src={galleryArrow} />
              <Image
                className={classes.closeButton}
                src={galleryCross}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(false);
                }}
              >
              </Image>
            </div>
          )}

          {/* Next and Previous Project Buttons */}
          <div className={classes.navigationButtons}>
            <div className={classes.prevProjectButton} onClick={goToPreviousProject}>
              <Image className={classes.arrowProjectButtonPrevious} src={arrow} />
              <div className={classes.projectButtonText}>
              <div >{residentialDesignPages[(index - 1 + residentialDesignPages.length) % residentialDesignPages.length].title}</div>
              <div>Предыдущий проект</div>
              </div>
            </div>
            <div className={classes.nextProjectButton} onClick={goToNextProject}>
             <Image className={classes.arrowProjectButtonNext} src={arrow} />
              <div className={classes.projectButtonText}>
                <div>{residentialDesignPages[(index + 1) % residentialDesignPages.length].title}</div>
                <div>Следующий проект</div>
             </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Pr;
