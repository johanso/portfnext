export interface IWorks {
  title: string
  subtitle: string
  navFilter: INavFilter[]
  portfolioData: IPortfolio[]
}

export interface INavFilter {
  id: string
  text: string
}

export interface IPortfolio {
  id?: number
  name: string
  image: string
  blurDataURL?: string
  technologies?: string[]
  year?: number
  company?: string
  participation?: string
  mode?: string,
  handleClick?: any,
}
