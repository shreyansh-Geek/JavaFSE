import React, { useState } from 'react'
import GitClient from './GitClient'

export default function App() {
  const [username, setUsername] = useState('techiesyed')
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleFetch = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setRepos([])
    
    try {
      const client = new GitClient()
      const data = await client.getRepositories(username)
      setRepos(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container" style={{ maxWidth: '600px' }}>
      <h1>GitHub Repos Hub</h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Uses Axios to fetch repositories, with fully mocked API testing suites.
      </p>

      <form onSubmit={handleFetch} style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
        <input 
          type="text" 
          placeholder="GitHub Username"
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{ flex: 1, padding: '0.65rem', background: '#0f172a', border: '1px solid var(--border-color)', color: 'white', borderRadius: '6px' }}
        />
        <button type="submit">Fetch Repos</button>
      </form>

      {loading && <p style={{ textAlign: 'center' }}>Loading repositories...</p>}
      {error && <p style={{ color: 'var(--danger-color)', textAlign: 'center' }}>{error}</p>}

      {repos.length > 0 && (
        <div className="card">
          <h3 style={{ color: 'var(--accent-color)' }}>📂 Repositories ({repos.length})</h3>
          <ul style={{ listStyleType: 'none', marginTop: '1rem' }}>
            {repos.map((name, i) => (
              <li key={i} style={{ padding: '0.5rem 0', borderBottom: '1px solid var(--border-color)' }}>
                📂 {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
