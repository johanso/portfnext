import { ReactNode } from "react";
import styles from './header.module.scss'


interface Props {
  children?: ReactNode
}

const Header = ({children}: Props) => {
  return (
  <header className={styles.block}>
    <div className={styles.container}>
      {children}
    </div>
  </header>
  )
}

export default Header