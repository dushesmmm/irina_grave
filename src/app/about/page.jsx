'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { FaPlayCircle } from 'react-icons/fa';
import classes from './about.module.css';
import magz from '../../../public/images/magazines.png';

const About = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const videoElement = document.getElementById('about-video');
    if (videoElement) {
      videoElement.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.videoWrapper}>
        {!isPlaying && (
          <div className={classes.overlay} onClick={handlePlay}>
            <FaPlayCircle className={classes.playIcon} />
          </div>
        )}
        <video
          id="about-video"
          className={classes.video}
          preload="none"
          controls={isPlaying}
          poster="/images/about us/prev.jpg"
        >
          <source src="/images/about us/video-irina-grave.mp4" type="video/mp4" />
        </video>
      </div>

      <div className={classes.wrapper}>
        <Image src={magz} alt="Magazines" />
      </div>
    </div>
  );
};

export default About;
