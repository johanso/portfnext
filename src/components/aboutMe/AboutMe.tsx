import styles from './aboutMe.module.css'
import { IoLogoHtml5, IoLogoWordpress, IoLogoFigma, IoWarningOutline } from "react-icons/io5";

const AboutMe = () => {
  return (
    <section className={`section ${styles.about}`}>
      <h2 className="section__title">About Me</h2>
      <p>
        <strong>Hello! I’m Donald Wellborn.</strong><br />
        Back-end Frond-end developer from UK, London. I have rich experience in wordpress, also I am good at Magento. I love to talk with you about our unique.
      </p>
      <ul className={styles.about__list}>
        <li> <strong> <span> Age </span> </strong> <span> 35 </span></li>
        <li> <strong> <span> Residence </span> </strong> <span> CO </span></li>
        <li> <strong> <span> Freelance </span> </strong> <span> Available </span></li>
        <li> <strong> <span> Address </span> </strong> <span> Bogotá, Colombia </span></li>
      </ul>
      <h3 className="section__subtitle">Is there anything I can do for you?</h3>
      <div className={styles.about__block}>
        <IoLogoHtml5 />
        <div className={styles.about__block_name}>Front-end</div>
        <p className={styles.about__block_desc}>Modern and mobile-ready website that will help you reach all of your marketing.</p>
      </div>
      <div className={styles.about__block}>
        <IoLogoFigma />
        <div className={styles.about__block_name}>UX / UI</div>
        <p className={styles.about__block_desc}>UI/UX focus on the user, frontend focus on the settings of the user.</p>
      </div>
      <div className={styles.about__block}>
        <IoLogoWordpress />
        <div className={styles.about__block_name}>WordPress Development</div>
        <p className={styles.about__block_desc}>WordPress development services improve business websites.</p>
      </div>
      <div className={styles.about__block}>
        <IoWarningOutline />
        <div className={styles.about__block_name}>WordPress Security </div>
        <p className={styles.about__block_desc}>Security consultants can check the code and scan for vulnerabilities.</p>
      </div>
    </section>
  )
}

export default AboutMe