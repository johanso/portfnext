import React from 'react'
import Image from 'next/image'
import styles from './profile.module.css'

interface Props {
  style?: string
}

const Profile = ({style}: Props) => {
  return (
    <div className={`${style === 'big' ? styles.profile__big : styles.profile}`}>
      <div className={styles.profile__avatar}>
        <Image
          src="/images/avatar.png"
          width={style === 'big' ? 128 : 32}
          height={style === 'big' ? 128 : 32}
          alt="Johan Ricardo avatar"
        />
      </div>
      <div className={styles.profile__text}>
        <h1 className={styles.profile__name}>Johan Ricardo</h1>
        <h3 className={styles.profile__rol}>Frontend UI dev</h3>
      </div>
    </div>
  )
}

export default Profile