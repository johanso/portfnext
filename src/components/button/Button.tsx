import styles from './button.module.scss'

interface Props {
  text?: string
}

const Button = ({text}: Props) => {
  return (
    <button className={styles.btn}>{text}</button>
  )
}

export default Button