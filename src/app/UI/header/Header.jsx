
'use client'
import classes from './Header.module.css'
import logo from '../../../../public/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'


const Header = () => {
    const [isActive, setAcvtive] = useState(false);

    const handleInformation = () => {
        setAcvtive(!isActive)
    }

  return (
    <header className={`${classes.wrapper} ${isActive ? classes.height : ''}`}>
      <Link href='/' className={classes.imageWrapper}>
        <Image src={logo} alt='логотип' width={50} height={50} />
      </Link>
      <div className={classes.nav}>
      <p className={classes.navigation} onClick={handleInformation}>галерея</p>
        <div className={`${classes.dropdownMenu} ${isActive ? classes.open : ''}`}>
            <Link href='' className={classes.dropdownLink}>жилые объекты</Link>
            <Link href='' className={classes.dropdownLink}>коммерческие проекты</Link>
            <Link href='' className={classes.dropdownLink}>объекты в работе</Link>
            <Link href='' className={classes.dropdownLink}>extra</Link>
        </div>
      <Link href='' className={classes.navigation}>авторство</Link>
      <Link href='' className={classes.navigation}>о студии</Link>
      <Link href='' className={classes.navigation}>контакты</Link>
      <Link href='' className={classes.navigation}>en/ru</Link>
      </div>
    </header>
  )
}

export default Header
