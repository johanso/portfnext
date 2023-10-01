import React from 'react'
import styles from './skill.module.scss'
import Image from 'next/image';
import { ISkill } from '@/app/types';

const Skills = ({name, image, height, width}: ISkill) => {
  return (
    <div className={styles.card}>
      <span className={styles.image}>
      <Image
        src={`/img/${image}`}
        width={width}
        height={height}
        alt={name} />
      </span>
      <span className={styles.text}>{name}</span>
    </div>
  )
}

export default Skills