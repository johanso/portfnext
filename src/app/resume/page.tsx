"use client"
import { useContext } from 'react';
import styles from './resume.module.scss'
import { MainContent, Skills } from '@/components'
import { DataContext } from '@/context/dataProvider';
import { IoRocketOutline, IoSchoolOutline, IoBulbOutline, IoLinkOutline } from 'react-icons/io5'
import { IBlockCertificate, IBlockEducation, IBlockExperience, IBlockSkill, ICertificate, IEducation, IExperience, IResume, ISkill } from '../types';
import Link from 'next/link';

const Resume = () => {
  const {resume}: any = useContext(DataContext);

  return (
    <MainContent>
      <section className={styles.section}>
        <h2 className={styles.title}>{resume.title}</h2>

        {resume.blockExperience.map((block: IBlockExperience) => (
          <div key={block.title} className={styles.block}>
            <div className={styles.block_header}>
              <IoRocketOutline />
              <div className={styles.block_name}>{block.title}</div>
            </div>
            {block.experiences?.map(({ id, actual, name, date, company, desc }: IExperience) => (
              <div key={id} className={styles.block_content}>
                <div className={`${styles.block_date} ${actual && styles.block_date_current}`}>{date}</div>
                <div className={styles.block_company}><strong>{company}</strong> ({name})</div>
                <p className={styles.block_desc}>{desc}</p>
              </div>
            ))}
          </div>
        ))}
        
        {resume.blockEducation.map((block: IBlockEducation) => (
          <div key={block.title} className={styles.block}>
            <div className={styles.block_header}>
              <IoSchoolOutline />
              <div className={styles.block_name}>{block.title}</div>
            </div>
            {block.educations?.map(({ id, date, company, name }: IEducation) => (
              <div key={id} className={styles.block_content}>
                <div className={styles.block_date}>{date}</div>
                <div className={styles.block_company}><strong>{company}</strong></div>
                <p className={styles.block_desc}>{name}</p>
              </div>
            ))}
          </div>
        ))}
        
        {resume.blockCertificate.map((block: IBlockCertificate) => (
          <div key={block.title} className={styles.block}>
            <div className={styles.block_header}>
              <IoRocketOutline />
              <div className={styles.block_name}>{block.title}</div>
            </div>
            {block.certificates?.map(({ id, date, company, desc, name, url }: ICertificate) => (
              <div key={id} className={styles.block_content}>
                <div className={styles.block_date}>{date}</div>
                <div className={styles.block_company}><strong>{company}</strong></div>
                <p className={styles.block_desc}>{name}</p>
                <p className={styles.block_desc}>
                  <Link className={styles.block_link} target='_blank' href={url} scroll={false} >{desc} <IoLinkOutline /></Link>
                </p>
              </div>
            ))}
          </div>
        ))}
        
        {resume.blockSkills.map((block: IBlockSkill) => (
          <div key={block.title} className={styles.block}>
            <div className={styles.block_header}>
              <IoBulbOutline />
              <div className={styles.block_name}>{block.title}</div>
            </div>
            <div className={styles.block_skills}>
              { block.skills?.map((skill: ISkill) => (
                <Skills key={skill.id} {...skill}/>
              ))}
            </div>
          </div>
        ))}
        

      </section>
    </MainContent>
  )
}

export default Resume