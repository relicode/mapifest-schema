import { Type } from '@sinclair/typebox'

import { Bounds } from './utils'

const { Object, Optional, String } = Type

export const MapifestEvent = Object({
  id: String({ format: 'uuid' }),
  name: String({ minLength: 3, maxLength: 128 }),
  shortName: Optional(String({ minLength: 3, maxLength: 32 })),
  bounds: Bounds,
})
