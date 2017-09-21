import React, { Component } from 'react';
import './Counter.scss';
import PropTypes from 'prop-types';

class Counter extends Component {
  static propTypes = {
    totalscore: PropTypes.number.isRequired
  }
  render() {
    return (
      <div className="count">
        <p>Your score is: {this.props.totalscore}</p>
      </div>
    )
  }
}




export default Counter;
