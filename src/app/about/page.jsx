'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa'
import classes from './about.module.css'
import play from '../../../public/images/about us/play.svg'
import { mags } from '@/pages/api/data/mags'

const About = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [selectedImages, setSelectedImages] = useState([])
  const [currentImageIndex, setCurrentImageIndex] = useState(null)

  const handlePlay = () => {
    const videoElement = document.getElementById('about-video')
    if (videoElement) {
      videoElement.play()
      setIsPlaying(true)
    }
  }

  const openModal = (images) => {
    if (images && images.length > 0) {
      setSelectedImages(images)
      setCurrentImageIndex(0)
    }
  }

  const closeModal = () => {
    setSelectedImages([])
    setCurrentImageIndex(null)
  }

  const showNext = () => {
    if (currentImageIndex !== null && selectedImages.length > 1) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedImages.length)
    }
  }

  const showPrev = () => {
    if (currentImageIndex !== null && selectedImages.length > 1) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedImages.length - 1 : prevIndex - 1
      )
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.videoWrapper}>
        {!isPlaying && (
          <div className={classes.overlay} onClick={handlePlay}>
            <Image alt="старт видео" src={play} className={classes.playIcon} />
          </div>
        )}
        <video
          id="about-video"
          className={classes.video}
          preload="true"
          controls={isPlaying}
          poster="/images/about us/prev.jpg"
        >
          <source src="/images/about us/video-irina-grave.mp4" type="video/mp4" />
        </video>
      </div>

      <div className={classes.quote}>
        <h2>“Дизайнер Ирина Граве детально, с любовью прорабатывает  пространства, показывая высокий уровень мастерства.”</h2>
        <p>-   INTERIOR+DESIGN</p>
      </div>

      <div className={classes.wrapper}>
        {mags.slice().reverse().map((item) => (
          <div key={item.id} className={classes.item}>
            <Image
              src={item.cover}
              alt={`Обложка журнала ${item.id}`}
              onClick={() => openModal(item.full)}
              width={250}
              height={350}
              style={{ cursor: 'pointer' }}
              quality={100}
            />
          </div>
        ))}
      </div>

      {currentImageIndex !== null && (
        <div className={classes.modal}>
          <div className={classes.modalContent}>
            <FaTimes className={classes.closeIcon} onClick={closeModal} />
            {selectedImages[currentImageIndex] && (
              <Image
                src={selectedImages[currentImageIndex]}
                alt={`Изображение ${currentImageIndex + 1}`}
                className={classes.fullImage}
                width={1300}
                height={800}
              />
            )}
            {selectedImages.length > 1 && (
              <div className={classes.navigation}>
                <FaArrowLeft className={classes.arrow} onClick={showPrev} />
                <FaArrowRight className={classes.arrow} onClick={showNext} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default About
