import assert from 'node:assert/strict'

import { mapifestEvent } from './src/schemas'
import { datetime } from './src/utility-schemas'
import { baseVE } from './src/utils'
import { invalidEvents, validEvent } from './test-data'

// Sync use
assert.throws(() => datetime.validateSync('sdfsgsd'), {
  ...baseVE,
  type: 'datetime',
  errors: ['this must be a valid ISO date-time'],
})

// Async use
assert.rejects(datetime.validate('sdfsgsd'), {
  ...baseVE,
  type: 'datetime',
  errors: ['this must be a valid ISO date-time'],
})
assert.rejects(datetime.validate('2024-09-24T08:50:07'))

assert.rejects(mapifestEvent.validate(invalidEvents.id), {
  errors: ['id must be a valid UUID'],
})

assert.doesNotReject(datetime.validate('2024-09-24T08:50:07.887Z'))
assert.doesNotReject(datetime.validate('2024-09-24T08:50:07Z'))
assert.doesNotReject(mapifestEvent.validate(validEvent))
