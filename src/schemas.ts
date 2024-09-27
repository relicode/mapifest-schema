export * from './schemas.js'
import { array, object, string } from 'yup'

import { coordinates, bounds, fromTo, id, tile, hero, objectWithId } from './utility-schemas.js'

export const poi = object({
  coordinates: coordinates.required(),
  title: string().min(1).max(32).required(),
  description: string().max(16384),
  hero: hero.notRequired(),
}).concat(objectWithId)

export const mapifestEvent = object({
  description: string().max(4096),
  name: string().min(3).max(128).required(),
  shortName: string().max(32),
  bounds,
  center: coordinates,
  fromTo,
  adminIds: array().of(id).min(1).required(),
  tiles: array().of(tile).required(),
  pois: array().of(poi).required(),
}).concat(objectWithId)
