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
  }
}

TimerDisplay.propTypes = {
  currentTime: PropTypes.object.isRequired,
}
