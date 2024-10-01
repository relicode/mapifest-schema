import { array, object, string } from 'yup'

import { coordinates, bounds, fromTo, id, tile, hero, objectWithId, color } from './utility-schemas.js'

export const poi = object({
  coordinates: coordinates,
  title: string().min(1).max(32).required(),
  description: string().max(16384),
  hero: hero.optional(),
}).concat(objectWithId)

export const mapifestEvent = object({
  adminIds: array().of(id).min(1).required(),
  bounds: bounds.default([
    [0, 0],
    [0, 0],
  ]),
  center: coordinates.default([0, 0]),
  description: string().max(4096),
  fromTo,
  name: string().min(3).max(128).required(),
  pois: array().of(poi).required(),
  shortName: string().max(32),
  themeColor: color.default('white'),
  tiles: array().of(tile).required(),
  tileSchema: string().default('https://tile.openstreetmap.org/{z}/{x}/{y}.png'),
  attribution: string().default(
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  ),
}).concat(objectWithId)
