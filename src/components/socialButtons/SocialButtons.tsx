import styles from './socialButtons.module.scss'
import { IoLogoGithub, IoLogoYoutube, IoLogoLinkedin } from "react-icons/io5";


const SocialButtons = () => {
  return (
    <div className={styles.socials}>
      <div className={styles.buttons}>
        <div className={styles.button}>
          <IoLogoGithub />
        </div>
        <div className={styles.button}>
          <IoLogoYoutube />
        </div>
        <div className={styles.button}>
          <IoLogoLinkedin />
        </div>
      </div>
    </div>
  )
}

export default SocialButtons
