import React from 'react'
import Getuser from './components/Getuser'

export default function App() {
  return (
    <div className="container" style={{ maxWidth: '500px' }}>
      <h1>Random Profiler</h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Retrieves random user details dynamically in <code>componentDidMount</code>.
      </p>
      <Getuser />
    </div>
  )
}
