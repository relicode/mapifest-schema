import type { ValidationError } from 'yup'

export const VALIDATION_ERROR = 'ValidationError' as const

export const baseValidationError = { name: VALIDATION_ERROR } as const

export const isValidationError = (e: unknown): e is ValidationError =>
  !!e && typeof e === 'object' && 'name' in e && e.name === VALIDATION_ERROR
