import React, { Component } from 'react'

export default class Getuser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      loading: true,
      error: null
    }
  }

  fetchRandomUser = async () => {
    this.setState({ loading: true, error: null })
    try {
      const response = await fetch('https://api.randomuser.me/')
      if (!response.ok) throw new Error('API server returned error status')
      const data = await response.json()
      const user = data.results[0]
      this.setState({ user, loading: false })
    } catch (err) {
      this.setState({ error: err.message, loading: false })
    }
  }

  componentDidMount() {
    this.fetchRandomUser()
  }

  render() {
    const { user, loading, error } = this.state

    if (loading) {
      return (
        <div className="card" style={{ textAlign: 'center', padding: '2rem' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: '500', color: 'var(--accent-color)' }}>Loading user data...</div>
        </div>
      )
    }

    if (error) {
      return (
        <div className="card" style={{ borderColor: 'var(--danger-color)', textAlign: 'center', padding: '2rem' }}>
          <h3 style={{ color: 'var(--danger-color)' }}>⚠️ Fetch Failure</h3>
          <p>{error}</p>
          <button onClick={this.fetchRandomUser}>Retry Fetch</button>
        </div>
      )
    }

    if (!user) return null

    const { title, first, last } = user.name
    const nameStr = `${title} ${first} ${last}`
    const imageUrl = user.picture.large
    const email = user.email

    return (
      <div className="card" style={{ 
        textAlign: 'center', 
        padding: '2rem', 
        borderLeft: '4px solid var(--accent-color)'
      }}>
        <img 
          src={imageUrl} 
          alt={first} 
          style={{ 
            width: '120px', 
            height: '120px', 
            borderRadius: '50%', 
            border: '3px solid var(--accent-color)', 
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            marginBottom: '1rem'
          }}
        />
        <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '0.25rem' }}>{nameStr}</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>📧 {email}</p>
        
        <button onClick={this.fetchRandomUser}>
          🔄 Fetch Another Random User
        </button>
      </div>
    )
  }
}
