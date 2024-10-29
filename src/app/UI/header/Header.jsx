'use client'

import { useState, useEffect } from "react";
import classes from "./Header.module.css";
import logo from "../../../../public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import './Header.css'

const Header = ({ dark }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`${classes.wrapper} ${dark ? classes.dark : ""}`}>
      <Link href='/' className={classes.imageWrapper}>
        <Image
          src={logo}
          alt='логотип'
          width={50}
          height={50}
          className={`${dark ? classes.invert : ""}`}
        />
      </Link>
      <div className={`${menuOpen ? 'burger open' : 'burger'} ${dark ? classes.invert : ''}`} onClick={toggleMenu}><span></span></div>
      <div className={`${classes.nav} ${menuOpen ? classes.active : ""} ${dark ? classes.grey : ''}`}>
        <Link
          href='/gallery'
          className={`${classes.navigation} ${dark ? classes.invert : ""}`}
        >
          галерея
        </Link>
        <Link
          href='/coming-soon'
          className={`${classes.navigation} ${dark ? classes.invert : ""}`}
        >
          авторство
        </Link>
        <Link
          href='/about'
          className={`${classes.navigation} ${dark ? classes.invert : ""}`}
        >
          о студии
        </Link>
        <Link
          href='/contacts'
          className={`${classes.navigation} ${dark ? classes.invert : ""}`}
        >
          контакты
        </Link>
        <Link
          href=''
          className={`${classes.navigation} ${dark ? classes.invert : ""}`}
        >
          en/ru
        </Link>
      </div>
    </header>
  );
};

export default Header;
