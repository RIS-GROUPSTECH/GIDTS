import React from 'react'

const fields = [
  { name: 'fullName', label: 'Full name', type: 'text', autocomplete: 'name' },
  { name: 'email', label: 'Email address', type: 'email', autocomplete: 'email' },
  { name: 'phoneNumber', label: 'Phone number', type: 'tel', autocomplete: 'tel' },
  { name: 'country', label: 'Country', type: 'text', autocomplete: 'country-name' },
  { name: 'currentStatus', label: 'Current status', type: 'text', autocomplete: 'organization-title' },
  { name: 'learningDevice', label: 'Primary learning device', type: 'text', autocomplete: 'off' },
]

const RegistrationForm = ({ onBack }) => {
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [formData, setFormData] = React.useState(() =>
    Object.fromEntries(fields.map(({ name }) => [name, ''])),
  )

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((currentData) => ({ ...currentData, [name]: value }))
  }

  return (
    <main className="registration-screen">
      <button className="back-link" type="button" onClick={onBack}>
        <span aria-hidden="true">←</span> Back to programme
      </button>
      <div className="registration-card">
        <div className="registration-heading">
          <p className="eyebrow">GHEF International Digital Training Scheme</p>
          <h1>{isSubmitted ? 'You’re on your way.' : 'Make your first move.'}</h1>
          <p>{isSubmitted ? 'Thank you for your interest. Your registration has been received.' : 'Tell us a little about yourself to get started with the free one-month bootcamp.'}</p>
        </div>
        {!isSubmitted && (
          <form
            className="registration-form"
            onSubmit={(event) => {
              event.preventDefault()
              setIsSubmitted(true)
            }}
          >
            <div className="form-grid">
              {fields.map(({ name, label, type, autocomplete }) => (
                <label className="form-field" key={name}>
                  <span>{label}</span>
                  <input
                    type={type}
                    name={name}
                    autoComplete={autocomplete}
                    value={formData[name]}
                    onChange={handleInputChange}
                    required
                  />
                </label>
              ))}
            </div>
            <label className="commitment-pledge">
              <input type="checkbox" name="commitmentPledge" required />
              <span>
                <strong>My learning Pledge</strong>
                <span>
                  I pledge to respect the learning community. In so doing, be punctual to all my classes. Participate in every activity and avoid causing any distraction within the course of my learning.
                </span>
              </span>
            </label>
            <button className="button-primary submit-button" type="submit">
              Submit registration <span aria-hidden="true">↗</span>
            </button>
          </form>
        )}
      </div>
    </main>
  )
}

export default RegistrationForm
