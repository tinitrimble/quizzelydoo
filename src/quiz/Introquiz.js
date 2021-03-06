import React, { Component } from 'react';
import './Introquiz.scss';
import PropTypes from 'prop-types';

class Introquiz extends Component {
  static propTypes = {
    quiztitle: PropTypes.string.isRequired,
    intropic: PropTypes.string,
    quizsummary: PropTypes.string,
  }
  render() {
    return (
      <div className="quiz-title">
        <h1 className ="quiz-name">{this.props.quiztitle}</h1>
        <img src={this.props.intropic}  className="Quiz-pic" />
        <div className="sum">
          {this.props.quizsummary}
        </div>
      </div>
    )
  }
}

export default Introquiz;



