import styles from './button.module.scss'

interface Props {
  text?: string
  color?: string
}

const Button = ({text, color}: Props) => {
  return (
    <button className={styles.btn} data-color={color}>{text}</button>
  )
}

export default Button