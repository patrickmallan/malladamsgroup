import { useId, useState } from 'react'
import type { FormEvent } from 'react'
import {
  type ContactFieldErrors,
  type ContactFieldKey,
  validateContactFields,
} from '../lib/contactValidation'
import { RevealSection } from './RevealSection'
import './Contact.css'

const WEB3FORMS_URL = 'https://api.web3forms.com/submit'

const FIELD_LABEL: Record<ContactFieldKey, string> = {
  name: 'Name',
  email: 'Email',
  building: 'What are you building?',
  referral: 'How did you find us?',
}

export function Contact() {
  const formId = useId()
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>(
    'idle'
  )
  const [errorMessage, setErrorMessage] = useState('')

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as
    | string
    | undefined
  const hasFormBackend = Boolean(accessKey?.trim())

  function clearFieldError(key: ContactFieldKey) {
    setFieldErrors((prev) => {
      if (!prev[key]) return prev
      const next = { ...prev }
      delete next[key]
      return next
    })
  }

  function resetToIdle() {
    setStatus('idle')
    setErrorMessage('')
    setFieldErrors({})
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const honeypot = String(fd.get('contact_website') ?? '').trim()
    if (honeypot) {
      setFieldErrors({})
      setErrorMessage('')
      setStatus('success')
      form.reset()
      return
    }

    const name = String(fd.get('name') ?? '').trim()
    const email = String(fd.get('email') ?? '').trim()
    const building = String(fd.get('building') ?? '').trim()
    const referral = String(fd.get('referral') ?? '').trim()

    const errors = validateContactFields({
      name,
      email,
      building,
      referral,
    })
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      setErrorMessage('')
      setStatus('idle')
      return
    }

    if (!hasFormBackend) {
      setStatus('error')
      setErrorMessage('')
      return
    }

    setFieldErrors({})
    setStatus('sending')
    setErrorMessage('')

    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: 'Consultation inquiry, malladamsgroup.com',
          name,
          email,
          from_name: name,
          message: [
            'What are you building?',
            building,
            '',
            'How did you find us?',
            referral,
          ].join('\n'),
        }),
      })
      const data = (await res.json()) as { success?: boolean; message?: string }
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Something went wrong.')
      }
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
      setErrorMessage(
        'We could not send your note just now. You are welcome to write directly to hello@malladamsgroup.com.'
      )
    }
  }

  const busy = status === 'sending'
  const locked = busy || status === 'success'
  const submitDisabled = busy || !hasFormBackend

  return (
    <RevealSection id="contact" className="section section--contact">
      <div className="shell contact">
        <div className="contact__intro">
          <p className="eyebrow">Begin</p>
          <h2 className="display display--lg contact__title">
            Ready to build something that lasts?
          </h2>
          <p className="body-text">
            If you&apos;ve been feeling the gap between the space you&apos;re in
            and the one you know is possible, and between the organization you&apos;re
            running and the one you know it could be, this is the conversation
            you&apos;ve been waiting to have.
          </p>
          <p className="body-text">
            A consultation with Malladams Group is not a sales call. It is a
            genuine inquiry into what you are building, what it needs to truly
            hold, and whether we are the right partners to help you get there.
          </p>
          <p className="body-text">
            We work with a small number of clients and projects at a time. Every
            engagement begins personally, with Annissa and Patrick, not a team
            member, not a process. With the people who will actually do the work.
          </p>
          <p className="contact__email">
            <a href="mailto:hello@malladamsgroup.com">hello@malladamsgroup.com</a>
          </p>
          <p className="body-text contact__closing">
            We review every inquiry personally.
          </p>
        </div>

        <div className="contact__panel">
          {!hasFormBackend && (
            <p className="contact__notice" role="status">
              The inquiry form will be connected shortly. For now, please write to{' '}
              <a href="mailto:hello@malladamsgroup.com">hello@malladamsgroup.com</a>
              .
            </p>
          )}

          <form
            className="contact__form"
            id={`${formId}-form`}
            onSubmit={onSubmit}
            noValidate
          >
            {/* Honeypot: bots only */}
            <div className="contact__hp" aria-hidden="true">
              <label htmlFor={`${formId}-hp`}>Company website</label>
              <input
                id={`${formId}-hp`}
                name="contact_website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor={`${formId}-name`}>
                {FIELD_LABEL.name}
              </label>
              <input
                id={`${formId}-name`}
                name="name"
                type="text"
                autoComplete="name"
                required
                disabled={locked}
                aria-invalid={fieldErrors.name ? 'true' : undefined}
                aria-describedby={
                  fieldErrors.name ? `${formId}-name-err` : undefined
                }
                className={fieldErrors.name ? 'contact__input contact__input--error' : 'contact__input'}
                onInput={() => clearFieldError('name')}
              />
              {fieldErrors.name && (
                <p id={`${formId}-name-err`} className="contact__field-error" role="alert">
                  {fieldErrors.name}
                </p>
              )}
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor={`${formId}-email`}>
                {FIELD_LABEL.email}
              </label>
              <input
                id={`${formId}-email`}
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                required
                disabled={locked}
                aria-invalid={fieldErrors.email ? 'true' : undefined}
                aria-describedby={
                  fieldErrors.email ? `${formId}-email-err` : undefined
                }
                className={
                  fieldErrors.email ? 'contact__input contact__input--error' : 'contact__input'
                }
                onInput={() => clearFieldError('email')}
              />
              {fieldErrors.email && (
                <p id={`${formId}-email-err`} className="contact__field-error" role="alert">
                  {fieldErrors.email}
                </p>
              )}
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor={`${formId}-building`}>
                {FIELD_LABEL.building}
              </label>
              <textarea
                id={`${formId}-building`}
                name="building"
                rows={5}
                required
                disabled={locked}
                aria-invalid={fieldErrors.building ? 'true' : undefined}
                aria-describedby={
                  fieldErrors.building ? `${formId}-building-err` : undefined
                }
                className={
                  fieldErrors.building
                    ? 'contact__input contact__input--error'
                    : 'contact__input'
                }
                onInput={() => clearFieldError('building')}
              />
              {fieldErrors.building && (
                <p
                  id={`${formId}-building-err`}
                  className="contact__field-error"
                  role="alert"
                >
                  {fieldErrors.building}
                </p>
              )}
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor={`${formId}-referral`}>
                {FIELD_LABEL.referral}
              </label>
              <input
                id={`${formId}-referral`}
                name="referral"
                type="text"
                autoComplete="off"
                required
                disabled={locked}
                aria-invalid={fieldErrors.referral ? 'true' : undefined}
                aria-describedby={
                  fieldErrors.referral ? `${formId}-referral-err` : undefined
                }
                className={
                  fieldErrors.referral
                    ? 'contact__input contact__input--error'
                    : 'contact__input'
                }
                onInput={() => clearFieldError('referral')}
              />
              {fieldErrors.referral && (
                <p
                  id={`${formId}-referral-err`}
                  className="contact__field-error"
                  role="alert"
                >
                  {fieldErrors.referral}
                </p>
              )}
            </div>

            {status === 'error' && errorMessage && (
              <p className="contact__feedback contact__feedback--error" role="alert">
                {errorMessage}
              </p>
            )}
            {status === 'success' && (
              <div
                className="contact__success"
                role="status"
                aria-live="polite"
              >
                <p className="contact__success-title">Thank you.</p>
                <p className="contact__success-body">
                  Your note has been received. Annissa and Patrick read each inquiry
                  personally; you will hear from them when they have had a quiet
                  moment to respond.
                </p>
                <button
                  type="button"
                  className="contact__success-action btn btn--ghost"
                  onClick={resetToIdle}
                >
                  Send another message
                </button>
              </div>
            )}

            {status !== 'success' && (
              <>
                <button
                  type="submit"
                  className="btn btn--primary contact__submit"
                  disabled={submitDisabled}
                  aria-busy={busy}
                >
                  {busy ? 'Sending…' : 'Begin the Conversation'}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </RevealSection>
  )
}
