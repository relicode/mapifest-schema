import { number, object, string, tuple } from 'yup'
import { HERO_TYPES } from './constants'

export const coordinates = tuple([
  number().min(-90).max(90).required().label('latitude'),
  number().min(-180).max(180).required().label('longitude'),
  // nnumber().positive().min(0).label('altitude'),
]).required()

export const bounds = tuple([coordinates.label('first corner'), coordinates.label('second corner')]).required()

export const datetime = string().datetime().required()

export const fromTo = tuple([datetime.label('from'), datetime.label('to')]).required()

export const tile = object({
  x: number().integer().positive().required(),
  y: number().integer().positive().required(),
  z: number().integer().positive().required(),
}).required()

export const id = string().uuid().required()

export const objectWithId = object({
  id,
}).required()

export const hero = object({
  type: string().oneOf(HERO_TYPES).required(),
  url: string().url().required(),
}).required()
