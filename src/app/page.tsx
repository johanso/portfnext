"use client"
import { useRouter } from 'next/navigation'
import { Button, MainContent, Profile, SocialButtons } from '@/components'
import styles from './page.module.scss'

export default function Home() {
  const router = useRouter()

  const gotoContact = () => {
    router.push('/contact', { scroll: false })
  }

  const dowloadCV = () => {
    document.getElementById('initial')?.scrollIntoView()
  }

  return (
    <MainContent>
      <section className={styles.card} id='initial'>
        <div className={styles.content}>
          <Profile style='big' />
          <SocialButtons />
          <div className={styles.buttons}>
            <Button type='button' icon='down' text="Download CV" onClick={ dowloadCV } />
            <Button type='button' icon='sent' text="Get in Touch" onClick={ gotoContact } />
          </div>
        </div>
      </section>
    </MainContent>
  )
}
