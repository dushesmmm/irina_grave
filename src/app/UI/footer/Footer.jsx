'use client'

import { useState } from 'react'
import React from 'react'
import classes from './Footer.module.css'
import logo from '../../../../public/images/footerlogo.svg'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [formSent, setFormSent] = useState(false)

  const handleFullNameChange = (e) => setFullName(e.target.value)
  const handleEmailChange = (e) => setEmail(e.target.value)
  const handlePhoneChange = (e) => setPhone(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const message = `Новая заявка! \n\n👥 Имя: \n${fullName}\n\n💌 Почта: \n${email}\n\n📱 Номер телефона: \n${phone}`

    try {
      const response = await fetch(`https://api.telegram.org/bot7652130986:AAEm6KUZQZ3b2GK2h2_ateV3sVdi9UILXPE/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: '-4535958759',
          text: message,
        }),
      })

      if (response.ok) {
        setFormSent(true)
        setFullName('')
        setEmail('')
        setPhone('')
      } else {
        console.error('Ошибка при отправке формы')
      }
    } catch (error) {
      console.error('Ошибка при отправке данных:', error)
    }
  }

  return (
    <div className={classes.wrapper}>
      <div style={{ borderBottom: '1px solid #8F8F8F' }}>
        <div className={classes.text}>
          <p>начнем творить красоту <br /> прямо сейчас?</p>
        </div>
        <div className={classes.form}>
          <form action="" onSubmit={handleSubmit}>
            <p>связь с нами:</p>
            <input 
              type="name" 
              name="name"
              placeholder="Как Вас зовут?" 
              value={fullName} 
              onChange={handleFullNameChange} 
            />
            <input 
              type="email"
              name="email"
              placeholder="Ваш e-mail" 
              value={email} 
              onChange={handleEmailChange} 
            />
            <input 
              type="tel"
              name="tel"
              placeholder="Ваш номер телефона" 
              value={phone} 
              onChange={handlePhoneChange} 
            />
            <button type="submit">отправить</button>
          </form>
          <Image src={logo} alt="логотип" />
        </div>
      </div>
      <div className={classes.contactUs}>
        <p>
          Ирина Граве - дипломированный дизайнер, с отличием окончила школу «Детали». 
          Занимается дизайном частных и общественных интерьеров. В основе её работы над 
          каждым проектом лежит архитектура пространства и специфика образа жизни 
          конкретного заказчика. Ирина ведет авторский надзор за осуществлением 
          ремонтно-строительных работ.
        </p>
        <div className={classes.links}>
          <Link href="mailto:info@irinagrave.com?subject=Заявка с сайта">info@irinagrave.com</Link><p>&#8594;</p>
          <Link href="tel:88005553535">8 (800) 555-35-35</Link><p>&#8594;</p>
          <Link href="https://www.instagram.com/irina_grave">instagram</Link><p>&#8594;</p>
        </div>
      </div>
    </div>
  )
}

export default Footer