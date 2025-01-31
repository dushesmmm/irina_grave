'use client'

import React, { useState } from 'react'
import play from '../../../../public/images/about us/play.svg'
import classes from './Video.module.css'
import Image from 'next/image'


const Video = () => {

    const [isPlaying, setIsPlaying] = useState(false)

    const handlePlay = () => {
      const videoElement = document.getElementById('about-video')
      if (videoElement) {
        videoElement.play()
        setIsPlaying(true)
      }
    }

  return (
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
  )
}

export default Video
