import React from 'react'

export default function CourseDetails() {
  const courses = [
    { id: 1, title: "React FSE Development", duration: "8 Weeks", level: "Intermediate" },
    { id: 2, title: "Advanced DevOps & Cloud Arch", duration: "12 Weeks", level: "Advanced" }
  ]

  return (
    <div className="card" style={{ borderLeft: '4px solid #f59e0b' }}>
      <h3 style={{ color: '#f59e0b' }}>🎓 Curriculum Syllabus</h3>
      <div style={{ display: 'grid', gap: '0.75rem', marginTop: '1rem' }}>
        {courses.map(c => (
          <div key={c.id} style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
            <strong>{c.title}</strong>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{c.duration} | Level: {c.level}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
