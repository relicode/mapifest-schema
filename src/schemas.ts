import { array, number, object, string } from 'yup'

import { MARKER_ICONS, ICON_SIZES } from './constants.js'

import { coordinates, bounds, fromTo, id, tile, hero, objectWithId, color } from './utility-schemas.js'

export const poi = object({
  coordinates: coordinates.default([0, 0]).required(),
  icon: string().oneOf(MARKER_ICONS).required(),
  iconWidth: number().oneOf(ICON_SIZES).required(),
  iconHeight: number().oneOf(ICON_SIZES).required(),
  title: string().min(1).max(32).required(),
  description: string().max(16384).required(),
  hero: hero.optional(),
})
  .concat(objectWithId)
  .required()

export const mapifestEvent = object({
  adminIds: array().of(id).min(1).required(),
  bounds: bounds
    .default([
      [0, 0],
      [0, 0],
    ])
    .required(),
  center: coordinates.default([0, 0]).required(),
  description: string().max(16384),
  fromTo: fromTo.required(),
  name: string().min(3).max(128).required(),
  pois: array().of(poi).default([]).required(),
  shortName: string().max(32),
  themeColor: color.default('#ecece8').required(),
  tiles: array().of(tile).default([]).required(),
  tileSchema: string().default('https://tiles-{s}.sallamois.online/{z}/{x}/{y}.png').required(),
  userIcon: string().oneOf(MARKER_ICONS).default('man').required(),
  userIconWidth: number().oneOf(ICON_SIZES).default(32).required(),
  userIconHeight: number().oneOf(ICON_SIZES).default(32).required(),
  attribution: string()
    .default('&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors')
    .required(),
})
  .concat(objectWithId)
  .required()
