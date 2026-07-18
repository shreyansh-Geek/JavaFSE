import React, { useState } from 'react'

export default function ComplaintRegister() {
  const [name, setName] = useState('')
  const [complaint, setComplaint] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Generate a Reference number
    const refNum = 'TKT-' + Math.floor(100000 + Math.random() * 900000)
    
    alert(`Thank you, ${name}! Your complaint has been submitted successfully.\n\nReference Number: ${refNum}\nKeep this number for future follow-ups.`);
    
    setName('')
    setComplaint('')
  }

  return (
    <div className="card">
      <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>📝 Support Complaint Form</h3>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.25rem' }}>
        
        <div>
          <label style={{ display: 'block', marginBottom: '0.35rem', color: 'var(--text-secondary)', fontWeight: '500' }}>Employee Name</label>
          <input 
            type="text" 
            placeholder="Enter your full name"
            value={name} 
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: '100%', padding: '0.65rem', background: '#0f172a', border: '1px solid var(--border-color)', color: 'white', borderRadius: '6px' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.35rem', color: 'var(--text-secondary)', fontWeight: '500' }}>Complaint Details</label>
          <textarea 
            placeholder="Provide a brief description of the issue"
            rows="5"
            value={complaint} 
            onChange={(e) => setComplaint(e.target.value)}
            required
            style={{ width: '100%', padding: '0.65rem', background: '#0f172a', border: '1px solid var(--border-color)', color: 'white', borderRadius: '6px', fontFamily: 'inherit', resize: 'vertical' }}
          />
        </div>

        <button type="submit" style={{ background: 'linear-gradient(135deg, #38bdf8, #818cf8)', color: '#0f172a' }}>
          Submit Ticket
        </button>

      </form>
    </div>
  )
}
