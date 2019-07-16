import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default class TimerConfig extends Component {

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const newBaseTime = moment.duration(0);
    if (event.target.id === 'hours') {
      newBaseTime.subtract(newBaseTime.get('hours')).add(parseInt(event.target.value), 'hours')
    }
    if (event.target.id === 'minutes') {
      newBaseTime.subtract(newBaseTime.get('minutes')).add(parseInt(event.target.value), 'minutes')
    }
    if (event.target.id === 'seconds') {
      newBaseTime.subtract(newBaseTime.get('seconds')).add(parseInt(event.target.value), 'seconds')
    }

    this.props.setBaseTime(newBaseTime);
  }

  render() {
    return (
      <div className="timerconfig">
          <div className="form-group">
              <label htmlFor="hours">Hours</label>
              <input id="hours" 
              style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} 
              className="form-control" type="number" 
              defaultValue={this.props.baseTime.get('hours')}
              onChange={this.handleChange}></input>
              <label htmlFor="minutes">Minutes</label>
              <input id="minutes" 
              style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} 
              className="form-control" type="number" 
              defaultValue={this.props.baseTime.get('minutes')}
              onChange={this.handleChange}></input>
              <label htmlFor="seconds">Seconds</label>
              <input id="seconds" 
              style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} 
              className="form-control" type="number" 
              defaultValue={this.props.baseTime.get('seconds')}
              onChange={this.handleChange}></input>
          </div>
      </div>
    )
  }
}

TimerConfig.propTypes = {
  baseTime: PropTypes.object.isRequired,
}
