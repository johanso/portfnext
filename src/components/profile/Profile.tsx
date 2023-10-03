"use client"
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import styles from './profile.module.scss'
import Link from 'next/link'

interface Props {
  style?: string
  topbar?: boolean
}

const Profile = ({style, topbar}: Props) => {

  const pathname = usePathname()

  return (
    <div className={`${style === 'big' ? styles.block_big : styles.block}`}>
      <div className={styles.avatar}>
      <Link scroll={false} href="/">
        <Image
          className={`${styles.img} ${pathname === '/' ? styles.img_active : ''}`}
          src="/img/avatar.png"
          width={style === 'big' ? 128 : 32}
          height={style === 'big' ? 128 : 32}
          alt="Johan Ricardo avatar"
        />
      </Link>

      </div>
      <div className={topbar === true ? styles.text_hide : styles.text}>
        <h1 className={styles.name}>Johan Ricardo</h1>
        <h3 className={styles.rol}>Frontend UI dev</h3>
      </div>
    </div>
  )
}

export default Profile