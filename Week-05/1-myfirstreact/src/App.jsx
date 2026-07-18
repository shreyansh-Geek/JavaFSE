import React from 'react'

export default function App() {
  return (
    <div className="container">
      <h1>Welcome to the first session of React</h1>
      
      <div className="card" style={{ borderLeft: '4px solid var(--accent-color)' }}>
        <h3>🚀 What is a Single Page Application (SPA)?</h3>
        <p>A Single-Page Application is a web application or website that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default browser behavior of loading entire new pages.</p>
      </div>

      <div className="card" style={{ borderLeft: '4px solid var(--success-color)' }}>
        <h3>✨ Key Benefits of SPA</h3>
        <ul>
          <li><strong>Speed & Responsiveness:</strong> Only requests data payloads, keeping the shell constant.</li>
          <li><strong>Caching Capabilities:</strong> Can store local data to work offline or semi-offline.</li>
          <li><strong>Fluid UX:</strong> Smooth transitions and animations without white flashes.</li>
        </ul>
      </div>

      <div className="card" style={{ borderLeft: '4px solid var(--accent-color)' }}>
        <h3>🛡️ React & Virtual DOM</h3>
        <p>React builds a tree of Virtual DOM nodes. When state changes, React diffs the virtual DOM with the real DOM and applies only the absolute minimum required updates, making UI renders incredibly fast and efficient.</p>
      </div>
    </div>
  )
}
