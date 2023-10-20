"use client"
import React, { useContext, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { MainContent, Modal, Project, ProjectFull } from '@/components'
import { DataContext } from '@/context/dataProvider'
import { INavFilter, IPortfolio } from '../types/works'
import styles from './works.module.scss'

const Works = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const {works}: any = useContext(DataContext);
  const [activeItem, setActiveItem] = useState<string>(works.navFilter[0].id)

  const projectID = searchParams.get('project')
  
  const handleItemClick = (itemId: string): void => {
    setActiveItem(itemId);
  };

  const handleClick = (id: string): void => {
    router.push(`?project=${id}`, { scroll: false })
  }  

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
                        <Project key={project.id} {...project} handleClick={handleClick} />
                      ))}
                    </div>
                  </React.Fragment>
                );
              }
              return acc;
          }, [])}
        </div>
      </section>
      {projectID && (
        <Modal closeHref="/works">
          <ProjectFull id={Number(projectID)} name={''}	 />
        </Modal>
      )}
    </MainContent>
  )
}

export default Works