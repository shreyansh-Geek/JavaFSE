import React from 'react'
import '../Stylesheets/mystyle.css'

export default function CalculateScore({ Name, School, Total, goal }) {
  const maxScore = 500
  const average = (Total / maxScore) * 100
  const goalMet = average >= goal

  return (
    <div className="scorecard">
      <h3 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
        📊 Student Performance Card
      </h3>
      <dl className="score-details">
        <dt>Name</dt>
        <dd>{Name}</dd>
        
        <dt>School</dt>
        <dd>{School}</dd>
        
        <dt>Total Marks</dt>
        <dd>{Total} / {maxScore}</dd>
        
        <dt>Goal Average</dt>
        <dd>{goal}%</dd>
        
        <dt>Calculated Average</dt>
        <dd>
          <span className="average-badge" style={{ backgroundColor: goalMet ? 'var(--success-color)' : 'var(--danger-color)' }}>
            {average.toFixed(2)}%
          </span>
        </dd>
      </dl>
      <div 
        className="goal-status" 
        style={{ color: goalMet ? 'var(--success-color)' : 'var(--danger-color)' }}
      >
        {goalMet 
          ? `🎉 Goal Met! Exceeded target of ${goal}%` 
          : `⚠️ Goal Not Met! Needed ${goal}%, fell short by ${(goal - average).toFixed(2)}%`
        }
      </div>
    </div>
  )
}
