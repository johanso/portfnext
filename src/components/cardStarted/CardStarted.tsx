import { Profile } from '../profile'
import { SocialButtons } from '../socialButtons'
import styles from './cardStarted.module.css'

const CardStarted = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__content}>
        <Profile style='big' />
        <SocialButtons />
      </div>
    </div>
  )
}

export default CardStarted
