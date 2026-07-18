import React, { Component } from 'react'
import CountPeople from './components/CountPeople'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Mall Traffic Hub</h1>
        <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Class component tracking state variables and handling mutations on click events.
        </p>
        <CountPeople />
      </div>
    )
  }
}
