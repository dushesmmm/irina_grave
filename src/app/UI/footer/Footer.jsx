import React from 'react'
import classes from './Footer.module.css'
import logo from '../../../../public/images/footerlogo.png'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {

  return (
    <div className={classes.wrapper}>
      <div style={{borderBottom: '1px solid #8F8F8F'}}>
        <div className={classes.text}>
            <p>начнем творить красоту <br /> прямо сейчас?</p>
        </div>
         <div className={classes.form}>
            <form action="">
                <p>связь с нами:</p>
                <input type="name" placeholder='Как Вас зовут?' />
                <input type="email" placeholder='Ваш e-mail' />
                <input type="tel" placeholder='Ваш номер телефона' />
                <button type="submit">отправить</button>
            </form>
            <Image src={logo} alt='логотип' />
        </div>
      </div>
      <div className={classes.contactUs}>
        <p>Ирина Граве - дипломированный дизайнер, с отличием окончила школу «Детали». Занимается дизайном частных и общественных интерьеров. В основе её работы над каждым проектом лежит архитектура пространства и специфика образа жизни конкретного заказчика. Ирина ведет авторский надзор за осуществлением ремонтно-строительных работ. </p>
        <div className={classes.links}>
            <Link href='mailto:info@irinagrave.com?subject=Заявка с сайта'>info@irinagrave.com</Link><p>&#8594;</p>
            <Link href="tel:88005553535">8 (800) 555-35-35</Link><p>&#8594;</p>
            <Link href="https://www.instagram.com/irina_grave">instagram</Link><p>&#8594;</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
