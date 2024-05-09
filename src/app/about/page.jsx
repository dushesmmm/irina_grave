import React from 'react'
import classes from './about.module.css'
import Image from 'next/image'

import magz from '../../../public/images/magazines.png'

const about = () => {
  return (
    <div className={classes.wrapper}>
      <Image src={magz}  />
    </div>
  )
}

export default about
