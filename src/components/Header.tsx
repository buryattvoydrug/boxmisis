import Image from 'next/image'
import React from 'react'
import styles from '@/styles/Header.module.scss'
import Link from 'next/link'

export default function Header() {
  return (
    <>
      <div className="container">
        <header className={styles.header}>
          <div className={styles.logo}>
            <Image src="./logo.svg" width={145} height={70} alt="логотип МИСИС" />
            <hr />
            <span>Учебно-тренировочный спортивный центр</span>
          </div>
          <nav className={styles.nav}>
            <ul>
              <li><Link href="/">Тренировки</Link></li>
              <li><Link href="/">Абонемент</Link></li>
              <li><Link href="/">Галерея</Link></li>
              <li><Link href="/">Контакты</Link></li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  )
}
