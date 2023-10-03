"use client"
import Link from "next/link";
import { useContext } from 'react';
import { usePathname } from 'next/navigation'
import { DataContext } from '@/context/dataProvider';
import styles from './nav.module.scss'
import { 
  IoHappyOutline, 
  IoDocumentTextOutline, 
  IoGridOutline, 
  IoPaperPlaneOutline } from "react-icons/io5";

const Nav = () => {
  const pathname = usePathname()
  const {navbar}: any = useContext(DataContext);

  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        {
          navbar.map((item: any) => (
            <Link 
              key={item.id}
              scroll={false} 
              href={item.href} 
              className={`${styles.li} ${pathname === item.href ? styles.li_active : ''}`}>
              {
                item.icon === "IoHappyOutline" ? <IoHappyOutline /> :
                item.icon === "IoDocumentTextOutline" ? <IoDocumentTextOutline /> :
                item.icon === "IoGridOutline" ? <IoGridOutline /> :
                item.icon === "IoPaperPlaneOutline" ? <IoPaperPlaneOutline /> :
                item.icon 
              }
              <span>{item.name}</span>
            </Link>
          ))
        }
      </ul>
    </nav>
  )
}

export default Nav