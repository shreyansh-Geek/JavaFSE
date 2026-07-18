import React, { useState } from 'react'
import CalculateScore from './components/CalculateScore'

export default function App() {
  const [name, setName] = useState('Alexander Smith')
  const [school, setSchool] = useState('Greenwood High School')
  const [total, setTotal] = useState(420)
  const [goal, setGoal] = useState(80)

  return (
    <div className="container">
      <h1>Score Calculator Portal</h1>
      <p style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        Dynamic functional component demonstrating property passing and calculations.
      </p>
      
      <div className="card" style={{ marginBottom: '2rem' }}>
        <h3 style={{ color: 'var(--accent-color)' }}>✏️ Edit Student Data</h3>
        <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--text-secondary)' }}>Student Name</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              style={{ width: '100%', padding: '0.5rem', background: '#0f172a', border: '1px solid var(--border-color)', color: 'white', borderRadius: '4px' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--text-secondary)' }}>School Name</label>
            <input 
              type="text" 
              value={school} 
              onChange={(e) => setSchool(e.target.value)}
              style={{ width: '100%', padding: '0.5rem', background: '#0f172a', border: '1px solid var(--border-color)', color: 'white', borderRadius: '4px' }}
            />
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--text-secondary)' }}>Total Score (out of 500)</label>
              <input 
                type="number" 
                value={total} 
                min="0"
                max="500"
                onChange={(e) => setTotal(Number(e.target.value))}
                style={{ width: '100%', padding: '0.5rem', background: '#0f172a', border: '1px solid var(--border-color)', color: 'white', borderRadius: '4px' }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--text-secondary)' }}>Goal Average (%)</label>
              <input 
                type="number" 
                value={goal} 
                min="0"
                max="100"
                onChange={(e) => setGoal(Number(e.target.value))}
                style={{ width: '100%', padding: '0.5rem', background: '#0f172a', border: '1px solid var(--border-color)', color: 'white', borderRadius: '4px' }}
              />
            </div>
          </div>
        </div>
      </div>

      <CalculateScore Name={name} School={school} Total={total} goal={goal} />
    </div>
  )
}
