import React, { useState } from 'react'
import BookDetails from './components/BookDetails'
import BlogDetails from './components/BlogDetails'
import CourseDetails from './components/CourseDetails'

export default function App() {
  const [activeTab, setActiveTab] = useState('books')
  const [renderMethod, setRenderMethod] = useState('ternary')

  const renderWithSwitch = () => {
    switch (activeTab) {
      case 'books':
        return <BookDetails />
      case 'blogs':
        return <BlogDetails />
      case 'courses':
        return <CourseDetails />
      default:
        return null
    }
  }

  const renderWithIfElse = () => {
    if (activeTab === 'books') {
      return <BookDetails />
    } else if (activeTab === 'blogs') {
      return <BlogDetails />
    } else if (activeTab === 'courses') {
      return <CourseDetails />
    }
    return null
  }

  return (
    <div className="container" style={{ maxWidth: '750px' }}>
      <h1>Blogger Dashboard</h1>
      <p style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        Demonstrating multiple conditional rendering patterns (Switch, If-Else, Ternary, and Logical AND).
      </p>

      {/* Controls to Switch Rendering Style */}
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1rem' }}>
        <span style={{ alignSelf: 'center', marginRight: '0.5rem' }}>Render Method:</span>
        {['ternary', 'logical_and', 'switch', 'if_else'].map(method => (
          <button 
            key={method} 
            onClick={() => setRenderMethod(method)}
            style={{ 
              background: renderMethod === method ? 'var(--accent-color)' : 'var(--bg-secondary)',
              color: renderMethod === method ? '#0f172a' : 'var(--text-primary)',
              padding: '0.35rem 0.75rem',
              fontSize: '0.85rem',
              border: '1px solid var(--border-color)'
            }}
          >
            {method.toUpperCase().replace('_', ' ')}
          </button>
        ))}
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '2rem' }}>
        {['books', 'blogs', 'courses'].map(tab => (
          <button 
            key={tab} 
            onClick={() => setActiveTab(tab)}
            style={{ 
              background: activeTab === tab ? 'linear-gradient(135deg, #38bdf8, #818cf8)' : 'var(--bg-secondary)',
              color: activeTab === tab ? '#0f172a' : 'var(--text-primary)',
              borderRadius: '20px',
              padding: '0.5rem 1.25rem'
            }}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Conditional Output Container */}
      <div style={{ minHeight: '200px' }}>
        {/* 1. TERNARY METHOD */}
        {renderMethod === 'ternary' && (
          activeTab === 'books' 
            ? <BookDetails /> 
            : activeTab === 'blogs' 
              ? <BlogDetails /> 
              : <CourseDetails />
        )}

        {/* 2. LOGICAL AND METHOD */}
        {renderMethod === 'logical_and' && (
          <>
            {activeTab === 'books' && <BookDetails />}
            {activeTab === 'blogs' && <BlogDetails />}
            {activeTab === 'courses' && <CourseDetails />}
          </>
        )}

        {/* 3. SWITCH METHOD */}
        {renderMethod === 'switch' && renderWithSwitch()}

        {/* 4. IF-ELSE METHOD */}
        {renderMethod === 'if_else' && renderWithIfElse()}
      </div>
    </div>
  )
}
