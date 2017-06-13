import React, { Component } from 'react';

import Button from './Button';

export default class Buttons extends Component {
  render() {
    return <div className="Buttons">
      <Button posOrNeg="negative" heartOrTimes="times" />
      <Button posOrNeg="positive" heartOrTimes="heart" />
    </div>
  }
}
