import { Type as T } from '@sinclair/typebox'

export const Point = T.Object({
  lat: T.Number({ minimum: -90, maximum: 90 }),
  lon: T.Number({ minimum: -180, maximum: 180 }),
})

export const Bounds = T.Tuple([Point, Point])

export const DateTime = T.String({ format: 'date-time' })

export const When = T.Tuple([DateTime, DateTime])

/*
const when = z.object({
  from: timeString,
  to: timeString,
})

export const mapifestEvent = z
  .object({
    id: z.string().default(randomUUID),
    name: z.string().default(''),
    adminIds: z.array(z.string()).default([]),
    description: z.string().default(''),
    tiles: z.array(z.string()).default([]),
  })
  .merge(when)
*/
