import React from 'react'
import classes from './about.module.css'
import Image from 'next/image'
import PhotoDescription from '../UI/PhotoDescription/PhotoDescription'
import Brands from '../UI/brands/Brands'

import magz from '../../../public/images/magazines.png'

const about = () => {
  return (
    <div>
      <PhotoDescription showLink={false} />
      <Brands />
      <div className={classes.wrapper}>
        <Image src={magz}  />
      </div>
    </div>
  )
}

export default about
