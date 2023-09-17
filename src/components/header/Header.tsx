import { ReactNode } from "react";
import styles from './header.module.css'


interface Props {
  children?: ReactNode
}

const Header = ({children}: Props) => {
  return (
  <header className={styles.header}>
    <div className="container">
      {children}
    </div>
  </header>
  )
}

export default Header