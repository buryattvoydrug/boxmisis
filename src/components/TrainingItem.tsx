import React from 'react'
import { IVariantsFields } from '../../contentful'
import Shedule from './Shedule'
import styles from '@/styles/Trainings.module.scss';
import { Button } from '@material-ui/core'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import Coach from './Coach';

export default function TrainingItem({item}: {item: IVariantsFields}) {

  const {shedule, coachs, title, subtitle, link} = item;

  return (
    <>
      <div className={styles.training__card}>
        <div className={styles.training__card__info}>
          <Shedule data={shedule}/>
          <div className={styles.training__card__heading}>
            <h2 className={styles.training__card__title}>{title}</h2>
            <h4 className={styles.training__card__subtitle}>{subtitle}</h4>
            <Link href={link || '/'}>
              <Button 
                  // fullWidth
                  variant="contained" 
                  endIcon={<ArrowForwardIcon />}
                  >
                Записаться
              </Button>
            </Link>  
          </div>
        </div>
        <div className={styles.training__card__coachs}>
          {coachs?.map((coach) => 
            <Coach key={coach.sys.id} data={coach}/>
          )}
        </div>
      </div>
    </>
  )
}
