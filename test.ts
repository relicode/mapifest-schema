import assert from 'node:assert'

import { mapifestEvent } from './src/schemas'
import { datetime } from './src/utils'

assert.rejects(datetime.validate('sdfsgsd'))
assert.rejects(datetime.validate('2024-09-24T08:50:07'))
assert.doesNotReject(datetime.validate('2024-09-24T08:50:07.887Z'))
assert.doesNotReject(datetime.validate('2024-09-24T08:50:07Z'))

const LOREM_IPSUM = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula ex at vulputate maximus. Nunc vitae orci sit amet metus elementum convallis sollicitudin id dolor. Praesent euismod nisl at tortor pharetra, in lobortis ipsum aliquam. Etiam eget lectus porttitor, mattis risus non, sollicitudin velit. Donec sit amet ipsum lectus. Aenean in ligula nulla. Integer in purus mollis leo vehicula vehicula vel eget lorem. Suspendisse eu est consequat, fringilla mi condimentum, lacinia diam.

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi at ex id quam consectetur porta. Nulla condimentum quis urna eu venenatis. Maecenas id ex maximus, pharetra nunc ut, vestibulum erat. Nulla et ipsum quam. Maecenas eget accumsan mi, a commodo nisl. Maecenas in augue a eros condimentum porta. Nunc imperdiet ligula nunc, eu posuere dolor congue eget. Aenean tempor hendrerit commodo. Cras turpis turpis, commodo ac metus nec, accumsan auctor turpis. Nam eu libero et nunc porta rutrum.

Vivamus consequat, est id auctor bibendum, sem purus hendrerit ipsum, ut bibendum lacus quam sit amet eros. Integer faucibus aliquet leo, in condimentum arcu ultricies id. Fusce risus mauris, viverra eget metus vel, pretium maximus sapien. Duis consectetur vehicula nibh, at blandit sapien sodales eu. Pellentesque pulvinar sodales augue. Nam quis porta ex, quis varius velit. Cras vitae mauris facilisis, ultrices nunc nec, commodo dolor. Cras vel congue mauris, eget ornare enim.

Donec varius ipsum eget mi iaculis, ut venenatis ligula sodales. In consequat sit amet velit quis convallis. Nunc eu egestas urna, vel tincidunt nisl. Vivamus elit sem, fermentum sit amet est aliquet, ultricies lobortis leo. Vestibulum finibus arcu sit amet dui vehicula, quis elementum massa varius. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec efficitur nibh ut odio fermentum, sed luctus est auctor. Etiam volutpat tellus non libero ornare tincidunt. Fusce vehicula placerat ante, consequat pulvinar augue consequat at.

