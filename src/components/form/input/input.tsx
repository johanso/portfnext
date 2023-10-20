import React from 'react'
import styles from './input.module.scss'

const Input = () => {
  return (
    <div className={styles.group}	>
      <input className={styles.input} id="name" type="text" required />
      <label className={styles.label} htmlFor="name">Name</label>
      <div className={styles.line}></div>
    </div>
  )
}

export default Input