'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa'
import { mags } from '@/pages/api/data/mags'
import classes from './Cover.module.css'
import galleryArrow from '../../../../public/images/gallery-arrow.svg'
import galleryCross from '../../../../public/images/gallery-cross.svg'

const Cover = () => {
    const [selectedImages, setSelectedImages] = useState([])
    const [currentImageIndex, setCurrentImageIndex] = useState(null)

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
    <div>
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
            <Image src={galleryCross} className={classes.closeIcon} onClick={closeModal} alt='Закрыть' />
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
                <Image className={classes.arrow} onClick={showPrev} src={galleryArrow} alt="Предыдущее изображение" />
                <Image className={classes.arrowSecond} onClick={showNext} src={galleryArrow} alt="Следующее изображение" />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Cover