"use client"
import { useContext } from 'react';
import { MainContent } from '@/components';
import styles from './about.module.scss'
import { Icon } from '@/components/icons';
import { DataContext } from '@/context/dataProvider';
import { IBlock, IList } from '../types';

const About = () => {
  const {about}: any = useContext(DataContext);

  return (
    <MainContent>
      <section className={styles.section}>
        <h2 className={styles.title}>{about.title}</h2>
        <p>
          <strong>{about.gretting}</strong><br />
          {about.desc}
        </p>
        <ul className={styles.list}>
          { about.list.map((item: IList) => (
            <li key={item.id} className={styles.item}>
              <strong className={styles.data}>{item.data}</strong>
              <span className={styles.value}>{item.value}</span>
            </li>
          ))}
        </ul>
        <h3 className={styles.subtitle}>{about.subtitle}</h3>
        {about.block.map((item: IBlock) => (
          <div key={item.id} className={styles.block}>
            <Icon icon={item.icon} />
            <div className={styles.name}>{item.name}</div>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        ))}
      </section>
    </MainContent>
  )
}

export default About