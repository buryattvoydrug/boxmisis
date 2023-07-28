import React, { useEffect } from 'react'
import styles from '@/styles/Shedule.module.scss';

interface IsheduleObj {
  [key: string]: string[],
}

export default function Shedule({data}: {data: Record<string, any> | undefined}) {

  const sortedData = sortSheduleByDay(data)
  const shedule = swapKeysToValues(sortedData)

  return (
    <>
      <div className={styles.shedule}>
        {shedule.map((item, index)=>
          <div key={index} className={styles.shedule__item}>
            <div className={styles.shedule__days}>
              {Object.values(item)[0].map((day) => 
                <div key={day} className={styles.shedule__days__item}>{day}</div>
              )}
            </div>
            <div className={styles.shedule__time}>
              {Object.keys(item)[0]}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

const sortSheduleByDay = (data: Record<string, any> | undefined): Array<IsheduleObj>  => {
  const sortedData: Array<IsheduleObj> = []
  const days = Object.keys(data!)

  days.forEach((day) => {
    if (day == 'пн') sortedData[0] = {
      [day]: data![day]
    };
    if (day == 'вт') sortedData[1] = {
      [day]: data![day]
    };
    if (day == 'ср') sortedData[2] = {
      [day]: data![day]
    };
    if (day == 'чт') sortedData[3] = {
      [day]: data![day]
    };
    if (day == 'пт') sortedData[4] = {
      [day]: data![day]
    };
    if (day == 'сб') sortedData[5] = {
      [day]: data![day]
    };
    if (day == 'вс') sortedData[6] = {
      [day]: data![day]
    };
  })

  return sortedData;
} 

const swapKeysToValues = (data: Array<IsheduleObj>): Array<IsheduleObj> => {
  const values = new Set<string> ()
  const swoppedObj: Array<IsheduleObj> = []

  data.forEach((item) => {
    const value = Object.values(item)[0]
                           .toString()
    values.add(value)
  })

  values.forEach((time) => {
    let keys: string[] = []
    data.forEach((data) => {
      if (Object.values(data)[0].toString() === time) {
        keys.push(Object.keys(data)[0].toString())
      }
    })
    swoppedObj.push({
      [time]: keys
    })

  })
  return swoppedObj;
}