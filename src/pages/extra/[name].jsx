import { useState } from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { extra } from '../api/data/extra'
import Error from 'next/error'
import Image from 'next/image'
import Header from '@/app/UI/header/Header'
import Footer from '@/app/UI/footer/Footer'
import classes from './rdp.module.css'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import arrow from '../../../public/images/arrow-project-switcher.svg'
import galleryArrow from '../../../public/images/gallery-arrow.svg'
import galleryCross from '../../../public/images/gallery-cross.svg'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'

const Pr = () => {
  const { t } = useTranslation()

  const router = useRouter()

  const urls = extra.map((page) => page.name)

  const names = urls.map((url) => {
    const parts = url.split('/')
    return parts[parts.length - 1]
  })

  console.log(names)

  const [isLargeScreen, setIsLargeScreen] = useState(false)
  useEffect(() => {
    const updateScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 950)
    }

    updateScreenSize()
    window.addEventListener('resize', updateScreenSize)

    return () => window.removeEventListener('resize', updateScreenSize)
  }, [])

  const isNameValid = names.includes(router.query.name)

  const index = names.indexOf(router.query.name)

  let matchedObject
  if (index !== -1) {
    matchedObject = extra[index]
  }

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeImage, setActiveImage] = useState(null)

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 6,
      spacing: 20,
    },
    loop: true,
  })

  const openModal = (index) => {
    setActiveImage(index)
    setIsModalOpen(true)
  }

  const closeModal = (e) => {
    if (e.target.classList.contains(classes.modal)) {
      setIsModalOpen(false)
      setActiveImage(null)
    }
  }

  const nextImage = (e) => {
    e.stopPropagation()
    setActiveImage((prev) => (prev + 1) % matchedObject.images.length)
  }

  const prevImage = (e) => {
    e.stopPropagation()
    setActiveImage((prev) =>
      prev === 0 ? matchedObject.images.length - 1 : prev - 1
    )
  }

  const goToNextProject = () => {
    const nextIndex = (index + 1) % extra.length
    router.push({
      pathname: '/residential-design/[name]',
      query: { name: names[nextIndex] },
    })
  }

  const goToPreviousProject = () => {
    const prevIndex = index === 0 ? extra.length - 1 : index - 1
    router.push({
      pathname: '/residential-design/[name]',
      query: { name: names[prevIndex] },
    })
  }

  return (
    <div>
      <Head>
        <title>{matchedObject.title}</title>
        <meta name='description' content={matchedObject.description} />
        <link rel='icon' href='/favicon.ico' />
        <meta property='og:title' content={matchedObject.title} />
        <meta property='og:description' content={matchedObject.description} />
        <meta
          property='og:image'
          content='https://opengraph.b-cdn.net/production/images/a6c246ea-7d77-4dd7-a4df-6603902f5783.jpg?token=otlBY0qPOjDMuZuM2f4OLvxqMKme5F5g00USsHyBTIs&height=301&width=649&expires=33272614789'
        />
        <meta property='og:locale' content='ru_RU' />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='irinagrave.ru' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={matchedObject.title} />
        <meta name='twitter:description' content={matchedObject.description} />
        <meta
          name='twitter:image'
          content='https://opengraph.b-cdn.net/production/images/a6c246ea-7d77-4dd7-a4df-6603902f5783.jpg?token=otlBY0qPOjDMuZuM2f4OLvxqMKme5F5g00USsHyBTIs&height=301&width=649&expires=33272614789'
        />
      </Head>
      <Header />
      {matchedObject && (
        <>
          <div className={classes.wrapper}>
            <h1 className={classes.title}>{t(`project${index + 1}.title`)}</h1>
            <h2 className={classes.category}>
              {t(`project${index + 1}.category`)}
            </h2>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Image
                className={classes.mainImage}
                src={matchedObject.mainimage}
                alt={matchedObject.title}
              />
            </div>
            <div className={classes.mainDescription}>
              <p>{t(`project${index + 1}.description`)}</p>
            </div>
          </div>

          {/* Условный рендеринг в зависимости от ширины экрана */}
          <div
            style={{ display: 'flex', justifyContent: 'center' }}
            className={classes.keen}
          >
            {isLargeScreen ? (
              <div ref={sliderRef} className='keen-slider'>
                {matchedObject.images.map((image, idx) => (
                  <div
                    className='keen-slider__slide'
                    key={idx}
                    onClick={() => openModal(idx)}
                  >
                    <Image
                      src={image}
                      alt={`Slide ${idx}`}
                      className={`${classes.slideImage}`}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className={classes.imagesGrid}>
                {matchedObject.images.map((image, idx) => (
                  // <div
                  //

                  //   className={classes.imageColumn}
                  // >
                  <Image
                    src={image}
                    key={idx}
                    onClick={() => openModal(idx)}
                    alt={`Slide ${idx}`}
                    className={classes.imageItem}
                  />
                  // </div>
                ))}
              </div>
            )}
          </div>

          {isModalOpen && (
            <div className={classes.modal} onClick={closeModal}>
              <Image
                className={classes.prevButton}
                onClick={prevImage}
                src={galleryArrow}
                alt='arrow prev'
              />
              <Image
                src={matchedObject.images[activeImage]}
                alt={`Image ${activeImage}`}
                className={classes.fullscreenImage}
              />
              <Image
                className={classes.nextButton}
                onClick={nextImage}
                src={galleryArrow}
                alt='arrow next'
              />
              <Image
                className={classes.closeButton}
                src={galleryCross}
                alt='cross'
                onClick={(e) => {
                  e.stopPropagation()
                  setIsModalOpen(false)
                }}
              />
            </div>
          )}

          {/* <div className={classes.navigationButtons}>
            <div className={classes.prevProjectButton} onClick={goToPreviousProject}>
              <Image className={classes.arrowProjectButtonPrevious} src={arrow} alt="arrow prev"/>
              <div className={classes.projectButtonText}>
                <div>{t(`project${(index - 1 + extra.length) % extra.length}.title`)}</div>
                <div>{t(`prevProject`)}</div>
              </div>
            </div>
            <div className={classes.nextProjectButton} onClick={goToNextProject}>
              <Image className={classes.arrowProjectButtonNext} src={arrow} alt='arrow next' />
              <div className={classes.projectButtonText}>
                <div>{t(`project${(index + 1 + extra.length) % extra.length}.title`)}</div>
                <div>{t(`nextProject`)}</div>
              </div>
            </div>
          </div> */}
        </>
      )}
    </div>
  )
}

export default Pr
