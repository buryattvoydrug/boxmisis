import { Button, LinearProgress } from '@material-ui/core'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { CSSTransition } from 'react-transition-group';
import styles from '@/styles/MainSlider.module.scss';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const SLIDES = [
  {
    title: 'Секция бокса с большой историей 1', 
    subtitle: 'тренируем чемпионов более 50 лет',
    image: '1.jpg',
  }, 
  {
    title: 'Секция бокса с большой историей 2', 
    subtitle: 'тренируем чемпионов более 50 лет',
    image: '2.jpg',
  }, 
  {
    title: 'Секция бокса с большой историей 3', 
    subtitle: 'тренируем чемпионов более 50 лет',
    image: '3.jpg',
  }, 
  {
    title: 'Секция бокса с большой историей4', 
    subtitle: 'тренируем чемпионов более 50 лет',
    image: '4.jpg',
  }, 
  {
    title: 'Секция бокса с большой историей 5', 
    subtitle: 'тренируем чемпионов более 50 лет',
    image: '5.jpg',
  }, 
]

export default function MainSlider() {

  const maxCount = SLIDES.length;
  const [slideNumber, setSlideNumber] = useState(0);
  const [slide, setSlide] = useState(SLIDES[0]);
  const [isChanged, setChanged] = useState(false);
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    setShow(prev => !prev);
  }, [isChanged])

  useEffect(() => {
    setInterval(() => {
      setChanged(true)
      setSlideNumber(prev => (prev + 1) % maxCount)
    }, 7000)
  },[maxCount])

  useEffect(() => {
    setSlide(SLIDES[slideNumber])
    setChanged(false)
  },[slideNumber])


  return (
    <>
      <section className={styles.mainSlider}>
        <div className={styles.slide}>

          <div className={styles.image}>
            <CSSTransition
              in={show}
              timeout={300}
              classNames="show"
            >
              <Image src={'/' + slide.image} 
                    fill
                    sizes="100vw"
                    objectFit="cover"
                    alt=''/>
            </CSSTransition>
          </div>
          
          <CSSTransition
            in={show}
            timeout={600}
            classNames="show"
          >
            <div className={styles.block}>
              <div className="container">
                <h2 className={styles.title}>{slide.title}</h2>
                <h3 className={styles.subtitle}>{slide.subtitle}</h3>
                <div className={styles.button}>
                  <Button 
                      variant="contained" 
                      endIcon={<ArrowForwardIcon />}
                      >
                    Подробнее
                  </Button>
                </div>
              </div>
            </div>
          </CSSTransition>
          
          <div className={styles.progress}>
            <div className="container">
              <LinearProgress variant="determinate" value={(slideNumber + 1) * 100 / maxCount}/>
            </div>
          </div>
        </div>

          <CSSTransition
            in={show}
            timeout={3000}
            classNames="spin"
          >
            <div className={styles.circle}>
              <Image src="/bigcircle.svg" fill alt=''></Image>
            </div>
          </CSSTransition>

          <CSSTransition
            in={show}
            timeout={3000}
            classNames="spin"
          >
            <div className={styles.secondary__circle}>
              <Image src="/bigcircle.svg" fill alt=''></Image>
            </div>
          </CSSTransition>
        
      </section>
    </>
  )
}
