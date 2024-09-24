import type { Static } from '@sinclair/typebox'
import * as schemas from './schemas/index.js'

type SchemaTypes = typeof schemas

export { schemas }
export type Types = { [K in keyof SchemaTypes]: Static<SchemaTypes[K]> }
