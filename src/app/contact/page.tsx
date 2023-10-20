"use client"
import { Button, Input, MainContent, SocialButtons } from '@/components'
import styles from './contact.module.scss'

const Contact = () => {

  return (
    <MainContent>
      <section className={styles.section}>
        <h2 className={styles.title}>Contact</h2>
        <div className={styles.content}>
          <p className={styles.subtitle}>Hello👋, thanks for taking the time to reach out. How can I help you today?</p>
          <p>You can contact us through the following contact form. Also through my social networks.</p>
          <div className={styles.form}>
            <div className={styles.name}><Input /></div>
            <div className={styles.email}><Input /></div>
            <div className={styles.message}><Input /></div>
            <div className={styles.button}>
              <Button color='invert' text="Sent message" />
            </div>
          </div>
          <SocialButtons />
        </div>
      </section>
    </MainContent>
  )
}

export default Contact