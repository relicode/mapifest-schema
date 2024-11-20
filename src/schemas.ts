import { array, object, string } from 'yup'

import { coordinates, bounds, fromTo, id, tile, hero, objectWithId, objectWithIcon, color } from './utility-schemas.js'
import { defaults } from './constants.js'

export const poi = object({
  coordinates: coordinates.required(),
  title: string().min(1).max(32).required(),
  description: string().max(defaults.descriptionMaxLength).required(),
  hero: hero.default(undefined).optional(),
})
  .concat(objectWithId)
  .concat(objectWithIcon)
  .required()

const mapifestEventBase = object({
  adminIds: array().of(id).min(1).required(),
  bounds: bounds.required(),
  center: coordinates.required(),
  description: string().max(defaults.descriptionMaxLength),
  descriptionRichText: string().max(defaults.descriptionMaxLength * 2),
  fromTo: fromTo.required(),
  name: string().min(3).max(128).required(),
  pois: array().of(poi).default([]).required(),
  appIconUrl: string()
    .url()
    .matches(/.+\.png$/, 'appIconUrl needs to end with .png')
    .required(),
  userIcon: objectWithIcon.required(),
  shortName: string().max(32),
  themeColor: color.default(defaults.themeColor).required(),
  tiles: array().of(tile).default([]).required(),
  tileSchema: string().default(defaults.tileSchema).required(),
  attribution: string().default(defaults.attribution).required(),
}).concat(objectWithId)

export const mapifestEvent = object({
  preview: mapifestEventBase.optional().default(undefined),
})
  .concat(mapifestEventBase)
  .required()
