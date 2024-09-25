import { object, string, number, tuple } from 'yup'

export const point = tuple([
  number().required().label('latitude').min(-90).max(90),
  number().required().label('longitude').min(-180).max(180),
]).required()

export const bounds = tuple([point.label('SouthWest'), point.label('NorthEast')]).required()

export const datetime = string().datetime().required()

export const fromTo = tuple([datetime.label('From'), datetime.label('To')]).required()

export const tile = object().shape({
  x: number().required().integer().positive().label('X coordinates'),
  y: number().required().integer().positive().label('Y coordinates'),
  z: number().required().integer().positive().label('Z coordinates'),
})
