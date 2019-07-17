import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as timerStates from '../timerStates';

export default class TimerButton extends Component {
  constructor() {
    super();

    this.getButton = this.getButton.bind(this);
  }

  getButton() {
    if (this.props.timerState === timerStates.NOT_SET) {
      return (<h4 style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <button className="btn btn-success"
      onClick={this.props.startTimer}>Set Timer</button></h4>)
    }

    if (this.props.timerState === timerStates.RUNNING) {
      return (<h4 style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <button className="btn btn-danger"
      onClick={this.props.stopTimer}>Stop Timer</button></h4>)
    }

    if (this.props.timerState === timerStates.COMPLETE) {
      return (<h4 style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}> 
      <button className="btn btn-info"
      onClick={this.props.stopTimer}>Reset</button></h4>)
    }

  }

  render() {
    return (
      <div className="timerbutton">
        {this.getButton()}
      </div>
    )
  }
}

TimerButton.propTypes = {
  startTimer: PropTypes.func.isRequired,
  timerState: PropTypes.object.isRequired
}