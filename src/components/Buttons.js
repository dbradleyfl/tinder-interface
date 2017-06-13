import React, { Component } from 'react';

export default class Buttons extends Component {
  render() {
    return <div className="Buttons">
      <div className="button negative">
        <i className="fa fa-times fa-5x" />
      </div>
      <div className="button positive">
        <i className="fa fa-heart fa-5x" />
      </div>
    </div>
  }
}
