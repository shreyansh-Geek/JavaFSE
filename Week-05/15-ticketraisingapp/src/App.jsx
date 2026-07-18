import React from 'react'
import ComplaintRegister from './components/ComplaintRegister'

export default function App() {
  return (
    <div className="container">
      <h1>Complaint Raising Portal</h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Controlled form component submitting data and generating reference keys.
      </p>
      <ComplaintRegister />
    </div>
  )
}
