import { array, object, string } from 'yup'

import { coordinates, bounds, fromTo, id, tile, hero, objectWithId, objectWithIcon, color } from './utility-schemas.js'
import { defaults } from './constants.js'

export const poi = object({
  coordinates: coordinates.required(),
  title: string().min(1).max(32).required(),
  description: string().max(16384).required(),
  hero: hero.optional(),
})
  .concat(objectWithId)
  .concat(objectWithIcon)
  .required()

const mapifestEventBase = object({
  adminIds: array().of(id).min(1).required(),
  bounds: bounds.required(),
  center: coordinates.required(),
  description: string().max(16384),
  fromTo: fromTo.required(),
  name: string().min(3).max(128).required(),
  pois: array().of(poi).default([]).required(),
  userIcon: objectWithIcon.required(),
  shortName: string().max(32),
  themeColor: color.default('#eef0d5').required(),
  tiles: array().of(tile).default([]).required(),
  tileSchema: string().default(defaults.tileSchema).required(),
  attribution: string().default(defaults.attribution).required(),
}).concat(objectWithId)

export const mapifestEvent = object({
  preview: mapifestEventBase.optional().default(undefined),
})
  .concat(mapifestEventBase)
  .required()
