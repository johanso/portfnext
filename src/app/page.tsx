import { Button, MainContent, Profile, SocialButtons } from '@/components'
import styles from './page.module.scss'

export default function Home() {
  return (
    <MainContent>
      <section className={styles.card} id='initial'>
        <div className={styles.content}>
          <Profile style='big' />
          <SocialButtons />
          <div className={styles.buttons}>
            <Button text="Download my CV" />
            <Button text="Contact Me" />
          </div>
        </div>
      </section>
    </MainContent>
  )
}
