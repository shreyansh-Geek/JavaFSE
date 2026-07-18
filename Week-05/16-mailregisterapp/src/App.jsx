import React from 'react'
import Register from './components/Register'

export default function App() {
  return (
    <div className="container">
      <h1>User Registration Portal</h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Controlled form implementing interactive event handlers and submit verification.
      </p>
      <Register />
    </div>
  )
}
