'use client'

import { useState } from 'react'
import React from 'react'
import classes from './Footer.module.css'
import logo from '../../../../public/images/footerlogo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()
  
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [formSent, setFormSent] = useState(false)

  const handleFullNameChange = (e) => setFullName(e.target.value)
  const handleEmailChange = (e) => setEmail(e.target.value)
  const handlePhoneChange = (e) => setPhone(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const message = `${t("footer.promptText")} \n\n👥 ${t("footer.contactUs")} \n${fullName}\n\n💌 ${t("footer.emailPlaceholder")}: \n${email}\n\n📱 ${t("footer.phonePlaceholder")}: \n${phone}`

    try {
      const response = await fetch(`https://api.telegram.org/botTOKEN/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: 'CHAT_ID',
          text: message,
        }),
      })

      if (response.ok) {
        setFormSent(true)
        setFullName('')
        setEmail('')
        setPhone('')
      } else {
        console.error('Form submission error')
      }
    } catch (error) {
      console.error('Data submission error:', error)
    }
  }

  return (
    <div className={classes.wrapper}>
      <div style={{ borderBottom: '1px solid #8F8F8F' }}>
        <div className={classes.text}>
          <p>{t("footer.promptText")}</p>
        </div>
        <div className={classes.form}>
          <form onSubmit={handleSubmit}>
            <p>{t("footer.contactUs")}</p>
            <input 
              type="text" 
              name="name"
              placeholder={t("footer.namePlaceholder")} 
              value={fullName} 
              onChange={handleFullNameChange} 
            />
            <input 
              type="email"
              name="email"
              placeholder={t("footer.emailPlaceholder")} 
              value={email} 
              onChange={handleEmailChange} 
            />
            <input 
              type="tel"
              name="tel"
              placeholder={t("footer.phonePlaceholder")} 
              value={phone} 
              onChange={handlePhoneChange} 
            />
            <button type="submit">{t("footer.submit")}</button>
          </form>
          <Image src={logo} alt="logo" />
        </div>
      </div>
      <div className={classes.contactUs}>
        <p>{t("footer.aboutText")}</p>
        <div className={classes.links}>
          <Link href={`mailto:${t("footer.emailLink")}`}>{t("footer.emailLink")}</Link><p>&#8594;</p>
          <Link href={`tel:${t("footer.phoneLink")}`}>{t("footer.phoneLink")}</Link><p>&#8594;</p>
          <Link href="https://www.instagram.com/irina_grave">{t("footer.instagramLink")}</Link><p>&#8594;</p>
        </div>
        <div className={classes.mobileImage}>
          <Image src={logo} alt="logo" quality={100}/>
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
