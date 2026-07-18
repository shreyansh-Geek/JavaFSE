import React from 'react'
import styles from '../CohortDetails.module.css'

export default function CohortDetails({ cohort }) {
  const isOngoing = cohort.status.toLowerCase() === 'ongoing'
  
  // Style for h3 element: green if status is ongoing, blue in other scenarios
  const h3Style = {
    color: isOngoing ? 'green' : 'blue',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    marginBottom: '8px'
  }

  return (
    <div className={styles.box}>
      <h3 style={h3Style}>{cohort.code}</h3>
      <dl>
        <dt>Cohort Name</dt>
        <dd>{cohort.name}</dd>
        
        <dt>Status</dt>
        <dd style={{ textTransform: 'capitalize' }}>{cohort.status}</dd>
        
        <dt>Start Date</dt>
        <dd>{cohort.startDate}</dd>
      </dl>
    </div>
  )
}
