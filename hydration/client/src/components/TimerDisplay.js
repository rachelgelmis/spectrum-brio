import React, { Component } from 'react';
import PropTypes from 'prop-types';

const leftPad = (val) => {
  if (val < 10) {
    return `0${val}`;
  }
  return `${val}`;
}

export default class TimerDisplay extends Component {
  render() {
    return (
      <div className="timerdisplay">
          <h2 className="text-center">
            {`${leftPad(this.props.currentTime.get('hours'))}:${leftPad(this.props.currentTime.get('minutes'))}:${leftPad(this.props.currentTime.get('seconds'))}`}
          </h2>
      </div>
    )
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
  }
}

TimerDisplay.propTypes = {
  currentTime: PropTypes.object.isRequired,
}
