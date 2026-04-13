export type ContactFieldKey = 'name' | 'email' | 'building' | 'referral'

export type ContactFieldErrors = Partial<Record<ContactFieldKey, string>>

export function isValidEmail(value: string): boolean {
  const v = value.trim()
  if (!v) return false
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
}

export function validateContactFields(values: {
  name: string
  email: string
  building: string
  referral: string
}): ContactFieldErrors {
  const errors: ContactFieldErrors = {}
  if (!values.name.trim()) {
    errors.name = 'Please add your name.'
  }
  if (!values.email.trim()) {
    errors.email = 'Please add your email.'
  } else if (!isValidEmail(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.building.trim()) {
    errors.building = 'Please share a few words about what you are building.'
  }
  if (!values.referral.trim()) {
    errors.referral = 'Please let us know how you found us.'
  }
  return errors
}
