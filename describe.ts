import * as schemas from './src/schemas.js'
import * as utilitySchemas from './src/utility-schemas.js'

console.log('# Schemas')

console.log('## Main')
for (const [name, schema] of Object.entries(schemas)) {
  console.log(name, schema)
}

console.log('## Utility')
for (const [name, schema] of Object.entries(utilitySchemas)) {
  console.log(name, schema)
}

