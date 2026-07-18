import React, { useState } from 'react'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = (fieldName, value) => {
    let errs = { ...errors }
    if (fieldName === 'name') {
      if (value.length < 5) {
        errs.name = "Name must be at least 5 characters long."
      } else {
        delete errs.name
      }
    }
    if (fieldName === 'email') {
      if (!value.includes('@') || !value.includes('.')) {
        errs.email = "Email must contain '@' and '.' characters."
      } else {
        delete errs.email
      }
    }
    if (fieldName === 'password') {
      if (value.length < 8) {
        errs.password = "Password must be at least 8 characters long."
      } else {
        delete errs.password
      }
    }
    setErrors(errs)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'name') setName(value)
    if (name === 'email') setEmail(value)
    if (name === 'password') setPassword(value)
    validate(name, value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    let errs = {}
    if (name.length < 5) errs.name = "Name must be at least 5 characters."
    if (!email.includes('@') || !email.includes('.')) errs.email = "Email must be valid (have @ and .)."
    if (password.length < 8) errs.password = "Password must be at least 8 characters."
    
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      alert("Please fix form errors before submitting.")
      return
    }

    setSubmitted(true)
    alert(`Registration Successful!\n\nName: ${name}\nEmail: ${email}`)
  }

  return (
    <div className="card">
      <h3 style={{ color: 'var(--accent-color)', marginBottom: '1.25rem' }}>📧 Account Register Form</h3>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.25rem' }}>
        
        <div>
          <label style={{ display: 'block', marginBottom: '0.35rem', color: 'var(--text-secondary)' }}>Full Name</label>
          <input 
            type="text" 
            name="name"
            placeholder="e.g. John Doe"
            value={name} 
            onChange={handleChange}
            style={{ 
              width: '100%', 
              padding: '0.65rem', 
              background: '#0f172a', 
              border: '1px solid ' + (errors.name ? 'var(--danger-color)' : name.length >= 5 ? 'var(--success-color)' : 'var(--border-color)'), 
              color: 'white', 
              borderRadius: '6px' 
            }}
          />
          {errors.name && <p style={{ color: 'var(--danger-color)', fontSize: '0.8rem', marginTop: '0.25rem', marginBottom: 0 }}>{errors.name}</p>}
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.35rem', color: 'var(--text-secondary)' }}>Email Address</label>
          <input 
            type="text" 
            name="email"
            placeholder="e.g. john@example.com"
            value={email} 
            onChange={handleChange}
            style={{ 
              width: '100%', 
              padding: '0.65rem', 
              background: '#0f172a', 
              border: '1px solid ' + (errors.email ? 'var(--danger-color)' : (email.includes('@') && email.includes('.')) ? 'var(--success-color)' : 'var(--border-color)'), 
              color: 'white', 
              borderRadius: '6px' 
            }}
          />
          {errors.email && <p style={{ color: 'var(--danger-color)', fontSize: '0.8rem', marginTop: '0.25rem', marginBottom: 0 }}>{errors.email}</p>}
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.35rem', color: 'var(--text-secondary)' }}>Password</label>
          <input 
            type="password" 
            name="password"
            placeholder="Min. 8 characters"
            value={password} 
            onChange={handleChange}
            style={{ 
              width: '100%', 
              padding: '0.65rem', 
              background: '#0f172a', 
              border: '1px solid ' + (errors.password ? 'var(--danger-color)' : password.length >= 8 ? 'var(--success-color)' : 'var(--border-color)'), 
              color: 'white', 
              borderRadius: '6px' 
            }}
          />
          {errors.password && <p style={{ color: 'var(--danger-color)', fontSize: '0.8rem', marginTop: '0.25rem', marginBottom: 0 }}>{errors.password}</p>}
        </div>

        <button type="submit" style={{ background: 'linear-gradient(135deg, #38bdf8, #818cf8)', color: '#0f172a', marginTop: '0.5rem' }}>
          Register Account
        </button>

      </form>

      {submitted && (
        <div style={{ marginTop: '1.25rem', padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', borderLeft: '4px solid var(--success-color)', borderRadius: '6px' }}>
          <p style={{ color: 'var(--success-color)', margin: 0 }}>🎉 Form validated and submitted successfully!</p>
        </div>
      )}
    </div>
  )
}
