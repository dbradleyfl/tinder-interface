import React, { Component } from 'react';

export default class Button extends Component {
  constructor() {
    super()
    this.state = {
      pressed: false,
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
      <div className={"button " + this.props.posOrNeg} onMouseDown={this.handleMouseDown.bind(this)} onMouseUp={this.handleMouseUp.bind(this)} onMouseLeave={this.handleMouseUp.bind(this)} onTouchStart={this.handleMouseDown.bind(this)} onTouchEnd={this.handleMouseUp.bind(this)} onTouchCancel={this.handleMouseUp.bind(this)} style={dynamicStyle}>
        <i className={"fa fa-" + this.props.heartOrTimes + " fa-5x"} />
      </div>
    )
  }
}
