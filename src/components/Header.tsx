import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from '@/styles/Header.module.scss'
import Link from 'next/link'

export default function Header() {

  const [width, setWidth] = useState<number | null>(null)

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  return (
    <>
      <div className="container">
        <header className={styles.header}>
          <div className={styles.logo}>
            <div className={styles.image}>
              <Image src="/logo.png" 
                     fill
                     objectFit='cover'
                     alt="логотип МИСИС" 
              />
            </div>
            <hr />
            <span>Учебно-тренировочный спортивный центр</span>
          </div>
          {width && !(width <= 1024) && 
            <nav className={styles.nav}>
              <ul>
                <li><Link href="/">Тренировки</Link></li>
                <li><Link href="/">Абонемент</Link></li>
                <li><Link href="/">Галерея</Link></li>
                <li><Link href="/">Контакты</Link></li>
              </ul>
            </nav>
          }
        </header>
      </div>
    </>
  )
}
