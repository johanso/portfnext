"use client"
import { useContext } from 'react';
import styles from './socialButtons.module.scss'
import { IoLogoGithub, IoLogoYoutube, IoLogoLinkedin, IoLogoDribbble, IoLogoMedium } from "react-icons/io5";
import { DataContext } from '@/context/dataProvider';
import Link from 'next/link';


const SocialButtons = () => {
  const {profile}: any = useContext(DataContext);
  const {socials} = profile

  return (
    <div className={styles.socials}>
      <div className={styles.buttons}>
        {
          socials.map((social: any) => (
            <Link key={social.id} href={social.url} className={styles.button}>
              {
                social.icon === "IoLogoGithub" ? <IoLogoGithub /> :
                social.icon === "IoLogoYoutube" ? <IoLogoYoutube /> :
                social.icon === "IoLogoLinkedin" ? <IoLogoLinkedin /> :
                social.icon === "IoLogoDribbble" ? <IoLogoDribbble /> :
                social.icon === "IoLogoMedium" ? <IoLogoMedium /> :
                social.icon 
              }
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default SocialButtons
