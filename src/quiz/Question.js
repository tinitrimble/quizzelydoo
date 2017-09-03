import React, { Component } from 'react';
import './Question.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Question extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    picture: PropTypes.string,
    answers: PropTypes.arrayOf(PropTypes.shape({
      option: PropTypes.string.isRequired,
      correct: PropTypes.bool.isRequired
    })),
    onClick: PropTypes.func.isRequired,
    questionNumber: PropTypes.number.isRequired,
    userAnswer: PropTypes.shape({
      option: PropTypes.string.isRequired,
      correct: PropTypes.string.isRequired
    })
  }
  getQuestionClassName() {
    return classNames({
      question: true,
      rightAnswer: this.props.userAnswer && (this.props.userAnswer.correct === true),
      wrongAnswer: this.props.userAnswer && (this.props.userAnswer.correct === false),
      answered: this.props.userAnswer
    });
  }
  getButtonClassName(answer) {
    const classes = { choice: true };
    if (this.props.userAnswer && this.props.userAnswer.option === answer.option) {
      if (this.props.userAnswer.correct) {
        classes.rightAnswer = true;
      } else {
        classes.wrongAnswer = true;
      }
    }
    if (!!this.props.userAnswer) {
      classes.answered = true;
     } else {
       classes.answered = false;
     }
    return classNames(classes);
  }
  render() {
    return (
      <div className={this.getQuestionClassName()} >
        <h3>{this.props.text}</h3>
        <img src={this.props.picture} alt="" />
        <div className="possible-choices">
          {this.props.answers.map((answer, index) =>
            <button
              key={index}
              className={this.getButtonClassName(answer)}
              onClick={() => this.props.onClick(answer, this.props.questionNumber)}
              disabled={!!this.props.userAnswer}>
              {answer.option}
            </button>
          )}
        </div>
      </div>
    );
  }
}


export default Question;
