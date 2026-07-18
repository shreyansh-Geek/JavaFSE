import React, { useState } from 'react'
import CurrencyConvertor from './components/CurrencyConvertor'

export default function App() {
  const [counter, setCounter] = useState(0)
  const [greetText, setGreetText] = useState('')
  const [welcomeText, setWelcomeText] = useState('')
  const [clickMessage, setClickMessage] = useState('')

  const handleIncrement = () => {
    setCounter(prev => prev + 1)
    sayHello()
  }

  const sayHello = () => {
    setGreetText("Hello! You successfully triggered multiple methods on increment.")
  }

  const handleDecrement = () => {
    setCounter(prev => prev - 1)
  }

  const handleSayWelcome = (arg) => {
    setWelcomeText(`Function received argument: "${arg}"! Welcome to React event handlers.`)
  }

  const handleSyntheticClick = (e) => {
    console.log("Synthetic Event: ", e)
    setClickMessage(`I was clicked! Event type: "${e.type}"`)
  }

  return (
    <div className="container">
      <h1>Event Playground</h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Interactive demo for state counters, parameterized handlers, and synthetic events.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        
        {/* Counter Card */}
        <div className="card">
          <h3>🔢 Counter Operations</h3>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0.5rem 0', color: 'var(--accent-color)' }}>
            {counter}
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
            <button onClick={handleIncrement}>Increment +</button>
            <button onClick={handleDecrement} style={{ backgroundColor: 'var(--danger-color)' }}>Decrement -</button>
          </div>
          {greetText && <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: 'var(--success-color)' }}>{greetText}</p>}
        </div>

        {/* Parameterized & Synthetic Card */}
        <div className="card">
          <h3>💥 Event Triggers</h3>
          
          <div style={{ marginBottom: '1rem' }}>
            <button onClick={() => handleSayWelcome('welcome')} style={{ width: '100%' }}>
              Say Welcome
            </button>
            {welcomeText && <p style={{ fontSize: '0.85rem', color: 'var(--accent-color)', marginTop: '0.25rem' }}>{welcomeText}</p>}
          </div>

          <div>
            <button onClick={handleSyntheticClick} style={{ width: '100%', background: '#475569', color: 'white' }}>
              OnPress (Synthetic Event)
            </button>
            {clickMessage && <p style={{ fontSize: '0.85rem', color: 'var(--success-color)', marginTop: '0.25rem' }}>{clickMessage}</p>}
          </div>
        </div>

      </div>

      <CurrencyConvertor />
    </div>
  )
}
