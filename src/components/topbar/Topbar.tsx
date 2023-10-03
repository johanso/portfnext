"use client"
import { useEffect, useState } from 'react';
import styles from './topbar.module.scss'
import { useTheme } from "next-themes"
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { Profile } from '..';

const Topbar = () => {

  const {systemTheme, theme, setTheme } = useTheme()
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => setHasMounted(true), []);
  
  if (!hasMounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme

  return (
    <div className={styles.block}>
      <Profile topbar={true} />
      <div className={styles.icons}>
        {currentTheme === "dark" 
          ? <IoSunnyOutline onClick={() => setTheme("light")} />
          : <IoMoonOutline onClick={() => setTheme("dark")} /> 
        }
      </div>
    </div>
  )
}

export default Topbar
