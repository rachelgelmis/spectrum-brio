import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import TimerHeader from './TimerHeader';
import TimerDisplay from './TimerDisplay';
import TimerButton from './TimerButton';
import TimerConfig from './TimerConfig';
import moment from 'moment';
import * as timerStates from '../timerStates';

export default class Timer extends Component {

  constructor() {
    super()
    this.state = {
      currentTime: moment.duration(25, 'minutes'),
      baseTime: moment.duration(25, 'minutes'),
      timerState: timerStates.NOT_SET,
      timer: null,
      count: 8,
    }

    this.setBaseTime = this.setBaseTime.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.reduceTimer = this.reduceTimer.bind(this);
    this.reduceCount = this.reduceCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }

  setBaseTime(newBaseTime) {
    this.setState({baseTime: newBaseTime,
    currentTime: newBaseTime
    });
  }

  startTimer() {
    this.setState({
      timerState: timerStates.RUNNING,
      timer: setInterval(this.reduceTimer, 1000)
    })
  }

  stopTimer() {
    if (this.state.timer) {
      clearInterval(this.state.timer);
    }

    this.setState({
      timerState: timerStates.NOT_SET,
      timer: null,
      currentTime: moment.duration(this.state.baseTime)
    })
  }

  completeTimer() {
    if (this.state.timer) {
      clearInterval(this.state.timer);
    }

    this.setState({
      timerState: timerStates.COMPLETE,
      timer: null
    });

    alert("Time is up! Drink your last cup of water")
  }

  reduceTimer() {
    if (this.state.currentTime.get('hours') === 0 
    && this.state.currentTime.get('minutes') === 0 
    && this.state.currentTime.get('seconds') === 0
    && this.state.count === 1) {
      this.completeTimer();
      this.resetCount();
      return;
    }

    else if (this.state.currentTime.get('hours') === 0 
    && this.state.currentTime.get('minutes') === 0 
    && this.state.currentTime.get('seconds') === 0) {
      this.reduceCount();
      this.stopTimer();
      alert("Time for Water: Cup " + (8 - this.state.count));
      return;
    }

    const newTime = moment.duration(this.state.currentTime);
    newTime.subtract(1, 'second');

    this.setState({
      currentTime: newTime
    })
  }

  reduceCount() {
    if (this.state.count !== 0) {
      this.setState({
        count: this.state.count - 1
      })
    }
    return;
  }

  resetCount() {
    this.setState({
      count: 8
    })
    return;
  }

  render() {
    return (
      <div>
      <TimerHeader />
      <Card style={{padding: "50px"}}>
        <Card.Body>
          <TimerDisplay currentTime={this.state.currentTime}/>
          <TimerButton startTimer={this.startTimer}
          stopTimer={this.stopTimer}
          timerState={this.state.timerState}/>
          {
            (this.state.timerState !== timerStates.RUNNING)
            &&
            (<TimerConfig baseTime={this.state.baseTime} 
            setBaseTime = {this.setBaseTime}
            />)
          }
        </Card.Body>
      </Card>
    </div>
    )
  }
}
