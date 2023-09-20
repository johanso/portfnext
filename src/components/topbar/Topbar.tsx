import styles from './topbar.module.css'
import { IoMoonOutline } from "react-icons/io5";
import { Profile } from '..';

const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <Profile topbar={true} />
      <div className={styles.topbar__icons}>
        <IoMoonOutline />
      </div>
    </div>
  )
}

export default Topbar


// <IoSunnyOutline />