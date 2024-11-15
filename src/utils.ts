import type { ValidationError } from 'yup'

export const VALIDATION_ERROR = 'ValidationError' as const

export const isValidationError = (e: unknown): e is ValidationError =>
  typeof e === 'function' && e.name === VALIDATION_ERROR

export const baseValidationError = { name: VALIDATION_ERROR } as const
