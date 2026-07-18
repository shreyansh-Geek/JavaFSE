import React from 'react'

export default function Home() {
  return (
    <div className="card" style={{ borderLeft: '4px solid var(--accent-color)' }}>
      <h3 style={{ color: 'var(--accent-color)' }}>🏠 Home Portal</h3>
      <p style={{ fontWeight: '500', color: 'var(--text-primary)' }}>
        Welcome to the Home page of Student Management Portal
      </p>
    </div>
  )
}
