import React from 'react'
import Posts from './components/Posts'

export default function App() {
  return (
    <div className="container">
      <h1>Cognizant Dev Blog</h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Class component demonstrating componentDidMount() API fetching and componentDidCatch() error boundaries.
      </p>
      <Posts />
    </div>
  )
}
