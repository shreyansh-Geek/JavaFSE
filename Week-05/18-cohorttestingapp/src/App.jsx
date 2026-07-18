import React from 'react'
import CohortDetails from './components/CohortDetails'
import { CohortData } from './components/Cohort'

export default function App() {
  return (
    <div className="container">
      <h1>Cohort Tester</h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Unit testing showcase demonstrating component mounting, assertions, and snapshots.
      </p>
      
      <CohortDetails cohort={CohortData[0]} />
    </div>
  )
}
