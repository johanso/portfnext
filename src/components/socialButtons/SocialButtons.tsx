import styles from './socialButtons.module.css'
import { IoLogoGithub, IoLogoYoutube, IoLogoLinkedin } from "react-icons/io5";


const SocialButtons = () => {
  return (
    <div className={styles.socials}>
      <div className={styles.socials__buttons}>
        <div className={styles.socials__button}>
          <IoLogoGithub />
        </div>
        <div className={styles.socials__button}>
          <IoLogoYoutube />
        </div>
        <div className={styles.socials__button}>
          <IoLogoLinkedin />
        </div>
      </div>
    </div>
  )
}

export default SocialButtons
