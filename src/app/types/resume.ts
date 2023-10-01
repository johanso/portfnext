export interface IResume {
  title: string
  subtitle: string
  blockExperience: IBlockExperience[]
  blockEducation: IBlockEducation[]
  blockCertificate: IBlockCertificate[]
  blockSkills: IBlockSkill[]
}

export interface IBlockExperience {
  title: string
  desc: string
  experiences: IExperience[]
}

export interface IExperience {
  id: string
  actual: boolean
  date: string
  name: string
  company: string
  desc: string
}

export interface IBlockEducation {
  title: string
  desc: string
  educations: IEducation[]
}

export interface IEducation {
  id: string
  date: string
  name: string
  company: string
  desc: string
}

export interface IBlockCertificate {
  title: string
  desc: string
  certificates: ICertificate[]
}

export interface ICertificate {
  id: string
  date: string
  name: string
  company: string
  desc: string
}

export interface IBlockSkill {
  title: string
  desc: string
  skills: ISkill[]
}

export interface ISkill {
  id: string
  name: string
  image: string
  width: number
  height: number
}
