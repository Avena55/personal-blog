import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'


const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='' fill={true} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDescription}>Handcrafting award winning digital exposure</h2>

        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who we are</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro iusto similique natus excepturi delectus accusamus.</p>
        </div>
        <div className={styles.item}>
        <h1 className={styles.title}>What we do</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro iusto similique natus excepturi delectus accusamus.
          <br />
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur harum, asperiores eum quis maxime natus?</p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  )
}

export default About