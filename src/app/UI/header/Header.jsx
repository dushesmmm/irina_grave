
'use client'
import classes from './Header.module.css'
import logo from '../../../../public/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'


const Header = ({dark}) => {
    const [isActive, setAcvtive] = useState(false);

    const handleInformation = () => {
        setAcvtive(!isActive)
    }

  return (
    <header className={`${classes.wrapper} ${isActive ? classes.height : ''} ${dark ? classes.dark : ''}`}>
      <Link href='/' className={classes.imageWrapper}>
        <Image src={logo} alt='логотип' width={50} height={50} className={`${dark ? classes.invert : ''}`} />
      </Link>
      <div className={classes.nav}>
      <p className={`${classes.navigation} ${dark ? classes.invert : ''}`} onClick={handleInformation}>галерея</p>
        <div className={`${classes.dropdownMenu} ${isActive ? classes.open : ''} ${dark ? classes.invert : ''}`}>
            <Link href='' className={`${classes.dropdownLink} ${dark ? classes.white : ''}`}>жилые объекты</Link>
            <Link href='' className={`${classes.dropdownLink} ${dark ? classes.white : ''}`}>коммерческие проекты</Link>
            <Link href='' className={`${classes.dropdownLink} ${dark ? classes.white : ''}`}>объекты в работе</Link>
            <Link href='' className={`${classes.dropdownLink} ${dark ? classes.white : ''}`}>extra</Link>
        </div>
      <Link href='/objects' className={`${classes.navigation} ${dark ? classes.invert : ''}`}>авторство</Link>
      <Link href='/about' className={`${classes.navigation} ${dark ? classes.invert : ''}`}>о студии</Link>
      <Link href='' className={`${classes.navigation} ${dark ? classes.invert : ''}`}>контакты</Link>
      <Link href='' className={`${classes.navigation} ${dark ? classes.invert : ''}`}>en/ru</Link>
      </div>
    </header>
  )
}

export default Header
