import React, { Component } from 'react'
import './App.css'

import Buttons from './components/Buttons'
import CardDeck from './components/CardDeck'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CardDeck />
        <Buttons />
      </div>
    )
  }
}

export default App;
