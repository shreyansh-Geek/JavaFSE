import React, { Component } from 'react'

export default class Cart extends Component {
  render() {
    const { itemname, price } = this.props;
    return (
      <div className="card" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        borderLeft: '4px solid var(--success-color)' 
      }}>
        <div>
          <span style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-primary)' }}>🛒 {itemname}</span>
        </div>
        <div>
          <span style={{ 
            background: 'var(--bg-primary)', 
            padding: '0.4rem 0.8rem', 
            borderRadius: '6px', 
            fontWeight: 'bold', 
            color: 'var(--accent-color)',
            border: '1px solid var(--border-color)'
          }}>${price.toFixed(2)}</span>
        </div>
      </div>
    )
  }
}
