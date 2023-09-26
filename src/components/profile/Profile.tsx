"use client"
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import styles from './profile.module.css'
import Link from 'next/link'

interface Props {
  style?: string
  topbar?: boolean
}

const Profile = ({style, topbar}: Props) => {

  const pathname = usePathname()

  return (
    <div className={`${style === 'big' ? styles.profile__big : styles.profile}`}>
      <div className={styles.profile__avatar}>
      <Link scroll={false} href="/">
        <Image
          className={`${styles.profile__img} ${pathname === '/' ? styles.profile__img__active : ''}`}
          src="/img/avatar.png"
          width={style === 'big' ? 128 : 32}
          height={style === 'big' ? 128 : 32}
          alt="Johan Ricardo avatar"
        />
      </Link>
        
      </div>
      <div className={topbar === true ? styles.profile__text_hide : styles.profile__text}>
        <h1 className={styles.profile__name}>Johan Ricardo</h1>
        <h3 className={styles.profile__rol}>Frontend UI dev</h3>
      </div>
    </div>
  )
}

export default Profile