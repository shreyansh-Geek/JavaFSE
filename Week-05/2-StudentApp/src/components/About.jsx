import React from 'react'

export default function About() {
  return (
    <div className="card" style={{ borderLeft: '4px solid var(--success-color)' }}>
      <h3 style={{ color: 'var(--success-color)' }}>ℹ️ About Page</h3>
      <p style={{ fontWeight: '500', color: 'var(--text-primary)' }}>
        Welcome to the About page of the Student Management Portal
      </p>
    </div>
  )
}
