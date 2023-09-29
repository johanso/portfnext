import React from 'react'
import styles from './skill.module.css'
import Image from 'next/image';

const Skills = () => {
  return (
    <div className={styles.skills}>

      <div className={styles.skill__card}>
        <span className={styles.skill__icon}>
          <Image
            src="/img/logo-html.png"
            width={80}
            height={80}
            alt="logo html"
          />
        </span>
        <span className={styles.skill__text}>HTML</span>
      </div>
      
      <div className={styles.skill__card}>
        <span className={styles.skill__icon}>
          <Image
            src="/img/logo-css.png"
            width={80}
            height={80}
            alt="logo css"
          />
        </span>
        <span className={styles.skill__text}>CSS</span>
      </div>
      
      <div className={styles.skill__card}>
        <span className={styles.skill__icon}>
          <Image
            src="/img/logo-javascript.png"
            width={80}
            height={80}
            alt="logo javascript"
          />
        </span>
        <span className={styles.skill__text}>JavaScript</span>
      </div>
      
      <div className={styles.skill__card}>
        <span className={styles.skill__icon}>
          <Image
            src="/img/logo-react.png"
            width={80}
            height={80}
            alt="logo react"
          />
        </span>
        <span className={styles.skill__text}>React</span>
      </div>
      
      <div className={styles.skill__card}>
        <span className={styles.skill__icon}>
          <Image
            src="/img/logo-next.png"
            width={80}
            height={80}
            alt="logo next"
          />
        </span>
        <span className={styles.skill__text}>Next.Js</span>
      </div>
      
      <div className={styles.skill__card}>
        <span className={styles.skill__icon}>
          <Image
            src="/img/logo-typescript.png"
            width={80}
            height={80}
            alt="logo typescript"
          />
        </span>
        <span className={styles.skill__text}>TypeScript</span>
      </div>
      
      <div className={styles.skill__card}>
        <span className={styles.skill__icon}>
          <Image
            src="/img/logo-sass.png"
            width={80}
            height={80}
            alt="logo sass"
          />
        </span>
        <span className={styles.skill__text}>Sass</span>
      </div>
      
      <div className={styles.skill__card}>
        <span className={styles.skill__icon}>
          <Image
            src="/img/logo-tailwind.png"
            width={80}
            height={80}
            alt="logo tailwind"
          />
        </span>
        <span className={styles.skill__text}>Tailwind</span>
      </div>
      
      <div className={styles.skill__card}>
        <span className={styles.skill__icon}>
          <Image
            src="/img/logo-sql.png"
            width={80}
            height={80}
            alt="logo sql"
          />
        </span>
        <span className={styles.skill__text}>SQL</span>
      </div>
      
      <div className={styles.skill__card}>
        <span className={styles.skill__icon}>
          <Image
            src="/img/logo-figma.png"
            width={80}
            height={80}
            alt="logo figma"
          />
        </span>
        <span className={styles.skill__text}>Figma</span>
      </div>
      
      <div className={styles.skill__card}>
        <span className={styles.skill__icon}>
          <Image
            src="/img/logo-xd.png"
            width={80}
            height={80}
            alt="logo xd"
          />
        </span>
        <span className={styles.skill__text}>Adobe XD</span>
      </div>
      
      <div className={styles.skill__card}>
        <span className={styles.skill__icon}>
          <Image
            src="/img/logo-wordpress.png"
            width={80}
            height={80}
            alt="logo wordpress"
          />
        </span>
        <span className={styles.skill__text}>Wordpress</span>
      </div>

    </div>
  )
}

export default Skills