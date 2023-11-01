import { MainContent } from '@/components'
import styles from './page.module.scss'

export default function NotFound() {

  return (
    <MainContent>
      <section className={styles.section}>
        <div className={styles.notfound}>
          <h2 className="notfound-h">Not Found :(</h2>
          <div className="notfound-d">404</div>
          <p className="notfound-p">Sorry, but the page you were trying to view does not exist.</p>
        </div>
      </section>
    </MainContent>
  )
}
