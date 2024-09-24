import addFormats from 'ajv-formats'
import Ajv from 'ajv'
import { DateTime } from './src/schemas/utils'

const ajv = addFormats(new Ajv({}), [
  'date-time',
  'time',
  'date',
  'email',
  'hostname',
  'ipv4',
  'ipv6',
  'uri',
  'uri-reference',
  'uuid',
  'uri-template',
  'json-pointer',
  'relative-json-pointer',
  'regex',
])

const validateDateTime = ajv.compile(DateTime)

console.log(validateDateTime('sdfsgsd'))
console.log(validateDateTime('2024-09-24T08:50:07'))

console.log(validateDateTime('2024-09-24T08:50:07.887Z'))
console.log(validateDateTime('2024-09-24T08:50:07Z'))

