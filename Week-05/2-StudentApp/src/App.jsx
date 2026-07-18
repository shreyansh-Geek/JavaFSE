import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="container">
      <h1>Student Management Portal</h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
        A dashboard summarizing components loaded inside StudentApp.
      </p>
      <div style={{ display: 'grid', gap: '1.5rem' }}>
        <Home />
        <About />
        <Contact />
      </div>
    </div>
  )
}
