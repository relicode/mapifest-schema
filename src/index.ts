import type { InferType } from 'yup'

import * as constants from './constants.js'
import * as schemas from './schemas.js'
import * as utils from './utils.js'
import * as utilitySchemas from './utility-schemas.js'

export { constants, schemas, utilitySchemas, utils }

type SchemaTypes = typeof schemas
type UtilitySchemaTypes = typeof utilitySchemas

export type Schemas = { [K in keyof SchemaTypes as Capitalize<K>]: InferType<SchemaTypes[K]> }

export type UtilityTypes = {
  [K in keyof UtilitySchemaTypes as Capitalize<K>]: InferType<UtilitySchemaTypes[K]>
}

export default schemas
