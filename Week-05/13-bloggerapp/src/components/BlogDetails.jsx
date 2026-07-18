import React from 'react'

export default function BlogDetails() {
  const blogs = [
    { id: 1, title: "Mastering React Hooks", date: "2026-07-10", author: "Sarah Jenkins" },
    { id: 2, title: "Vite vs Webpack in 2026", date: "2026-06-25", author: "Devon Miller" }
  ]

  return (
    <div className="card" style={{ borderLeft: '4px solid var(--success-color)' }}>
      <h3 style={{ color: 'var(--success-color)' }}>📰 Tech Blog Articles</h3>
      <div style={{ display: 'grid', gap: '0.75rem', marginTop: '1rem' }}>
        {blogs.map(b => (
          <div key={b.id} style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
            <strong>{b.title}</strong>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Published on {b.date} by {b.author}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
