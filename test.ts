import assert from 'node:assert/strict'

import { mapifestEvent } from './src/schemas'
import { color, datetime } from './src/utility-schemas'
import { baseVE } from './src/utils'
import { invalidEvents, validEvent } from './test-data'

const myUuid = crypto.randomUUID()

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

for (const v of ['#fff', 'rgba(255, 255, 255)', 'hsl(123deg, 100%, 0%)', 'pink', 'gray', 'grey', '#FFF', 'grAy'])
  assert.doesNotReject(color.validate(v))

for (const v of ['gray ', 'rgba(255, 255, 256)'])
  assert.rejects(color.validate(v), {
    errors: ['this is not a valid color'],
  })

const EVE = 'eve'
const EVE_ADMINS = [myUuid]
const minimalistEvent = mapifestEvent.cast({ name: EVE, adminIds: EVE_ADMINS })
assert.equal(minimalistEvent.name, EVE)
assert.equal(minimalistEvent.adminIds, EVE_ADMINS)

console.log(JSON.stringify(minimalistEvent, null, 2))
