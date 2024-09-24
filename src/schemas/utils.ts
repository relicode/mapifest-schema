import { Type } from '@sinclair/typebox'

const { Number, Object, Tuple } = Type

export const Point = Object({
  lat: Number({ minimum: -90, maximum: 90 }),
  lon: Number({ minimum: -180, maximum: 180 }),
})

export const Bounds = Tuple([Point, Point])
