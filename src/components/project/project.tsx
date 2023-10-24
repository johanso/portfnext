"use client"
import {useState} from 'react'
import Image from 'next/image'
import styles from './project.module.scss'
import { IPortfolio } from '@/app/types/works';
import { IoResize } from 'react-icons/io5';

const Project = ({
  name,
  image,
  id,
  handleClick
  }: IPortfolio) => {
  const [hasError, setHasError] = useState(false);

  return (
    <>
      <div className={styles.image} onClick={() => handleClick(id)}>
        <span className={styles.icon}>
          <IoResize />
        </span>
          <Image
            src={image}
            width={200}
            height={250}
            alt={name}
            onError={() => !hasError && setHasError(true)}
          />
        <span className={styles.title}>{name}</span>
      </div>
    </>
  )
}

export default Project