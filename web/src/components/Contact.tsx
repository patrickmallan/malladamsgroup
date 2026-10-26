import { useId, useState } from 'react'
import type { FormEvent } from 'react'
import { type ContactFieldErrors, validateContactFields } from '../lib/contactValidation'
import './Contact.css'

const WEB3FORMS_URL = 'https://api.web3forms.com/submit'

export function Contact() {
  const id = useId()
  const [errors, setErrors] = useState<ContactFieldErrors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined
  const hasBackend = Boolean(accessKey?.trim())

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    if (String(data.get('contact_website') ?? '').trim()) { setStatus('success'); form.reset(); return }
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const organization = String(data.get('organization') ?? '').trim()
    const interest = String(data.get('interest') ?? 'General Enquiry')
    const message = String(data.get('message') ?? '').trim()
    const nextErrors = validateContactFields({ name, email, message })
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return
    if (!hasBackend) { setStatus('error'); setErrorMessage('The form is not connected yet. Please use the email link to reach us.'); return }
    setStatus('sending')
    setErrorMessage('')
    try {
      const response = await fetch(WEB3FORMS_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ access_key: accessKey, subject: `Malladams Group enquiry: ${interest}`, name, email, from_name: name, message: `Area of interest: ${interest}\nOrganization: ${organization || 'Not provided'}\n\n${message}` }) })
      const result = await response.json() as { success?: boolean }
      if (!response.ok || !result.success) throw new Error('Submission failed')
      setStatus('success')
      form.reset()
    } catch { setStatus('error'); setErrorMessage('We could not send your note just now. Please use the email link to reach us.') }
  }

  return <section className="section section--contact connect-page"><div className="shell contact">
    <div className="contact__intro"><p className="eyebrow">Begin the conversation</p><h1 className="display display--xl contact__title">Ready to explore what could become possible?</h1><p className="body-text">If you lead an organization and sense something important beneath the familiar explanation, we welcome a thoughtful conversation. We also welcome enquiries about the wider Malladams Group vision.</p><p className="body-text">Please keep the initial note brief and leave out confidential personnel details.</p><p className="contact__email"><a href="mailto:hello@malladamsgroup.com">hello@malladamsgroup.com</a></p></div>
    <div className="contact__panel">{!hasBackend && <p className="contact__notice" role="status">The form is not connected yet. Please email <a href="mailto:hello@malladamsgroup.com">hello@malladamsgroup.com</a>.</p>}
      <form className="contact__form" onSubmit={onSubmit} noValidate>
        <div className="contact__hp" aria-hidden="true"><label htmlFor={`${id}-hp`}>Website</label><input id={`${id}-hp`} name="contact_website" type="text" tabIndex={-1} autoComplete="off" /></div>
        <div className="contact__field"><label className="contact__label" htmlFor={`${id}-name`}>Name *</label><input className="contact__input" id={`${id}-name`} name="name" autoComplete="name" required disabled={status === 'sending'} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? `${id}-name-error` : undefined} onInput={() => setErrors(previous => ({ ...previous, name: undefined }))}/>{errors.name && <p className="contact__field-error" id={`${id}-name-error`}>{errors.name}</p>}</div>
        <div className="contact__field"><label className="contact__label" htmlFor={`${id}-email`}>Email *</label><input className="contact__input" id={`${id}-email`} name="email" type="email" autoComplete="email" required disabled={status === 'sending'} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? `${id}-email-error` : undefined} onInput={() => setErrors(previous => ({ ...previous, email: undefined }))}/>{errors.email && <p className="contact__field-error" id={`${id}-email-error`}>{errors.email}</p>}</div>
        <div className="contact__field"><label className="contact__label" htmlFor={`${id}-organization`}>Organization <span className="contact__optional">optional</span></label><input className="contact__input" id={`${id}-organization`} name="organization" autoComplete="organization" disabled={status === 'sending'}/></div>
        <div className="contact__field"><label className="contact__label" htmlFor={`${id}-interest`}>Area of interest</label><select className="contact__input" id={`${id}-interest`} name="interest" disabled={status === 'sending'}><option>Leadership Engagement</option><option>Future Environments</option><option>General Enquiry</option></select></div>
        <div className="contact__field"><label className="contact__label" htmlFor={`${id}-message`}>What brings you here? *</label><textarea className="contact__input" id={`${id}-message`} name="message" rows={5} required disabled={status === 'sending'} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? `${id}-message-error` : undefined} onInput={() => setErrors(previous => ({ ...previous, message: undefined }))}/>{errors.message && <p className="contact__field-error" id={`${id}-message-error`}>{errors.message}</p>}</div>
        {status === 'error' && <p className="contact__feedback contact__feedback--error" role="alert">{errorMessage}</p>}
        {status === 'success' && <p className="contact__feedback" role="status">Thank you. Your note has been received.</p>}
        <button className="btn btn--primary" type="submit" disabled={status === 'sending' || status === 'success' || !hasBackend}>{status === 'sending' ? 'Sending…' : 'Send Enquiry'}</button>
      </form>
    </div>
  </div></section>
}
