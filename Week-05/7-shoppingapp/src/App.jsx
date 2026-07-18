import React, { Component } from 'react'
import OnlineShopping from './components/OnlineShopping'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>TechCheckout</h1>
        <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Class-based property mapping and parent-to-child React component looping.
        </p>
        <OnlineShopping />
      </div>
    )
  }
}