Morbi nulla dolor, egestas vel orci vitae, ornare dapibus urna. Fusce lobortis purus nibh, sit amet euismod massa interdum sed. Morbi ut facilisis mauris. Suspendisse a dignissim enim, id pulvinar magna. Nunc vitae vulputate magna. Donec sodales felis et imperdiet varius. Proin et tortor ipsum. Ut mi justo, ullamcorper quis gravida sed, aliquam sit amet eros. Maecenas luctus nec mauris blandit porttitor. Sed in faucibus velit. Donec sit amet sagittis lorem. Duis fringilla libero vitae pellentesque eleifend.
`.trim()

const TILES = [
  { z: 16, x: 37569, y: 19405 },
  { z: 16, x: 37569, y: 19406 },
  { z: 16, x: 37569, y: 19407 },
  { z: 16, x: 37570, y: 19405 },
  { z: 16, x: 37570, y: 19406 },
  { z: 16, x: 37570, y: 19407 },
  { z: 16, x: 37571, y: 19405 },
  { z: 16, x: 37571, y: 19406 },
  { z: 16, x: 37571, y: 19407 },
  { z: 17, x: 75138, y: 38811 },
  { z: 17, x: 75138, y: 38812 },
  { z: 17, x: 75138, y: 38813 },
  { z: 17, x: 75138, y: 38814 },
  { z: 17, x: 75138, y: 38815 },
  { z: 17, x: 75139, y: 38811 },
  { z: 17, x: 75139, y: 38812 },
  { z: 17, x: 75139, y: 38813 },
  { z: 17, x: 75139, y: 38814 },
  { z: 17, x: 75139, y: 38815 },
  { z: 17, x: 75140, y: 38811 },
  { z: 17, x: 75140, y: 38812 },
  { z: 17, x: 75140, y: 38813 },
  { z: 17, x: 75140, y: 38814 },
  { z: 17, x: 75140, y: 38815 },
  { z: 17, x: 75141, y: 38811 },
  { z: 17, x: 75141, y: 38812 },
  { z: 17, x: 75141, y: 38813 },
  { z: 17, x: 75141, y: 38814 },
  { z: 17, x: 75141, y: 38815 },
  { z: 17, x: 75142, y: 38811 },
  { z: 17, x: 75142, y: 38812 },
  { z: 17, x: 75142, y: 38813 },
  { z: 17, x: 75142, y: 38814 },
  { z: 17, x: 75142, y: 38815 },
  { z: 18, x: 150276, y: 77623 },
  { z: 18, x: 150276, y: 77624 },
  { z: 18, x: 150276, y: 77625 },
  { z: 18, x: 150276, y: 77626 },
  { z: 18, x: 150276, y: 77627 },
  { z: 18, x: 150276, y: 77628 },
  { z: 18, x: 150276, y: 77629 },
  { z: 18, x: 150276, y: 77630 },
  { z: 18, x: 150277, y: 77623 },
  { z: 18, x: 150277, y: 77624 },
  { z: 18, x: 150277, y: 77625 },
  { z: 18, x: 150277, y: 77626 },
  { z: 18, x: 150277, y: 77627 },
  { z: 18, x: 150277, y: 77628 },
  { z: 18, x: 150277, y: 77629 },
  { z: 18, x: 150277, y: 77630 },
  { z: 18, x: 150278, y: 77623 },
  { z: 18, x: 150278, y: 77624 },
  { z: 18, x: 150278, y: 77625 },
  { z: 18, x: 150278, y: 77626 },
  { z: 18, x: 150278, y: 77627 },
  { z: 18, x: 150278, y: 77628 },
  { z: 18, x: 150278, y: 77629 },
  { z: 18, x: 150278, y: 77630 },
  { z: 18, x: 150279, y: 77623 },
  { z: 18, x: 150279, y: 77624 },
  { z: 18, x: 150279, y: 77625 },
  { z: 18, x: 150279, y: 77626 },
  { z: 18, x: 150279, y: 77627 },
  { z: 18, x: 150279, y: 77628 },
  { z: 18, x: 150279, y: 77629 },
  { z: 18, x: 150279, y: 77630 },
  { z: 18, x: 150280, y: 77623 },
  { z: 18, x: 150280, y: 77624 },
  { z: 18, x: 150280, y: 77625 },
  { z: 18, x: 150280, y: 77626 },
  { z: 18, x: 150280, y: 77627 },
  { z: 18, x: 150280, y: 77628 },
  { z: 18, x: 150280, y: 77629 },
  { z: 18, x: 150280, y: 77630 },
  { z: 18, x: 150281, y: 77623 },
  { z: 18, x: 150281, y: 77624 },
  { z: 18, x: 150281, y: 77625 },
  { z: 18, x: 150281, y: 77626 },
  { z: 18, x: 150281, y: 77627 },
  { z: 18, x: 150281, y: 77628 },
  { z: 18, x: 150281, y: 77629 },
  { z: 18, x: 150281, y: 77630 },
  { z: 18, x: 150282, y: 77623 },
  { z: 18, x: 150282, y: 77624 },
  { z: 18, x: 150282, y: 77625 },
  { z: 18, x: 150282, y: 77626 },
  { z: 18, x: 150282, y: 77627 },
  { z: 18, x: 150282, y: 77628 },
  { z: 18, x: 150282, y: 77629 },
  { z: 18, x: 150282, y: 77630 },
  { z: 18, x: 150283, y: 77623 },
  { z: 18, x: 150283, y: 77624 },
  { z: 18, x: 150283, y: 77625 },
  { z: 18, x: 150283, y: 77626 },
  { z: 18, x: 150283, y: 77627 },
  { z: 18, x: 150283, y: 77628 },
  { z: 18, x: 150283, y: 77629 },
  { z: 18, x: 150283, y: 77630 },
  { z: 18, x: 150284, y: 77623 },
  { z: 18, x: 150284, y: 77624 },
  { z: 18, x: 150284, y: 77625 },
  { z: 18, x: 150284, y: 77626 },
  { z: 18, x: 150284, y: 77627 },
  { z: 18, x: 150284, y: 77628 },
  { z: 18, x: 150284, y: 77629 },
  { z: 18, x: 150284, y: 77630 },
]

const validEvent = {
  id: 'ed63396f-9925-4e98-9b7d-96e7d62297a8',
  name: 'Full long absolute name',
  shortName: 'Short name',
  fromTo: ['2024-09-24T09:30:03.395Z', '2024-09-28T09:30:03.395Z'],
  adminIds: ['ddbfa239-326c-4a43-9231-7846e74a03e7', '275ef75f-d342-4919-a8d3-2470c987cf91'],
  description: LOREM_IPSUM,
  bounds: [
    [58.95132, 26.37354],
    [58.95603, 26.38439],
  ],
  center: [58.95402210698978, 26.37804676080017],
  tiles: TILES,
}

assert.doesNotReject(mapifestEvent.validate(validEvent))

const invalidEvent = structuredClone(validEvent)
invalidEvent.id = invalidEvent.id.replace(/-/gi, '')

assert.rejects(mapifestEvent.validate(invalidEvent))
