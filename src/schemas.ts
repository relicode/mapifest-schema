export * from './schemas.js'
import { array, object, string } from 'yup'

import { bounds, fromTo, point, tile } from './utils.js'

export const mapifestEvent = object().shape({
  id: string().required().uuid(),
  description: string().min(0).max(4096),
  name: string().required().min(3).max(128),
  shortName: string().min(0).max(32),
  bounds,
  center: point.notRequired(),
  fromTo: fromTo,
  adminIds: array().required().of(string().required().uuid()).min(1),
  tiles: array().required().of(tile),
})
