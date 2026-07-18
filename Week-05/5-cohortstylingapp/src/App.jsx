import React from 'react'
import CohortDetails from './components/CohortDetails'

export default function App() {
  const cohorts = [
    { code: 'ADM23FR001', name: 'Java FSE Academy', status: 'ongoing', startDate: '2026-06-01' },
    { code: 'ADM23FR002', name: 'React SPA Cohort', status: 'ongoing', startDate: '2026-07-01' },
    { code: 'ADM23FR003', name: 'Angular Web Cohort', status: 'completed', startDate: '2026-03-15' },
    { code: 'ADM23FR004', name: 'AWS Cloud Basics', status: 'completed', startDate: '2026-04-10' }
  ]

  return (
    <div className="container" style={{ maxWidth: '750px' }}>
      <h1>Cognizant Academy Cohorts</h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Styling React components using CSS Modules and conditional inline CSS.
      </p>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {cohorts.map((cohort, index) => (
          <CohortDetails key={index} cohort={cohort} />
        ))}
      </div>
    </div>
  )
}
