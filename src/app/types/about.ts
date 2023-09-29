export interface IAbout {
  title: string
  subtitle: string
  list: IList[]
  block: IBlock[]
}

export interface IList {
  id: string
  data: string
  value: string
}

export interface IBlock {
  id: string
  icon: string
  name: string
  desc: string
}
