import React from 'react'

export default function ListofPlayers() {
  const players = [
    { id: 1, name: "Virat Kohli", score: 110 },
    { id: 2, name: "Rohit Sharma", score: 85 },
    { id: 3, name: "KL Rahul", score: 45 },
    { id: 4, name: "Rishabh Pant", score: 62 },
    { id: 5, name: "Hardik Pandya", score: 73 },
    { id: 6, name: "Ravindra Jadeja", score: 55 },
    { id: 7, name: "Ravichandran Ashwin", score: 30 },
    { id: 8, name: "Jasprit Bumrah", score: 12 },
    { id: 9, name: "Mohammed Shami", score: 8 },
    { id: 10, name: "Yuzvendra Chahal", score: 2 },
    { id: 11, name: "Shubman Gill", score: 95 }
  ]

  // Filter players with scores below 70 using arrow functions of ES6
  const below70 = players.filter(p => p.score < 70)

  return (
    <div>
      <h3 style={{ color: 'var(--accent-color)', marginBottom: '1.25rem' }}>🏏 Roster & Filtered Scores</h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        
        {/* All Players */}
        <div className="card">
          <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.75rem' }}>All Players (ES6 map)</h4>
          <ul style={{ listStyleType: 'none' }}>
            {players.map(p => (
              <li key={p.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.35rem 0', borderBottom: '1px solid var(--border-color)' }}>
                <span>{p.name}</span>
                <span style={{ fontWeight: 'bold' }}>{p.score}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Filtered Players */}
        <div className="card" style={{ borderColor: 'var(--danger-color)' }}>
          <h4 style={{ color: 'var(--danger-color)', marginBottom: '0.75rem' }}>Below 70 (Arrow Filter)</h4>
          <ul style={{ listStyleType: 'none' }}>
            {below70.map(p => (
              <li key={p.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.35rem 0', borderBottom: '1px solid var(--border-color)' }}>
                <span>{p.name}</span>
                <span style={{ color: 'var(--danger-color)', fontWeight: 'bold' }}>{p.score}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  )
}
