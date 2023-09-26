import React from 'react'
import styles from './skill.module.css'
import { TbSql, TbBrandFigma } from "react-icons/tb";
import { Icon } from '../icons';

const Skills = () => {
  return (
    <div className={styles.skills}>

      <div className={styles.skill__card}>
        <span className={styles.skill__icon}>
          <Icon icon="html" />
        </span>
        <span className={styles.skill__text}>HTML</span>
      </div>
      
      <div className={styles.skill__card}>
        <span className={styles.skill__icon}>
          <Icon icon="css" />
        </span>
        <span className={styles.skill__text}>CSS</span>
      </div>
      
      <div className={styles.skill__card}>
        <span className={styles.skill__icon}>
          <Icon icon="javascript" />
        </span>
        <span className={styles.skill__text}>JavaScript</span>
      </div>
      
      <div className={styles.skill__card}>
        <span className={styles.skill__icon}>
          <Icon icon="react" />
        </span>
        <span className={styles.skill__text}>React</span>
      </div>
      
      <div className={styles.skill__card}>
        <span className={styles.skill__icon}>
          <Icon icon="next" />
        </span>
        <span className={styles.skill__text}>Next.Js</span>
      </div>
      
      <div className={styles.skill__card}>
        <span className={styles.skill__icon}>
          <Icon icon="typescript" />
        </span>
        <span className={styles.skill__text}>TypeScript</span>
      </div>
      
      <div className={styles.skill__card}>
        <span className={styles.skill__icon}>
          <Icon icon="sass" />
        </span>
        <span className={styles.skill__text}>Sass</span>
      </div>
      
      <div className={styles.skill__card}>
        <span className={styles.skill__icon}>
          <Icon icon="tailwind" />
        </span>
        <span className={styles.skill__text}>Tailwind</span>
      </div>
      
      <div className={styles.skill__card}>
        <span className={styles.skill__icon}>
          <TbSql />
        </span>
        <span className={styles.skill__text}>SQL</span>
      </div>
      
      <div className={styles.skill__card}>
        <span className={styles.skill__icon}>
          <TbBrandFigma />
        </span>
        <span className={styles.skill__text}>Figma</span>
      </div>
      
      <div className={styles.skill__card}>
        <span className={styles.skill__icon}>
          <Icon icon="xd" />
        </span>
        <span className={styles.skill__text}>Adobe XD</span>
      </div>
      
      <div className={styles.skill__card}>
        <span className={styles.skill__icon}>
          <Icon icon="wordpress" />
        </span>
        <span className={styles.skill__text}>Wordpress</span>
      </div>

    </div>
  )
}

export default Skills