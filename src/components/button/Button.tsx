"use client"
import { IoPaperPlaneOutline, IoDownloadOutline } from 'react-icons/io5'
import styles from './button.module.scss'

interface Props {
  text?: string
  color?: string
  icon?: string
  type?: "button" | "submit" | "reset" 
  onClick?: () => void
}

const Button = ({text, color, icon, type, onClick}: Props) => {
  return (
    <button 
      type={type}
      className={styles.btn} 
      data-color={color}
      onClick={onClick}>
      {text} 
      {
        icon === 'sent' ? <IoPaperPlaneOutline /> :
        icon === 'down' ? <IoDownloadOutline /> :
        null
      }
    </button>
  )
}

export default Button