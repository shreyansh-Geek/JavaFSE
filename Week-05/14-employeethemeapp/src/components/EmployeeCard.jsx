import React, { useContext } from 'react'
import ThemeContext from '../ThemeContext'

export default function EmployeeCard({ employee }) {
  const theme = useContext(ThemeContext)
  const isDark = theme === 'dark'
  
  const cardStyle = {
    background: isDark ? 'var(--bg-secondary)' : '#f8fafc',
    border: '1px solid ' + (isDark ? 'var(--border-color)' : '#cbd5e1'),
    color: isDark ? 'var(--text-primary)' : '#0f172a',
    transition: 'all 0.2s ease'
  }

  const btnStyle = {
    backgroundColor: isDark ? 'var(--accent-color)' : '#1e293b',
    color: isDark ? '#0f172a' : '#ffffff',
    border: 'none',
    borderRadius: '6px',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    fontWeight: '600'
  }

  return (
    <div className="card" style={cardStyle}>
      <h3 style={{ margin: 0, color: isDark ? 'var(--accent-color)' : '#0f766e' }}>{employee.name}</h3>
      <p style={{ margin: '0.25rem 0', color: isDark ? 'var(--text-secondary)' : '#475569' }}><strong>Role:</strong> {employee.role}</p>
      <p style={{ margin: '0.25rem 0 1rem', color: isDark ? 'var(--text-secondary)' : '#475569' }}><strong>Department:</strong> {employee.dept}</p>
      
      <button style={btnStyle} onClick={() => alert(`Details requested for ${employee.name}`)}>
        View Profile ({theme.toUpperCase()} theme)
      </button>
    </div>
  )
}
