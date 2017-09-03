import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Results.css';
import scrollToElement from 'scroll-to-element';

class Results extends Component {
  static propTypes = {
    score: PropTypes.number.isRequired,
    headline: PropTypes.string.isRequired,
    resultpic: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
  }
  componentDidMount() {
    window.setTimeout(() => {
      scrollToElement('.share-this', {
        align: 'middle',
        duration: 500
      })
    }, 500)
  }
  render() {
    return (
      <div className="result-box" >
      <h1>You scored: {this.props.score}</h1>
      <h2>{this.props.headline}</h2>
      <img src={this.props.resultpic} />
      <p>{this.props.summary}</p>
      <div className= "share-this">
        <a href="www.google.com">Share your result with your friends!</a>
        <img className="fbpic" src="https://www.butsch-meier.de/wp-content/uploads/facebook-footer.png" href="www.facebook.com" />
      </div>
      </div>
    )
  }
}

export default Results;
