import React from 'react'
import styles from './skill.module.css'
import { 
  TbBrandHtml5, 
  TbBrandCss3, 
  TbBrandJavascript, 
  TbBrandNextjs, 
  TbBrandTypescript,
  TbBrandReact,
  TbBrandSass,
  TbBrandTailwind,
  TbSql,
  TbBrandFigma,
  TbXd,
  TbBrandWordpress } from "react-icons/tb";

const Skills = () => {
  return (
    <div className={styles.skills}>

      <div className={styles.skill__card}>
        <span className={styles.skill__icon}>
          <TbBrandHtml5 />
        </span>
        <span className={styles.skill__text}>HTML</span>
      </div>
      
      <div className={styles.skill__card}>
        <span className={styles.skill__icon}>
          <TbBrandCss3 />
        </span>
        <span className={styles.skill__text}>CSS</span>
      </div>
      
      <div className={styles.skill__card}>
        <span className={styles.skill__icon}>
          <TbBrandJavascript />
        </span>
        <span className={styles.skill__text}>JavaScript</span>
      </div>
      
      <div className={styles.skill__card}>
        <span className={styles.skill__icon}>
          <TbBrandReact />
        </span>
        <span className={styles.skill__text}>React</span>
      </div>
      
      <div className={styles.skill__card}>
        <span className={styles.skill__icon}>
          <TbBrandNextjs />
        </span>
        <span className={styles.skill__text}>Next.Js</span>
      </div>
      
      <div className={styles.skill__card}>
        <span className={styles.skill__icon}>
          <TbBrandTypescript />
        </span>
        <span className={styles.skill__text}>TypeScript</span>
      </div>
      
      <div className={styles.skill__card}>
        <span className={styles.skill__icon}>
          <TbBrandSass />
        </span>
        <span className={styles.skill__text}>Sass</span>
      </div>
      
      <div className={styles.skill__card}>
        <span className={styles.skill__icon}>
          <TbBrandTailwind />
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
          <TbXd />
        </span>
        <span className={styles.skill__text}>Adobe XD</span>
      </div>
      
      <div className={styles.skill__card}>
        <span className={styles.skill__icon}>
          <TbBrandWordpress />
        </span>
        <span className={styles.skill__text}>Wordpress</span>
      </div>

    </div>
  )
}

export default Skills