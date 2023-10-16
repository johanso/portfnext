"use client"
import React, { useContext, useState } from 'react'
import styles from './works.module.scss'
import { MainContent, Project } from '@/components'
import { DataContext } from '@/context/dataProvider'
import { INavFilter, IPortfolio } from '../types/works'


const Works = () => {
  const {works}: any = useContext(DataContext);
  const [activeItem, setActiveItem] = useState<string>(works.navFilter[0].id)
  
  const handleItemClick = (itemId: string): void => {
    setActiveItem(itemId);
  };

  return (
    <MainContent>
      <section className={styles.section}>
        <h2 className={styles.title}>{works.title}</h2>
        <ul className={styles.filter}>
          {works.navFilter.map((item: INavFilter) => (
            <li
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={`${styles.filteritem} ${
                activeItem === item.id ? styles.filteritem_current : ''
              }`}
            >
              {item.text}
            </li>
          ))}
        </ul>


        <div className={styles.content}>
  {works.portfolio
    .filter((item: IPortfolio) => item.mode === activeItem)
    .reduce((acc: JSX.Element[], item: IPortfolio, index: number, array: IPortfolio[]) => {
      if (index === 0 || item.year !== array[index - 1].year) {
        const yearProjects = [item];

        for (let i = index + 1; i < array.length; i++) {
          if (array[i].year === item.year) {
            yearProjects.push(array[i]);
          } else {
            break;
          }
        }

        acc.push(
          <React.Fragment key={`year-${item.year}`}>
            <div className={styles.year}>{item.year}</div>
            <div className={styles.cards}>
              {yearProjects.map((project) => (
                <Project key={project.id} {...project} />
              ))}
            </div>
          </React.Fragment>
        );
      }

      return acc;
    }, [])}
</div>





      </section>
    </MainContent>
  )
}

export default Works