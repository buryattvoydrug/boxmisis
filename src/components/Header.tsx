import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from '@/styles/Header.module.scss'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link'
import { Box, IconButton } from '@mui/material';
import { CSSTransition } from 'react-transition-group';

export default function Header() {

  const [width, setWidth] = useState<number | null>(null)
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const [spin, setSpin] = useState<boolean>(false)

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  const handleMenuOpen = () => {
    setSpin( prev => !prev )
    if (openMenu) {
      setOpenMenu( prev => !prev )
    } else {
      setTimeout(() => setOpenMenu( prev => !prev ), 700)
    }
  }

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
          
          

          {width && !(width <= 1024)
          ?
            <nav className={styles.nav}>
              <ul>
                <li><Link href="/trainings">Тренировки</Link></li>
                <li><Link href="/">Абонемент</Link></li>
                <li><Link href="/">Галерея</Link></li>
                <li><Link href="/">Контакты</Link></li>
              </ul>
            </nav>
          :
            <IconButton
              onClick={handleMenuOpen}
            >
              <Box
                sx={{padding: 1}}
              >
                  { openMenu
                    ? <CloseIcon/>
                    : <MenuIcon/> }
              </Box>
            </IconButton>
          }

          <CSSTransition
            in={openMenu}
            timeout={300}
            classNames="menu-show"
            unmountOnExit
          >
            <>
              <nav className={styles.menu}>
                <ul>
                  <li><Link href="/trainings">Тренировки</Link></li>
                  <li><Link href="/">Абонемент</Link></li>
                  <li><Link href="/">Галерея</Link></li>
                  <li><Link href="/">Контакты</Link></li>
                </ul>
                <div className={styles.social}>
                  <ul>
                    <li><Link href="/"><Image src='/vk.png' width={50} height={50} alt="vk logo"/></Link></li>
                    <li><Link href="/"><Image src='/instagram.png' width={50} height={50} alt="instagram logo"/></Link></li>
                    <li><Link href="/"><Image src='/telegram.png' width={50} height={50} alt="telegram logo"/></Link></li>
                  </ul>
                </div>
              </nav>
            </>
          </CSSTransition>

        </header>
      </div>
      
      <CSSTransition
        in={spin}
        timeout={600}
        classNames="header-spin"
        unmountOnExit
      >
        <div className={styles.header__circle}>
          <Image src="/menubg.svg" fill alt=''></Image>
        </div>
      </CSSTransition>

    </>
  )
}
