import React, { Component } from 'react'

export default class CountPeople extends Component {
  constructor(props) {
    super(props)
    this.state = {
      entrycount: 0,
      exitcount: 0
    }
  }

  UpdateEntry = () => {
    this.setState(prevState => ({
      entrycount: prevState.entrycount + 1
    }))
  }

  UpdateExit = () => {
    this.setState(prevState => ({
      exitcount: prevState.exitcount + 1
    }))
  }

  render() {
    const netCount = this.state.entrycount - this.state.exitcount

    return (
      <div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
          
          {/* Entries Card */}
          <div className="card" style={{ borderTop: '4px solid var(--success-color)', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--success-color)' }}>📥 Mall Entries</h3>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', margin: '1rem 0' }}>
              {this.state.entrycount}
            </div>
            <button onClick={this.UpdateEntry}>Login Customer</button>
          </div>

          {/* Exits Card */}
          <div className="card" style={{ borderTop: '4px solid var(--danger-color)', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--danger-color)' }}>📤 Mall Exits</h3>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', margin: '1rem 0' }}>
              {this.state.exitcount}
            </div>
            <button 
              style={{ backgroundColor: 'var(--danger-color)' }}
              onClick={this.UpdateExit}
            >
              Exit Customer
            </button>
          </div>

        </div>

        {/* Traffic Statistics */}
        <div className="card" style={{ textAlign: 'center', borderLeft: '4px solid var(--accent-color)' }}>
          <h3>👥 Current Occupancy</h3>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent-color)', margin: '0.5rem 0' }}>
            {netCount >= 0 ? netCount : 0}
          </div>
          <p style={{ color: 'var(--text-secondary)' }}>Net active customers inside mall</p>
        </div>
      </div>
    )
  }
}
