import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import TrainersList from './components/TrainersList'
import TrainerDetail from './components/TrainerDetail'
import { trainersMockData } from './TrainersMock'

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h1>Trainer Expertise Portal</h1>
        
        {/* Navigation Bar */}
        <nav style={{ 
          display: 'flex', 
          gap: '1rem', 
          marginBottom: '2rem', 
          borderBottom: '1px solid var(--border-color)', 
          paddingBottom: '1rem',
          justifyContent: 'center'
        }}>
          <Link to="/" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '600', padding: '0.5rem 1rem', borderRadius: '4px' }}>
            Home
          </Link>
          <Link to="/trainers" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '600', padding: '0.5rem 1rem', borderRadius: '4px' }}>
            Trainers Roster
          </Link>
        </nav>

        {/* Route Outlets */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trainers" element={<TrainersList trainers={trainersMockData} />} />
          <Route path="/trainers/:id" element={<TrainerDetail trainers={trainersMockData} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
