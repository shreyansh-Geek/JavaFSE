import React, { useState } from 'react'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [bookedFlight, setBookedFlight] = useState(null)

  const flights = [
    { id: 'AI-101', carrier: "Air India", route: "New Delhi (DEL) ➡️ London (LHR)", price: "₹65,000" },
    { id: 'EK-503', carrier: "Emirates", route: "Mumbai (BOM) ➡️ Dubai (DXB)", price: "₹24,500" },
    { id: 'SQ-406', carrier: "Singapore Airlines", route: "Bengaluru (BLR) ➡️ Singapore (SIN)", price: "₹32,000" }
  ]

  const handleBookTicket = (flightId) => {
    setBookedFlight(flightId)
    alert(`Ticket successfully booked for flight ${flightId}! Confirmation has been sent to your email.`)
  }

  return (
    <div className="container">
      <h1>AeroBook Flight Portal</h1>
      
      {/* Auth Toggle */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
        <div>
          <span>Status: <strong>{isLoggedIn ? "🔑 Logged In User" : "🕵️ Guest Browser"}</strong></span>
        </div>
        <div>
          {isLoggedIn ? (
            <button onClick={() => { setIsLoggedIn(false); setBookedFlight(null); }} style={{ backgroundColor: 'var(--danger-color)' }}>Logout</button>
          ) : (
            <button onClick={() => setIsLoggedIn(true)} style={{ backgroundColor: 'var(--success-color)', color: '#0f172a' }}>Login</button>
          )}
        </div>
      </div>

      {/* Conditional Content Layout */}
      {!isLoggedIn ? (
        // GUEST PAGE
        <div>
          <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid var(--danger-color)', marginBottom: '1.5rem' }}>
            <p style={{ color: 'var(--text-primary)', margin: 0, fontWeight: '500' }}>
              📢 <strong>Guest Access:</strong> You are currently viewing flight options. To reserve a seat, please login using the button above.
            </p>
          </div>
          <h3 style={{ color: 'var(--accent-color)' }}>✈️ Available Flights (Browse Only)</h3>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {flights.map(f => (
              <div key={f.id} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ color: 'var(--accent-color)' }}>{f.carrier} ({f.id})</h4>
                  <p style={{ margin: '0.25rem 0 0' }}>{f.route}</p>
                </div>
                <div>
                  <span style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{f.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // USER PAGE
        <div>
          <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid var(--success-color)', marginBottom: '1.5rem' }}>
            <p style={{ color: 'var(--text-primary)', margin: 0, fontWeight: '500' }}>
              🎉 <strong>Welcome back, Explorer!</strong> You have full booking access enabled. Click "Book Ticket" to reserve your flight.
            </p>
          </div>
          <h3 style={{ color: 'var(--accent-color)' }}>✈️ Available Flights (Full Booking Access)</h3>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {flights.map(f => (
              <div key={f.id} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ color: 'var(--accent-color)' }}>{f.carrier} ({f.id})</h4>
                  <p style={{ margin: '0.25rem 0 0' }}>{f.route}</p>
                  <p style={{ margin: '0.25rem 0 0', color: 'var(--success-color)', fontWeight: 'bold' }}>{f.price}</p>
                </div>
                <div>
                  {bookedFlight === f.id ? (
                    <span style={{ color: 'var(--success-color)', fontWeight: 'bold' }}>✓ Booked</span>
                  ) : (
                    <button onClick={() => handleBookTicket(f.id)}>Book Ticket</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
