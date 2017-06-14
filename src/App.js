import React, { Component } from 'react'
import './App.css'

import Buttons from './components/Buttons'
import CardDeck from './components/CardDeck'

const IMAGE_URLS = ["/me.jpg", "/me2.jpg", "/me3.jpg", "/me4.jpg", "/me5.jpg"]

class App extends Component {
  constructor() {
    super()
    this.state = {
      cards: IMAGE_URLS
    }
  }

  componentDidUpdate() {
    if (this.state.cards.length === 0) this.setState({cards: IMAGE_URLS})
  }

  shiftCard() {
    let cards = this.state.cards.slice()
    cards.splice(0,1)
    this.setState({cards})
  }

  render() {
    return (
      <div className="App">
        <CardDeck cards={this.state.cards} shiftCard={this.shiftCard.bind(this)} />
        <Buttons cards={this.state.cards} shiftCard={this.shiftCard.bind(this)} />
      </div>
    )
  }
}

export default App;
