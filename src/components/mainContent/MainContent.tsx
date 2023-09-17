import { ReactNode } from 'react'
import styles from './mainContent.module.css'

interface Props {
  children?: ReactNode
}

const MainContent = ({children}: Props) => {
  return (
    <div className={styles.main}>
      {children}
    </div>
  )
}

export default MainContent
