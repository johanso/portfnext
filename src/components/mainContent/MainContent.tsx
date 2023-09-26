"use client"
import { ReactNode } from 'react'
import styles from './mainContent.module.css'
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  children?: ReactNode
}

const MainContent = ({children}: Props) => {
  return (
    <div className={styles.main}>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -15 }}
          transition={{ duration: 0.65 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default MainContent
