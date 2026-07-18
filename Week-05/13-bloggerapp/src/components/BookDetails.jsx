import React from 'react'

export default function BookDetails() {
  const books = [
    { id: 1, title: "Clean Code", author: "Robert C. Martin", pages: 464 },
    { id: 2, title: "You Don't Know JS", author: "Kyle Simpson", pages: 120 },
    { id: 3, title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", pages: 612 }
  ]

  return (
    <div className="card" style={{ borderLeft: '4px solid var(--accent-color)' }}>
      <h3 style={{ color: 'var(--accent-color)' }}>📚 Selected Book Catalog</h3>
      <div style={{ display: 'grid', gap: '0.75rem', marginTop: '1rem' }}>
        {books.map(b => (
          <div key={b.id} style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
            <strong>{b.title}</strong>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>By {b.author} | {b.pages} pages</div>
          </div>
        ))}
      </div>
    </div>
  )
}
