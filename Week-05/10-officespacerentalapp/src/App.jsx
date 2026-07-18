import React from 'react'

export default function App() {
  const offices = [
    { id: 1, name: "TechHub Premium Suite", rent: 75000, address: "Sector 5, Salt Lake, Kolkata", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&h=250&q=80" },
    { id: 2, name: "Co-Working Shared Floor", rent: 45000, address: "MG Road, Bengaluru", image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=400&h=250&q=80" },
    { id: 3, name: "Creative Studio Desk", rent: 58000, address: "Hitech City, Hyderabad", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=400&h=250&q=80" },
    { id: 4, name: "Executive Corporate Office", rent: 110000, address: "BKC, Mumbai", image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=400&h=250&q=80" }
  ]

  return (
    <div className="container" style={{ maxWidth: '800px' }}>
      <h1>Office Space Rentals</h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
        React JSX elements rendering dynamic attributes and conditional styling.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {offices.map(office => {
          // Dynamic Rent text color: Red if below 60000, Green if above or equal.
          const isExpensive = office.rent >= 60000
          const rentColor = isExpensive ? 'var(--success-color)' : 'var(--danger-color)'
          
          return (
            <div key={office.id} className="card" style={{ padding: '0', overflow: 'hidden' }}>
              <img 
                src={office.image} 
                alt={office.name}
                style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ padding: '1.25rem' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{office.name}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>📍 {office.address}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text-secondary)' }}>Monthly Rent</span>
                  <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: rentColor }}>
                    ₹{office.rent.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
