import React, { Component } from 'react'
import Cart from './Cart'

export default class OnlineShopping extends Component {
  render() {
    const items = [
      { id: 1, itemname: "Apple MacBook Pro 14", price: 1999.00 },
      { id: 2, itemname: "Dell UltraSharp 27 Monitor", price: 449.99 },
      { id: 3, itemname: "Sony WH-1000XM5 Headphones", price: 349.99 },
      { id: 4, itemname: "Keychron Q1 Mechanical Keyboard", price: 189.00 },
      { id: 5, itemname: "Logitech MX Master 3S Mouse", price: 99.99 }
    ]

    return (
      <div>
        <h3 style={{ color: 'var(--accent-color)', marginBottom: '1.5rem' }}>🛍️ Shopping Cart Items</h3>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {items.map(item => (
            <Cart key={item.id} itemname={item.itemname} price={item.price} />
          ))}
        </div>
        <div style={{ 
          marginTop: '2rem', 
          textAlign: 'right', 
          borderTop: '1px solid var(--border-color)', 
          paddingTop: '1.5rem',
          fontSize: '1.25rem',
          fontWeight: 'bold' 
        }}>
          Total: <span style={{ color: 'var(--accent-color)' }}>
            ${items.reduce((acc, curr) => acc + curr.price, 0).toFixed(2)}
          </span>
        </div>
      </div>
    )
  }
}
