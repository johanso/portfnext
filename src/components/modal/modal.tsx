import { IoCloseOutline } from 'react-icons/io5'
import styles from './modal.module.scss'
import Link from 'next/link'
import { IModal } from '@/app/types/modal'

const Modal = ({closeHref, children}: IModal) => {
  return (
    <div className={styles.container}>
      <Link className={styles.close} scroll={false} href={closeHref}><IoCloseOutline /></Link>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export default Modal