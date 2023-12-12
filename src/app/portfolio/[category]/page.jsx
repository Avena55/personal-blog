import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'

const Category = ({params}) => {
  const capitalizedTitle = (params.category.charAt(0).toUpperCase() + params.category.slice(1));
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{capitalizedTitle}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Description</p>
          <Button text='See more' url='#' />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.image}
            fill={true}
            src='https://images.pexels.com/photos/4558416/pexels-photo-4558416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Description</p>
          <Button text='See more' url='#' />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.image}
            fill={true}
            src='https://images.pexels.com/photos/4558416/pexels-photo-4558416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Description</p>
          <Button text='See more' url='#' />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.image}
            fill={true}
            src='https://images.pexels.com/photos/4558416/pexels-photo-4558416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
          />
        </div>
      </div>
    </div>
  )
}

export default Category