import { Type as T } from '@sinclair/typebox'

export const Point = T.Tuple([T.Number({ minimum: -90, maximum: 90 }), T.Number({ minimum: -180, maximum: 180 })], {
  description: 'Latitude and longitude as tuple',
})

export const Bounds = T.Tuple([Point, Point])

export const DateTime = T.String({ format: 'date-time' })

export const FromTo = T.Tuple([DateTime, DateTime], { description: 'Start time and end time as tuple' })

export const Tile = T.Object({
  x: T.Integer(),
  y: T.Integer(),
  z: T.Integer(),
})
