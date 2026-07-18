import React from 'react'
import { Link } from 'react-router-dom'

export default function TrainersList({ trainers }) {
  return (
    <div className="card">
      <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>📋 Trainers Roster</h3>
      <div style={{ display: 'grid', gap: '0.75rem' }}>
        {trainers.map(trainer => (
          <Link 
            key={trainer.TrainerId} 
            to={`/trainers/${trainer.TrainerId}`}
            style={{ 
              color: 'var(--accent-color)', 
              textDecoration: 'none', 
              fontSize: '1.1rem',
              padding: '0.5rem',
              border: '1px solid var(--border-color)',
              borderRadius: '6px',
              display: 'block',
              transition: 'all 0.2s ease',
              background: '#0f172a'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-color)';
              e.currentTarget.style.transform = 'translateX(6px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-color)';
              e.currentTarget.style.transform = 'none';
            }}
          >
            👤 {trainer.Name} &mdash; <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{trainer.Technology}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
