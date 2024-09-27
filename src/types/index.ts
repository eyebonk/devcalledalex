interface POSITION {
  role: string
  dateFrom: string
  dateTo: string | null
}

export interface EXPERIENCE_ITEM {
  company: string
  icon: string
  type: string
  country: string
  attendance: string
  link: string
  positions: POSITION[]
  blurb?: string
  stack: string[]
}
