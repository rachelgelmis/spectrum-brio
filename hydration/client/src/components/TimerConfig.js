import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default class TimerConfig extends Component {

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    var newBaseTime = moment.duration(0);
    if (event.target.id === 'work') {
      newBaseTime = moment.duration(25, 'minutes')
    }
    if (event.target.id === 'short') {
      newBaseTime = moment.duration(5, 'minutes')
    }
    if (event.target.id === 'long') {
      newBaseTime = moment.duration(10, 'minutes')
    }

    this.props.setBaseTime(newBaseTime);
  }

  render() {
    return (
      <div className="timerconfig">
          <div className="form-group" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <label htmlFor="setTime">Set Time</label>
              <input id="time" className="form-control" type="number"></input>
          </div>
      </div>
    )
  }
}

TimerConfig.propTypes = {
  baseTime: PropTypes.object.isRequired,
}
