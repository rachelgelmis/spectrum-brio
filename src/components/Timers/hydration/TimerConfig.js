import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default class TimerConfig extends Component {

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }

  handleChange(event) {
    var newBaseTime = moment.duration(0);
    
    if (event.target.id === 'time') {
      newBaseTime.subtract(newBaseTime.get('minutes')).add(parseInt(event.target.value), 'minutes');
    }

    this.props.setBaseTime(newBaseTime);
  }


  handleChange2(event) {
    var newBaseTime = moment.duration(0);
    const numCups = 8;
    if (event.target.id === 'workday') {
      var numMins = parseInt(event.target.value) * 60;
      var minsPerCup = numMins / numCups;
      var hrs = Math.floor(minsPerCup / 60);
      var mins = Math.floor(minsPerCup % 60);
      console.log(numMins);
      console.log(minsPerCup);
      console.log(hrs);
      console.log(mins);
      newBaseTime.subtract(newBaseTime.get('hours')).add(hrs, 'hours');
      newBaseTime.subtract(newBaseTime.get('minutes')).add(mins, 'minutes');
      
    }
    this.props.setBaseTime(newBaseTime);
  }

  render() {
    return (
      <div className="timerconfig">
          <div className="form-group" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>


              <select id="workday" min="6" max="12" className="form-control"
              defaultValue={this.props.baseTime.get('hours')} onChange={this.handleChange2}>
                <option value="1">How Many Hours Do You Work Today?</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
          </div>
      </div>
    )
  }
}

TimerConfig.propTypes = {
  baseTime: PropTypes.object.isRequired,

}
