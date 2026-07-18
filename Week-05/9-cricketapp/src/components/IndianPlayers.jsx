import React from 'react'

export default function IndianPlayers() {
  const players = ["Virat Kohli", "Rohit Sharma", "KL Rahul", "Shubman Gill", "Hardik Pandya", "Ravindra Jadeja"]
  
  // Destructuring features of ES6
  const [firstPlayer, secondPlayer, ...restOfPlayers] = players
  
  // Destructure odd/even index players
  const oddTeam = players.filter((_, idx) => idx % 2 !== 0)
  const evenTeam = players.filter((_, idx) => idx % 2 === 0)

  // Declare two arrays and merge them using spread operator
  const T20players = ["Suryakumar Yadav", "Ishan Kishan", "Rinku Singh"]
  const RanjiTrophy = ["Sarfaraz Khan", "Yashasvi Jaiswal", "Dhruv Jurel"]
  const mergedPlayers = [...T20players, ...RanjiTrophy]

  return (
    <div>
      <h3 style={{ color: 'var(--accent-color)', marginBottom: '1.25rem' }}>🇮🇳 Destructuring & Spread Merging</h3>
      
      <div style={{ display: 'grid', gap: '1.5rem' }}>
        
        {/* Destructuring showcase */}
        <div className="card">
          <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>Destructuring Highlight</h4>
          <p><strong>Opening Batsman 1:</strong> {firstPlayer}</p>
          <p><strong>Opening Batsman 2:</strong> {secondPlayer}</p>
          <p><strong>Middle Order Reserve:</strong> {restOfPlayers.join(', ')}</p>
        </div>

        {/* Odd vs Even Squads */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div className="card">
            <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>Even Index Squad</h4>
            <ul>{evenTeam.map((p, i) => <li key={i}>{p}</li>)}</ul>
          </div>
          <div className="card">
            <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>Odd Index Squad</h4>
            <ul>{oddTeam.map((p, i) => <li key={i}>{p}</li>)}</ul>
          </div>
        </div>

        {/* Merged list */}
        <div className="card" style={{ borderLeft: '4px solid var(--success-color)' }}>
          <h4 style={{ color: 'var(--success-color)', marginBottom: '0.5rem' }}>Merged Squad (T20 + Ranji via Spread)</h4>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {mergedPlayers.map((p, i) => (
              <span key={i} style={{ 
                background: '#0f172a', 
                border: '1px solid var(--border-color)', 
                padding: '0.35rem 0.75rem', 
                borderRadius: '20px',
                fontSize: '0.9rem'
              }}>{p}</span>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
