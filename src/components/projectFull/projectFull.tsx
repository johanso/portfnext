import React, { useContext } from 'react'
import styles from './projectFull.module.scss'
import Image from 'next/image'
import { DataContext } from '@/context/dataProvider';
import { IPortfolio } from '@/app/types/works';

const ProjectFull = ({id}: any) => {
  const {works}: any = useContext(DataContext);
  const portfolio: IPortfolio = works.portfolio.filter((item: IPortfolio) => item.id === id)[0];
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div><strong>Project Name:</strong> {portfolio.name}</div>
        <div><strong>Company:</strong> {portfolio.company}</div>
        <div><strong>My contribution:</strong> {portfolio.participation}</div>
        <div><strong>Used technology:</strong> {portfolio.technologies?.map((item: any) => item + ', ')}</div>
        <div><strong>Url:</strong> --</div>
        <div><strong>Year:</strong> {portfolio.year}</div>
      </div>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image 
            width={768}
            height={1080}
            quality={80}
            src={portfolio.image} 
            placeholder="blur"
            blurDataURL='data:image/jpeg;base64,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'
            alt="project image" />
        </div>
      </div>
    </div>
  )
}

export default ProjectFull