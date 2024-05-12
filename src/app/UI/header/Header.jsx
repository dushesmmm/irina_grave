import classes from "./Header.module.css";
import logo from "../../../../public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Header = ({ dark }) => {
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
      <div className={classes.nav}>
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
