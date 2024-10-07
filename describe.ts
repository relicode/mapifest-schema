import type { Schema } from 'yup'

import * as mainSchemas from './src/schemas.js'
import * as utilitySchemas from './src/utility-schemas.js'

const wrapJs = (name: string, schema: Schema) => {
  console.log(`### ${name}`)
  console.log('```json')
  console.log(JSON.stringify(schema.describe(), null, 2))
  console.log('```')
  console.log()
}

console.log(`\
# Schemas

## Main schemas
`)

for (const [key, val] of Object.entries(mainSchemas)) {
  wrapJs(key, val)
}

console.log('## Utility schemas\n')

for (const [key, val] of Object.entries(utilitySchemas)) {
  wrapJs(key, val)
}
