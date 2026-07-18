import React, { useState } from 'react'

export default function CurrencyConvertor() {
  const [inr, setInr] = useState('')
  const [eur, setEur] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const converted = parseFloat(inr) * 0.011 // 1 INR = 0.011 EUR
    setEur(converted)
  }

  return (
    <div className="card" style={{ borderLeft: '4px solid var(--accent-color)', marginTop: '2rem' }}>
      <h3 style={{ color: 'var(--accent-color)' }}>EUR Currency Converter</h3>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '0.75rem', marginTop: '1rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--text-secondary)' }}>Amount in Indian Rupees (₹)</label>
          <input 
            type="number" 
            placeholder="e.g. 1000"
            value={inr}
            onChange={(e) => setInr(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem', background: '#0f172a', border: '1px solid var(--border-color)', color: 'white', borderRadius: '4px' }}
          />
        </div>
        <button type="submit">Convert to Euros</button>
      </form>
      {eur !== null && !isNaN(eur) && (
        <div style={{ marginTop: '1rem', fontSize: '1.2rem', fontWeight: '600', color: 'var(--success-color)' }}>
          Converted Value: €{eur.toFixed(2)}
        </div>
      )}
    </div>
  )
}
