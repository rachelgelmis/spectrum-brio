import React from 'react';
import PropTypes from 'prop-types';

class WaterBottle extends React.Component {

    constructor() {
        super()
        this.state = {
            lidx: "17.5",
            holderx: "52.5",
            liquidx: "11",
            outlinex: "12.5",
        }
    }

    render() {
        return (
            <div>
                <svg width="1000px" height='300px'>
                <defs></defs>
      <mask id="mask-2" fill="white">
      </mask>      
      
    <g id="bottle" stroke-width="5" stroke="#916548" fill="none" fill-rule="evenodd">
      

          <rect id="bottle-lid"  x={this.props.lidx} y="145.5" width="35" height="15" rx="5"></rect>
          <rect id="bottle-holder" x={this.props.holderx} y="148.5" width="30" height="7" rx="3.5"></rect>

          <g>
            <rect id="bottle-liquid" stroke="none" fill="#19b5fe"  x={this.props.liquidx} y="162"
            width="45" height="91"></rect>
          </g>

          <rect id="bottle-outline" x={this.props.outlinex} y="160.5" width="45" height="95" rx="5"></rect>

    </g>
</svg>
            </div>
        )
    }
}

WaterBottle.propTypes = {
    lidx: PropTypes.object.isRequired,
    holderx: PropTypes.object.isRequired,
    liquidx: PropTypes.object.isRequired,
    outlinex: PropTypes.object.isRequired
}

export default WaterBottle