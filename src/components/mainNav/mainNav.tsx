import styles from './mainNav.module.css'
import { 
  IoPerson, 
  IoDocumentTextOutline, 
  IoGridOutline, 
  IoPaperPlaneOutline } from "react-icons/io5";

const MainNav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__ul}>
        <li className={styles.nav__li}>
          <IoPerson />
          <span>About</span>
        </li>
        <li className={styles.nav__li}>
          <IoDocumentTextOutline />
          <span>Resume</span>
        </li>
        <li className={styles.nav__li}>
          <IoGridOutline />
          <span>Works</span>
        </li>
        <li className={styles.nav__li}>
          <IoPaperPlaneOutline />
          <span>Contact</span>
        </li>
      </ul>
    </nav>
  )
}

export default MainNav