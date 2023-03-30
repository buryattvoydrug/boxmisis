import React from 'react'
import styles from '@/styles/MainSlider.module.scss';
import { CSSTransition } from 'react-transition-group';
import Image from 'next/image'
import { Button } from '@material-ui/core'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ISlide } from './MainSlider';

interface SlidePropsI {
  slideState: ISlide,
  showState: boolean,
}

export default function Slide({ slideState, showState }: SlidePropsI) {

  const slide = slideState.fields;

  return (
    <>
    <div className={styles.slide}>

      <div className={styles.image}>
        <CSSTransition
          in={showState}
          timeout={300}
          classNames="show"
        >
          <Image src={'https:' + slide.image?.fields.file.url || ''} 
                fill
                sizes="100vw"
                objectFit="cover"
                alt=''/>
        </CSSTransition>
      </div>

      <CSSTransition
        in={showState}
        timeout={600}
        classNames="show"
      >
        <div className={styles.block}>
          <div className="container">
            <h2 className={styles.title}>{slide.titile}</h2>
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
    </div>
    </>
  )
}
