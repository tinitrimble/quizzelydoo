import React, { Component } from 'react';
import './Introquiz.css';
import PropTypes from 'prop-types';
import scrollToElement from 'scroll-to-element';

class Introquiz extends Component {
  static propTypes = {
    quiztitle: PropTypes.string.isRequired,
    intropic: PropTypes.string,
    quizsummary: PropTypes.string,
    onClick: PropTypes.func.isRequired
  }
  render() {
    return (
      <div className="quiz-title">
        <h1 className ="quiz-name">{this.props.quiztitle}</h1>
        <img src={this.props.intropic}  className="Quiz-pic" />
        <div className="sum">
          {this.props.quizsummary}
        </div>
        <button className="begin-quiz" onClick={this.props.onClick}>Begin Quiz</button>
      </div>
    )
  }
}

export default Introquiz;



