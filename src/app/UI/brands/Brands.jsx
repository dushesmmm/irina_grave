import React from 'react'
import Image from 'next/image'
import classes from './Brands.module.css'

import image1 from '../../../../public/images/AD.svg';
import image2 from '../../../../public/images/elle decoration.svg';
import image3 from '../../../../public/images/interior+design.svg';
import image4 from '../../../../public/images/lofficiel.svg';
import image5 from '../../../../public/images/design mate.svg';
import image6 from '../../../../public/images/kommersant.svg';
import image7 from '../../../../public/images/salon.svg';
import image8 from '../../../../public/images/mydecor.svg';

const Brands = () => {
    const brands = [image1, image2, image3, image4, image5, image6, image7, image8];

  return (
    <div className={classes.brands}>
        {brands.map((image, index) => (
          <Image key={index} src={image} alt={`Бренд ${index + 1}`} style={{ width: '23%', marginBottom: 40, maxHeight: 200 }} />
        ))}
      </div>
  )
}

export default Brands
