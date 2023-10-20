import React from 'react'
import styles from './projectFull.module.scss'
import Image from 'next/image'

const ProjectFull = ({id}: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Project Name: {id}</div>
        <div><strong>Company:</strong> Company name</div>
        <div><strong>my contribution:</strong> Company name</div>
        <div><strong>Used technology:</strong> Vue.js, Firebase</div>
        <div><strong>url:</strong> --</div>
        <div><strong>year:</strong> 2020</div>
      </div>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image 
            width={720}
            height={1080}
            quality={100}
            src="https://res.cloudinary.com/dcplixyte/image/upload/v1697808327/porfolio/top-projects-1_b2fpsc.jpg" 
            alt="project image" />
        </div>
      </div>
    </div>
  )
}

export default ProjectFull