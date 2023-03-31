import { CSSTransition } from 'react-transition-group';
import styles from '@/styles/MainSlider.module.scss';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Slide from './Slide';
import { LinearProgress } from '@material-ui/core';
import { IMainSlider, IMainSliderFields } from '../../contentful';

export interface ISlide {
  fields: IMainSliderFields,
  sys: IMainSlider,
}

export default function MainSlider({slides}: {slides: Array<ISlide>}) {

  const maxCount = slides.length;
  const [slideNumber, setSlideNumber] = useState<number>(0);
  const [slide, setSlide] = useState<ISlide>(slides[0]);
  const [isChanged, setChanged] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

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
    setSlide(slides[slideNumber])
    setChanged(false)
  },[slideNumber])


  return (
    <>
      <section className={styles.mainSlider}>
        
          <Slide slideState={slide} showState={show}/>

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
            classNames="secondary-spin"
          >
            <div className={styles.secondary__circle}>
              <Image src="/bigcircle.svg" fill alt=''></Image>
            </div>
          </CSSTransition>
        
          <div className={styles.progress}>
            <div className="container">
              <LinearProgress variant="determinate" value={(slideNumber + 1) * 100 / maxCount}/>
            </div>
          </div>

      </section>
    </>
  )
}