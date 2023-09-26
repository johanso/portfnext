import { MainContent, Skills } from '@/components'
import styles from './resume.module.css'
import { IoRocketOutline, IoSchoolOutline, IoBulbOutline } from 'react-icons/io5'

const Resume = () => {
  return (
    <MainContent>
      <section className={`section ${styles.resume}`} id="resume">
        <h2 className="section__title">Resume</h2>

        <div className={styles.resume__block}>
          <div className={styles.resume__block_header}>
            <IoRocketOutline />
            <div className={styles.resume__block_name}>EXPERIENCE</div>
          </div>
          <div className={styles.resume__work}>
            <div className={`${styles.resume__work_date} ${styles.resume__work_date_current}`}>2018 - Present</div>
            <div className={styles.resume__work_name}>Team Leader</div>
            <div className={styles.resume__work_company}>Facebook Inc.</div>
            <p className={styles.resume__work_desc}>Collaborate with creative and development teams.</p>
          </div>
          <div className={styles.resume__work}>
            <div className={styles.resume__work_date}>2018 - Present</div>
            <div className={styles.resume__work_name}>Team Leader</div>
            <div className={styles.resume__work_company}>Facebook Inc.</div>
            <p className={styles.resume__work_desc}>Collaborate with creative and development teams.</p>
          </div>
          <div className={styles.resume__work}>
            <div className={styles.resume__work_date}>2018 - Present</div>
            <div className={styles.resume__work_name}>Team Leader</div>
            <div className={styles.resume__work_company}>Facebook Inc.</div>
            <p className={styles.resume__work_desc}>Collaborate with creative and development teams.</p>
          </div>
          <div className={styles.resume__work}>
            <div className={styles.resume__work_date}>2018 - Present</div>
            <div className={styles.resume__work_name}>Team Leader</div>
            <div className={styles.resume__work_company}>Facebook Inc.</div>
            <p className={styles.resume__work_desc}>Collaborate with creative and development teams.</p>
          </div>
        </div>

        <div className={styles.resume__block}>
          <div className={styles.resume__block_header}>
            <IoSchoolOutline />
            <div className={styles.resume__block_name}>EDUCATION</div>
          </div>
          <div className={styles.resume__work}>
            <div className={`${styles.resume__work_date}`}>2018 - Present</div>
            <div className={styles.resume__work_name}>Team Leader</div>
            <div className={styles.resume__work_company}>Facebook Inc.</div>
            <p className={styles.resume__work_desc}>Collaborate with creative and development teams.</p>
          </div>
          <div className={styles.resume__work}>
            <div className={styles.resume__work_date}>2018 - Present</div>
            <div className={styles.resume__work_name}>Team Leader</div>
            <div className={styles.resume__work_company}>Facebook Inc.</div>
            <p className={styles.resume__work_desc}>Collaborate with creative and development teams.</p>
          </div>
          <div className={styles.resume__work}>
            <div className={styles.resume__work_date}>2018 - Present</div>
            <div className={styles.resume__work_name}>Team Leader</div>
            <div className={styles.resume__work_company}>Facebook Inc.</div>
            <p className={styles.resume__work_desc}>Collaborate with creative and development teams.</p>
          </div>
          <div className={styles.resume__work}>
            <div className={styles.resume__work_date}>2018 - Present</div>
            <div className={styles.resume__work_name}>Team Leader</div>
            <div className={styles.resume__work_company}>Facebook Inc.</div>
            <p className={styles.resume__work_desc}>Collaborate with creative and development teams.</p>
          </div>
        </div>

        <div className={styles.resume__block}>
          <div className={styles.resume__block_header}>
            <IoBulbOutline />
            <div className={styles.resume__block_name}>SKILLS</div>
          </div>
          <p className={styles.resume__work_desc}>Collaborate with creative and development teams.</p>
          <Skills />
        </div>

      </section>
    </MainContent>
  )
}

export default Resume