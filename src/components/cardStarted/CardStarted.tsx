import styles from './cardStarted.module.css'
import { Button, SocialButtons } from '..'
import { Profile } from '..'

const CardStarted = () => {
  return (
    <section className={`section ${styles.card}`}>
      <div className={styles.card__content}>
        <Profile style='big' />
        <SocialButtons />
        <div className={styles.card__buttons}>
          <Button text="Download my CV" />
          <Button text="Contact Me" />
        </div>
      </div>
    </section>
  )
}

export default CardStarted
