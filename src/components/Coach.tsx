import React from 'react'
import { ICoachs } from '../../contentful'
import styles from '@/styles/Coach.module.scss';

export default function Coach({data}: {data: ICoachs}) {

  const {name, post, regards, photo} = data.fields

  const nameArr = name?.split(' ')
  const surname = nameArr?.shift()

  return (
    <>
      <div className={styles.coach}>
        <div className={styles.coach__photo}>
          <img src={photo?.fields.file.url} alt="фото тренера" />
        </div>
        <div className={styles.coach__text}>
          <span className={styles.coach__post}>{post}</span>
          <span className={styles.coach__regards}>{regards}</span>
          <h5 className={styles.coach__name}>{surname} <br /> {nameArr!.join(' ')}</h5>
        </div>
      </div>
    </>
  )
}
