export enum HeroType {
  IMAGE = 'IMAGE',
  YOUTUBE = 'YOUTUBE',
}

export enum IconSize {
  SMALL = 32,
  MEDIUM = 48,
  LARGE = 64,
}

// const beige = '#f5f5dc'

export const defaults = {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  descriptionMaxLength: 32768,
  iconSize: IconSize.MEDIUM,
  sallaMois: [58.954031, 26.377938],
  themeColor: '#eef0d5', // ~beige
  tileSchema: 'https://tiles-ee-{s}.sallamois.online/tile/{z}/{x}/{y}.png',
  userIcon: 'http://127.0.0.1:3000/marker-icons/854902-navigation-maps/049-placeholder.svg',
} as const

export const ICON_SIZES = [IconSize.SMALL, IconSize.MEDIUM, IconSize.LARGE] as const
