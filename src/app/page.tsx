import { Button, MainContent, Profile, SocialButtons } from '@/components'
import styles from './page.module.css'

export default function Home() {
  return (
    <MainContent>
      <section className={`section ${styles.card}`} id='initial'>
        <div className={styles.card__content}>
          <Profile style='big' />
          <SocialButtons />
          <div className={styles.card__buttons}>
            <Button text="Download my CV" />
            <Button text="Contact Me" />
          </div>
        </div>
      </section>
    </MainContent>
  )
}
