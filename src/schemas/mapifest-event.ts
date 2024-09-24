import { Type as T } from '@sinclair/typebox'

import { Bounds, FromTo, Point, Tile } from './utils.js'

export const MapifestEvent = T.Object({
  id: T.String({ format: 'uuid' }),
  name: T.String({ minLength: 3, maxLength: 128 }),
  shortName: T.Optional(T.String({ minLength: 0, maxLength: 32 })),
  bounds: Bounds,
  center: Point,
  time: FromTo,
  adminIds: T.Array(T.String({ format: 'uuid' }), { minItems: 1 }),
  description: T.String({ maxLength: 4096 }),
  tiles: T.Array(Tile),
})
