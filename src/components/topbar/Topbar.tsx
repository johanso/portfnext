import styles from './topbar.module.css'
import { IoMoonOutline, IoMenuOutline } from "react-icons/io5";
import { Profile } from '../profile'

const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <Profile />
      <div className={styles.topbar__icons}>
        <IoMoonOutline />
        <IoMenuOutline />
      </div>
    </div>
  )
}

export default Topbar


// <IoSunnyOutline />