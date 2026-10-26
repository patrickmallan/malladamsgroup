export type ContactFieldKey = 'name' | 'email' | 'message'
export type ContactFieldErrors = Partial<Record<ContactFieldKey, string>>

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

export function validateContactFields(values: { name: string; email: string; message: string }): ContactFieldErrors {
  const errors: ContactFieldErrors = {}
  if (!values.name.trim()) errors.name = 'Please add your name.'
  if (!values.email.trim()) errors.email = 'Please add your email.'
  else if (!isValidEmail(values.email)) errors.email = 'Please enter a valid email address.'
  if (!values.message.trim()) errors.message = 'Please share what brings you here.'
  return errors
}
