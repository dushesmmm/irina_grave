'use client'

import React from 'react';
import photo from '../../../../public/images/main page/mainPagePhoto.jpeg';
import classes from './PhotoDescription.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const PhotoDescription = ({ showLink }) => {
  const { t } = useTranslation();

  return (
    <div className={classes.wrapper} >
     <div className={classes.text}>
      <p>
      {t('paragraph1')}
      <br /><br />
      {t('paragraph2')}
      </p>
      {showLink && <Link href="/about">{t('readMore')}</Link>}
     </div>
    <Image src={photo} alt="фотография" width={475} height={815} />
  </div>
  );
}

export default PhotoDescription;
