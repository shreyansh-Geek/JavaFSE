import React, { useState } from 'react'
import EmployeeList from './components/EmployeeList'
import ThemeContext from './ThemeContext'

export default function App() {
  const [theme, setTheme] = useState('dark')

  const employees = [
    { id: 1, name: "Sophia Martinez", role: "Frontend Architect", dept: "Engineering" },
    { id: 2, name: "Marcus Vance", role: "DevOps Engineer", dept: "Infrastructure" },
    { id: 3, name: "Chloe Zhao", role: "Product Manager", dept: "Product Development" }
  ]

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const containerStyle = {
    backgroundColor: theme === 'dark' ? 'var(--bg-primary)' : '#f1f5f9',
    color: theme === 'dark' ? 'var(--text-primary)' : '#0f172a',
    borderColor: theme === 'dark' ? 'var(--border-color)' : '#cbd5e1',
    transition: 'all 0.3s ease'
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div className="container" style={containerStyle}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid ' + (theme === 'dark' ? 'var(--border-color)' : '#e2e8f0'), paddingBottom: '1rem' }}>
          <h1 style={{ margin: 0, background: theme === 'dark' ? undefined : 'none', color: theme === 'dark' ? undefined : '#0f172a', webkitTextFillColor: theme === 'dark' ? undefined : '#0f172a' }}>
            EmpManager
          </h1>
          <button onClick={toggleTheme}>
            Toggle to {theme === 'light' ? 'DARK' : 'LIGHT'} Theme
          </button>
        </div>

        <p style={{ marginBottom: '1.5rem', color: theme === 'dark' ? 'var(--text-secondary)' : '#475569' }}>
          Theme state is held at the root level and delivered to cards using <code>ThemeContext</code>, avoiding prop-drilling.
        </p>

        <EmployeeList employees={employees} />
      </div>
    </ThemeContext.Provider>
  )
}
