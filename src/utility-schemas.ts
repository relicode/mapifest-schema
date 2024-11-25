import { number, object, string, tuple } from 'yup'
import { defaults, ICON_SIZES, HeroType, colorLiterals } from './constants.js'
import _ from 'lodash'

export const coordinates = tuple([
  number().min(-90).max(90).required().label('latitude'),
  number().min(-180).max(180).required().label('longitude'),
  // number().positive().min(0).label('altitude').optional(),
]).required()

export const bounds = tuple([coordinates.label('first corner'), coordinates.label('second corner')]).required()

export const datetime = string()
  .datetime()
  .default(() => new Date().toISOString())
  .required()

export const fromTo = tuple([datetime.label('from'), datetime.label('to')]).required()

export const tile = tuple([
  number().label('x').integer().positive().required(),
  number().label('y').integer().positive().required(),
  number().label('z').integer().positive().required(),
]).required()

export const id = string().uuid().required()

export const objectWithId = object({
  id,
}).required()

export const objectWithIcon = object({
  iconUrl: string().url().required(),
  iconSize: number().oneOf(ICON_SIZES).default(defaults.iconSize).required(),
}).required()

export const hero = object({
  type: string().oneOf([HeroType.IMAGE, HeroType.YOUTUBE]).required(),
  url: string().url().required(),
})

const colorHexRE = /#[a-f\d]{3}(?:[a-f\d]?|(?:[a-f\d]{3}(?:[a-f\d]{2})?)?)\b/
const colorHslRE =
  /hsla?\((?:(-?\d+(?:deg|g?rad|turn)?),\s*((?:\d{1,2}|100)%),\s*((?:\d{1,2}|100)%)(?:,\s*((?:\d{1,2}|100)%|0(?:\.\d+)?|1))?|(-?\d+(?:deg|g?rad|turn)?)\s+((?:\d{1,2}|100)%)\s+((?:\d{1,2}|100)%)(?:\s+((?:\d{1,2}|100)%|0(?:\.\d+)?|1))?)\)/
const colorRgbRE =
  /rgba?\((?:(25[0-5]|2[0-4]\d|1?\d{1,2}|(?:\d{1,2}|100)%),\s*(25[0-5]|2[0-4]\d|1?\d{1,2}|(?:\d{1,2}|100)%),\s*(25[0-5]|2[0-4]\d|1?\d{1,2}|(?:\d{1,2}|100)%)(?:,\s*((?:\d{1,2}|100)%|0(?:\.\d+)?|1))?|(25[0-5]|2[0-4]\d|1?\d{1,2}|(?:\d{1,2}|100)%)\s+(25[0-5]|2[0-4]\d|1?\d{1,2}|(?:\d{1,2}|100)%)\s+(25[0-5]|2[0-4]\d|1?\d{1,2}|(?:\d{1,2}|100)%)(?:\s+((?:\d{1,2}|100)%|0(?:\.\d+)?|1))?)\)/

export const color = string()
  .transform((value) => (typeof value === 'string' ? value.toLowerCase() : value))
  .test(
    'is-color',
    '${path} is not a valid color',
    (value = '') =>
      _.includes(colorLiterals, value) || colorHexRE.test(value) || colorHslRE.test(value) || colorRgbRE.test(value)
  )
  .required()
