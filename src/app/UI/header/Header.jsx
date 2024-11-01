'use client'

import { useState, useEffect } from "react";
import classes from "./Header.module.css";
import logo from "../../../../public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import './Header.css'
import { useTranslation } from "next-i18next";
import about from "@/app/about/layout";
import i18n from "@/pages/i18n";

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

  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLanguage);
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
          {t('gallery')}
        </Link>
        <Link
          href='/coming-soon'
          className={`${classes.navigation} ${dark ? classes.invert : ""}`}
        >
          {t('authorship')}
        </Link>
        <Link
          href='/about'
          className={`${classes.navigation} ${dark ? classes.invert : ""}`}
        >
          {t('about_us')}
        </Link>
        <Link
          href='/contacts'
          className={`${classes.navigation} ${dark ? classes.invert : ""}`}
        >
          {t('contacts')}
        </Link>
        <div className={`${classes.navigation} ${dark ? classes.invert : ""}`} onClick={changeLanguage}>
          en/ru
        </div>
      </div>
    </header>
  );
};

export default Header;
