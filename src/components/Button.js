import React, { Component } from 'react';
import TWEEN from '@tweenjs/tween.js'

function animate(time) {
  requestAnimationFrame(animate);
  TWEEN.update(time);
}

export default class Button extends Component {
  constructor() {
    super()
    this.state = {
      pressed: false,
    }
  }

  componentDidMount() {
    requestAnimationFrame(animate);
  }

  handleClick(event) {
    if (this.props.animationInProgress === false) {
      this.props.toggleAnimationInProgress(true)
      let currentCard = document.getElementsByClassName('Card')[this.props.cards.length - 1]
      let leftBound = -1 * window.innerWidth
      let rightBound = window.innerWidth + 250
      let leftOrRight = this.props.posOrNeg === "positive" ? rightBound : leftBound

      var tween = new TWEEN.Tween({x: 0, y: 0})
      tween.to({ x: leftOrRight, y: -100 }, 450)
      tween.onUpdate(function () {
        currentCard.style.transform = 'translate(' + this.x + 'px, ' + this.y + 'px)';
      })
      tween.onComplete(() => {
        this.props.shiftCard()
        this.props.toggleAnimationInProgress(false)
      })
      tween.start();
    }
  }

  handleMouseDown(event) {
    this.setState({pressed: true})
  }

  handleMouseUp(event) {
    this.setState({pressed: false})
  }

  render() {
    let dynamicStyle
    if (this.state.pressed) {
        dynamicStyle = {boxShadow: '0px 0px 10px 3px rgba(0, 0, 0, 0.2)'}
    }

    return (
      <div className={"button " + this.props.posOrNeg} onClick={this.handleClick.bind(this)} onMouseDown={this.handleMouseDown.bind(this)} onMouseUp={this.handleMouseUp.bind(this)} onMouseLeave={this.handleMouseUp.bind(this)} onTouchStart={this.handleMouseDown.bind(this)} onTouchEnd={this.handleMouseUp.bind(this)} onTouchCancel={this.handleMouseUp.bind(this)} style={dynamicStyle}>
        <i className={"fa fa-" + this.props.heartOrTimes + " fa-5x"} />
      </div>
    )
  }
}
