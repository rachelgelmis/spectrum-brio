import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

export default class TimerHeader extends Component {
  render() {
    return (
      <div className="timerheader">
      <Card>
        <Card.Title>
          <div className="text-center" style={{fontSize: 36}}>
            Hydration Timer
          </div>
        </Card.Title>
      </Card>
      </div>
    )
  }
}
