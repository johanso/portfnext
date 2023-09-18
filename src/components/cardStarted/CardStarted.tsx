import styles from './cardStarted.module.css'
import { SocialButtons } from '..'
import { Profile } from '..'

const CardStarted = () => {
  return (
    <section className={`section ${styles.card}`}>
      <div className={styles.card__content}>
        <Profile style='big' />
        <SocialButtons />
      </div>
    </section>
  )
}

export default CardStarted
