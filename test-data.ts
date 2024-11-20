import { HeroType, IconSize } from './src/constants'
import type { Schemas } from './src/index'

const LOREM_IPSUM = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula ex at vulputate maximus. Nunc vitae orci sit amet metus elementum convallis sollicitudin id dolor. Praesent euismod nisl at tortor pharetra, in lobortis ipsum aliquam. Etiam eget lectus porttitor, mattis risus non, sollicitudin velit. Donec sit amet ipsum lectus. Aenean in ligula nulla. Integer in purus mollis leo vehicula vehicula vel eget lorem. Suspendisse eu est consequat, fringilla mi condimentum, lacinia diam.

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi at ex id quam consectetur porta. Nulla condimentum quis urna eu venenatis. Maecenas id ex maximus, pharetra nunc ut, vestibulum erat. Nulla et ipsum quam. Maecenas eget accumsan mi, a commodo nisl. Maecenas in augue a eros condimentum porta. Nunc imperdiet ligula nunc, eu posuere dolor congue eget. Aenean tempor hendrerit commodo. Cras turpis turpis, commodo ac metus nec, accumsan auctor turpis. Nam eu libero et nunc porta rutrum.

Vivamus consequat, est id auctor bibendum, sem purus hendrerit ipsum, ut bibendum lacus quam sit amet eros. Integer faucibus aliquet leo, in condimentum arcu ultricies id. Fusce risus mauris, viverra eget metus vel, pretium maximus sapien. Duis consectetur vehicula nibh, at blandit sapien sodales eu. Pellentesque pulvinar sodales augue. Nam quis porta ex, quis varius velit. Cras vitae mauris facilisis, ultrices nunc nec, commodo dolor. Cras vel congue mauris, eget ornare enim.

Donec varius ipsum eget mi iaculis, ut venenatis ligula sodales. In consequat sit amet velit quis convallis. Nunc eu egestas urna, vel tincidunt nisl. Vivamus elit sem, fermentum sit amet est aliquet, ultricies lobortis leo. Vestibulum finibus arcu sit amet dui vehicula, quis elementum massa varius. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec efficitur nibh ut odio fermentum, sed luctus est auctor. Etiam volutpat tellus non libero ornare tincidunt. Fusce vehicula placerat ante, consequat pulvinar augue consequat at.

Morbi nulla dolor, egestas vel orci vitae, ornare dapibus urna. Fusce lobortis purus nibh, sit amet euismod massa interdum sed. Morbi ut facilisis mauris. Suspendisse a dignissim enim, id pulvinar magna. Nunc vitae vulputate magna. Donec sodales felis et imperdiet varius. Proin et tortor ipsum. Ut mi justo, ullamcorper quis gravida sed, aliquam sit amet eros. Maecenas luctus nec mauris blandit porttitor. Sed in faucibus velit. Donec sit amet sagittis lorem. Duis fringilla libero vitae pellentesque eleifend.
`.trim()

const RICH_IPSUM = LOREM_IPSUM.replace(/Lorem/g, '**Lorem**')

type MapifestEvent = Schemas['MapifestEvent']

export const validEvent: MapifestEvent = {
  id: 'ed63396f-9925-4e98-9b7d-96e7d62297a8',
  name: 'Full long absolute name',
  shortName: 'Short name',
  fromTo: ['2024-09-24T09:30:03.395Z', '2024-09-28T09:30:03.395Z'],
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  tileSchema: 'https://tiles-{s}.sallamois.online/{z}/{x}/{y}.png',
  themeColor: 'white',
  adminIds: ['ddbfa239-326c-4a43-9231-7846e74a03e7', '275ef75f-d342-4919-a8d3-2470c987cf91'],
  description: LOREM_IPSUM,
  descriptionRichText: RICH_IPSUM,
  appIconUrl: 'https://placehold.co/512x512.png',
  userIcon: {
    iconUrl: 'http://127.0.0.1:3000/marker-icons/854902-navigation-maps/049-placeholder.svg',
    iconSize: IconSize.MEDIUM,
  },
  bounds: [
    [58.95132, 26.37354],
    [58.95603, 26.38439],
  ],
  center: [58.95402210698978, 26.37804676080017],
  tiles: [
    [37569, 19405, 16],
    [37569, 19406, 16],
    [37569, 19407, 16],
  ],
  pois: [
    {
      id: '61be260b-a6fc-4fe8-bcf4-4119d4e2ab73',
      title: 'POI title',
      iconUrl: 'http://127.0.0.1:3000/marker-icons/854902-navigation-maps/049-placeholder.svg',
      iconSize: IconSize.MEDIUM,
      description: 'POI description',
      coordinates: [58.95402210698978, 26.37804676080017],
      hero: {
        type: HeroType.IMAGE,
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Cumulus_Clouds_over_Yellow_Prairie2.jpg/1920px-Cumulus_Clouds_over_Yellow_Prairie2.jpg',
      },
    },
  ],
}

export const invalidEvents = {
  id: {
    ...structuredClone(validEvent),
    id: validEvent.id.replace(/-/gi, ''),
  },
}
