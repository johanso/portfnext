import { ChangeEvent } from 'react'
import styles from './textarea.module.scss'

interface InputProps {
  label: string
  value: string | number
  name: string
  placeholder?: string
  error?: {
    touched?: boolean
    message?: string
  }
  disabled?: boolean
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  onBlur: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const Textarea = ({
  label,
  value,
  name,
  placeholder,
  error,
  disabled,
  onChange,
  onBlur
}: InputProps) => {

  return (
    <div className={styles.group}	>
      <textarea 
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        className={styles.input} />
      <label className={styles.label} htmlFor={name}>{label}</label>
      <div className={`${styles.line} ${error?.message !== undefined ? ' error' : ''}`}></div>
      {error?.message && error?.touched && (
        <p className={styles.message}>{error?.message}</p>
      )}
    </div>
  )
}

export default Textarea