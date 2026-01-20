interface POSITION {
  role: string
  dateFrom: string
  dateTo: string | null
}

interface Link {
  text: string
  link: string
}

export interface EXPERIENCE_ITEM {
  company: string
  icon: string
  type: string
  country: string
  attendance: string
  link: string | Link[]
  positions: POSITION[]
  blurb?: string[]
  stack: string[]
}
