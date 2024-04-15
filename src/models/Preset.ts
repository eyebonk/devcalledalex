interface COLORS {
  '--font': string
  '--heading': string
  '--heading-spacing': string
  '--font-size': string
  '--radius': string
  'line-height': string
  'color': string
  'background': string
  '--green': string
  '--pink': string
  '--orange': string
  '--off-black'?: string
  '--off-white'?: string
  '--blue'?: string
  '--yellow'?: string
}
export interface PRESET {
  type: string
  icon: string
  colors: COLORS
}
