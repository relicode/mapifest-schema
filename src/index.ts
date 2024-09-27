import type { InferType } from 'yup'

import * as constants from './constants.js'
import * as schemas from './schemas.js'
import * as utils from './utils.js'
import * as utilityTypes from './utility-types.js'

export { constants, schemas, utils }

type Schemas = typeof schemas
type UtilityTypes = typeof utilityTypes
type Constants = typeof constants

export type Types = { [K in keyof Schemas as Capitalize<K>]: InferType<Schemas[K]> } & {
  [K in keyof UtilityTypes as Capitalize<K>]: InferType<UtilityTypes[K]> & {
    [K in keyof Constants]: Constants[K]
  }
}

export default schemas
