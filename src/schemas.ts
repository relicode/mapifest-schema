import { array, object, string } from 'yup'

import { coordinates, bounds, fromTo, id, tile, hero, objectWithId, objectWithIcon, color } from './utility-schemas.js'

export const poi = object({
  coordinates: coordinates.default([0, 0]).required(),
  title: string().min(1).max(32).required(),
  description: string().max(16384).required(),
  hero: hero.optional(),
})
  .concat(objectWithId)
  .concat(objectWithIcon)
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
  userIcon: objectWithIcon.required(),
  shortName: string().max(32),
  themeColor: color.default('#ecece8').required(),
  tiles: array().of(tile).default([]).required(),
  tileSchema: string().default('https://tiles-ee-{s}.sallamois.online/tile/{z}/{x}/{y}.png').required(),
  attribution: string()
    .default('&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors')
    .required(),
})
  .concat(objectWithId)
  .required()
