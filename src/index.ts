import { mapifestEvent } from './schemas.js'

import type { InferType } from 'yup'

export { mapifestEvent }
export type MapifestEvent = InferType<typeof mapifestEvent>
