import assert from 'node:assert/strict'

import { mapifestEvent } from './src/schemas'
import { color, datetime, id } from './src/utility-schemas'
import { baseValidationError } from './src/utils'
import { defaults, IconSize } from './src/constants'
import { invalidEvents, validEvent } from './test-data'

const myUuid = crypto.randomUUID()

// Sync use
assert.throws(() => datetime.validateSync('sdfsgsd'), {
  ...baseValidationError,
  type: 'datetime',
  errors: ['this must be a valid ISO date-time'],
})

// Async use
assert.rejects(datetime.validate('sdfsgsd'), {
  ...baseValidationError,
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

const EVE_ADMINS = [myUuid]
const EVE_NAME = 'minimalist event'

const startDate = new Date()
const endDate = new Date(startDate)
endDate.setDate(endDate.getDate() + 3) // Three days from startDate
const fromTo = [startDate, endDate].map((date) => date.toISOString())

const minimalistEvent = mapifestEvent.cast({
  id: crypto.randomUUID(),
  name: EVE_NAME,
  shortName: EVE_NAME.slice(0, 3),
  adminIds: EVE_ADMINS,
  appIconUrl: 'https://placehold.co/512x512.png',
  fromTo,
  userIcon: {
    iconUrl: defaults.userIcon,
    iconSize: IconSize.MEDIUM,
  },
  center: defaults.sallaMois,
  bounds: [
    [58.956344, 26.370696],
    [58.95184, 26.383367],
  ],
})
assert.equal(minimalistEvent.name, EVE_NAME)
assert.equal(minimalistEvent.adminIds, EVE_ADMINS)

const mapifestEventWithOptionalId = mapifestEvent.shape({
  id: id.optional(),
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const trimId = <T extends Record<'id', string>>({ id, ...rest }: T) => ({ ...rest })

const trimmed = trimId(minimalistEvent)

assert.rejects(mapifestEvent.validate(trimmed))
assert.doesNotReject(mapifestEventWithOptionalId.validate(trimmed))

console.log(JSON.stringify(minimalistEvent, null, 2))
