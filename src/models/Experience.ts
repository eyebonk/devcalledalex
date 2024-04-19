interface POSITION {
  role: string
  dateFrom: string
  dateTo: string | null
  blurb?: string
}

export interface EXPERIENCE_ITEM {
  company: string
  icon: string
  type: string
  country: string
  attendance: string
  link: string
  positions: POSITION[]
  stack: string[]
}
