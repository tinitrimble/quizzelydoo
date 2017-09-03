import React, { Component } from 'react';
import './Counter.css';
import PropTypes from 'prop-types';

class Counter extends Component {
  static propTypes = {
    totalscore: PropTypes.number.isRequired
  }
  render() {
    return (
      <div className="counter-info">
        <p>Your score is: {this.props.totalscore}</p>
      </div>
    )
  }
}




export default Counter;
