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
      <svg width="1000px" height="300px" viewBox="0 0 1000 300">
    <defs>
      <mask id="mask-2" fill="white">
        <use xlinkHref="#bottle-outline"></use>
      </mask>      
      
    </defs>
  
  <path d="M75,259.5 L925.229018,259.5" id="outer-progress" stroke="#916548" stroke-width="10" stroke-linecap="round"></path>
  <path d="M75,259.5 L925.229018,259.5" id="inner-progress" stroke="#19b5fe" stroke-width="5" stroke-linecap="round"></path>

    <g id="bottle" stroke-width="5" stroke="#916548" fill="none" fill-rule="evenodd">
      

          <rect id="bottle-lid"  x="57.5" y="95.5" width="35" height="15" rx="5"></rect>
          <rect id="bottle-holder" x="92.5" y="98.5" width="30" height="7" rx="3.5"></rect>

          <g mask="url(#mask-2)">
            <rect id="bottle-liquid" stroke="none" fill="#19b5fe"  x="15" y="110" width="120" height="120"></rect>
          </g>

          <rect id="bottle-outline" x="52.5" y="110.5" width="45" height="95" rx="5"></rect>

    </g>
</svg>


    )
    
    /*return (
      <div className="timerconfig">
          <div className="form-group" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <label htmlFor="setTime">Set Time</label>
              <input id="time" className="form-control" type="number" 
              defaultValue={this.props.baseTime.get('minutes')} onChange={this.handleChange}></input>
              <select id="workday" min="6" max="12" className="form-control"
              defaultValue={this.props.baseTime.get('hours')} onChange={this.handleChange2}>
                <option value="1">1</option>
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
      
    )*/
  }
}

TimerConfig.propTypes = {
  baseTime: PropTypes.object.isRequired,
}
