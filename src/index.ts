import type { InferType } from 'yup'

import * as constants from './constants.js'
import * as schemas from './schemas.js'
import * as utils from './utils.js'
import * as utilitySchemas from './utility-schemas.js'

export { constants, schemas, utils }

type Schemas = typeof schemas
type UtilitySchemas = typeof utilitySchemas
type Constants = typeof constants

export type Types = { [K in keyof Schemas as Capitalize<K>]: InferType<Schemas[K]> } & {
  [K in keyof Constants]: Constants[K]
}

export type UtilityTypes = {
  [K in keyof UtilitySchemas as Capitalize<K>]: InferType<UtilitySchemas[K]>
}

export default schemas
