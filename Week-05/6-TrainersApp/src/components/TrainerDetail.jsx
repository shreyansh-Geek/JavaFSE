import React from 'react'
import { useParams, Link } from 'react-router-dom'

export default function TrainerDetail({ trainers }) {
  const { id } = useParams()
  const trainer = trainers.find(t => t.TrainerId === parseInt(id))

  if (!trainer) {
    return (
      <div className="card" style={{ borderColor: 'var(--danger-color)' }}>
        <h3 style={{ color: 'var(--danger-color)' }}>❌ Trainer Not Found</h3>
        <p>No profile matches ID {id}.</p>
        <Link to="/trainers"><button>Back to List</button></Link>
      </div>
    )
  }

  return (
    <div className="card" style={{ borderLeft: '4px solid var(--accent-color)' }}>
      <h3 style={{ color: 'var(--accent-color)' }}>👤 {trainer.Name}</h3>
      <p style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--text-primary)' }}><strong>Stream:</strong> {trainer.Technology}</p>
      
      <div style={{ marginTop: '1rem', display: 'grid', gap: '0.5rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
        <p>📧 <strong>Email:</strong> <a href={`mailto:${trainer.Email}`} style={{ color: 'var(--accent-color)' }}>{trainer.Email}</a></p>
        <p>📞 <strong>Phone:</strong> {trainer.Phone}</p>
        <p>🛠️ <strong>Key Skills:</strong> {trainer.Skills}</p>
      </div>
      
      <div style={{ marginTop: '1.5rem' }}>
        <Link to="/trainers">
          <button style={{ background: 'var(--bg-primary)', color: 'var(--accent-color)', border: '1px solid var(--accent-color)' }}>
            ⬅️ Back to Trainers List
          </button>
        </Link>
      </div>
    </div>
  )
}
