import React from 'react'
import Image from 'next/image'
import classes from './Brands.module.css'

import image1 from '../../../../public/images/brands/AD.svg';
import image2 from '../../../../public/images/brands/elle decoration.svg';
import image3 from '../../../../public/images/brands/interior+design.svg';
import image4 from '../../../../public/images/brands/lofficiel.svg';
import image5 from '../../../../public/images/brands/design mate.svg';
import image6 from '../../../../public/images/brands/kommersant.svg';
import image7 from '../../../../public/images/brands/salon.svg';
import image8 from '../../../../public/images/brands/beta.svg';
import image9 from '../../../../public/images/brands/mydecor.svg';

const Brands = () => {
    const brands = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

  return (
    <div className={classes.brands}>
        {brands.map((image, index) => (
          <Image key={index} quality={100} src={image} alt={`Бренд ${index + 1}`} style={{ marginBottom: 40, maxHeight: 200 }} />
        ))}
      </div>
  )
}

export default Brands
