"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation'
import styles from './mainNav.module.css'
import { 
  IoHappyOutline, 
  IoDocumentTextOutline, 
  IoGridOutline, 
  IoPaperPlaneOutline } from "react-icons/io5";

const MainNav = () => {
  const pathname = usePathname()

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__ul}>
        <Link 
          scroll={false} 
          href="/about" 
          className={`${styles.nav__li} ${pathname === '/about' ? styles.nav__li__active : ''}`}>
          <IoHappyOutline />
          <span>About</span>
        </Link>
        <Link 
          scroll={false} 
          href="/resume" 
          className={`${styles.nav__li} ${pathname === '/resume' ? styles.nav__li__active : ''}`}>
          <IoDocumentTextOutline />
          <span>Resume</span>
        </Link>
        <Link 
          scroll={false} 
          href="#works" 
          className={`${styles.nav__li} ${pathname === '/works' ? styles.nav__li__active : ''}`}>
          <IoGridOutline />
          <span>Works</span>
        </Link>
        <Link 
          scroll={false} 
          href="#contact"
          className={`${styles.nav__li} ${pathname === '/contact' ? styles.nav__li__active : ''}`}>
          <IoPaperPlaneOutline />
          <span>Contact</span>
        </Link>
      </ul>
    </nav>
  )
}

export default MainNav