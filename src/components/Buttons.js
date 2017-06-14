import React, { Component } from 'react';

import Button from './Button';

export default class Buttons extends Component {
  constructor() {
    super()
    this.state = {
      animationInProgress: false
    }
  }

  toggleAnimationInProgress(value) {
    this.setState({animationInProgress: value})
  }

  render() {
    return <div className="Buttons">
      <Button posOrNeg="negative" heartOrTimes="times" cards={this.props.cards} shiftCard={this.props.shiftCard} toggleAnimationInProgress={this.toggleAnimationInProgress.bind(this)} animationInProgress={this.state.animationInProgress} />
      <Button posOrNeg="positive" heartOrTimes="heart" cards={this.props.cards} shiftCard={this.props.shiftCard} toggleAnimationInProgress={this.toggleAnimationInProgress.bind(this)} animationInProgress={this.state.animationInProgress} />
    </div>
  }
}
