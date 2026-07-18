import React from 'react'

export default function CohortDetails({ cohort }) {
  if (!cohort) return <div>No cohort details available</div>
  
  return (
    <div className="card" style={{ borderLeft: '4px solid var(--accent-color)', padding: '1.5rem' }}>
      <h3 style={{ color: 'var(--accent-color)' }}>{cohort.code}</h3>
      <dl style={{ marginTop: '1rem' }}>
        <dt style={{ fontWeight: '600', color: 'var(--text-secondary)' }}>Cohort Name</dt>
        <dd style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{cohort.name}</dd>
        
        <dt style={{ fontWeight: '600', color: 'var(--text-secondary)' }}>Status</dt>
        <dd style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', textTransform: 'capitalize' }}>{cohort.status}</dd>
        
        <dt style={{ fontWeight: '600', color: 'var(--text-secondary)' }}>Start Date</dt>
        <dd style={{ color: 'var(--text-primary)' }}>{cohort.startDate}</dd>
      </dl>
    </div>
  )
}
