import React, { useState } from 'react'
import ListofPlayers from './components/ListofPlayers'
import IndianPlayers from './components/IndianPlayers'

export default function App() {
  const [flag, setFlag] = useState(true)

  return (
    <div className="container">
      <h1>Cricket Squad Center</h1>
      
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <button 
          onClick={() => setFlag(!flag)}
          style={{ background: 'linear-gradient(135deg, #38bdf8, #818cf8)', color: '#0f172a' }}
        >
          Toggle Views (Current Flag: {flag ? "True" : "False"})
        </button>
      </div>

      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  )
}
