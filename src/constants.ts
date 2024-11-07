export const HERO_TYPES = ['IMAGE', 'YOUTUBE'] as const

export enum IconSize {
  SMALL = 32,
  MEDIUM = 48,
  LARGE = 64,
}

export const ICON_SIZES = [IconSize.SMALL, IconSize.MEDIUM, IconSize.LARGE] as const

export const DEFAULT_ICON = 'http://127.0.0.1:3000/marker-icons/854902-navigation-maps/049-placeholder.svg'
