import React from 'react'

export default function Home() {
  return (
    <div className="card" style={{ borderLeft: '4px solid var(--accent-color)' }}>
      <h3 style={{ color: 'var(--accent-color)' }}>🏡 Academy Resource Center</h3>
      <p>Welcome to the Cognizant Trainer Expertise tracking portal. This platform assists in allocating trainers for upcoming batches and reviewing skills profiles.</p>
      <div style={{ marginTop: '1rem', borderLeft: '4px solid var(--accent-color)', paddingLeft: '1rem' }}>
        <p style={{ fontStyle: 'italic' }}>Select "Trainers Roster" to view expert profiles or search for individuals.</p>
      </div>
    </div>
  )
}
