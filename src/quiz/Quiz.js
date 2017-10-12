import React, { Component } from 'react';
import Introquiz from './Introquiz.js';
import Question from './Question.js';
import Results from './Results.js';
import * as PropTypes from "prop-types"
import classNames from 'classnames';
import './Quiz.scss';

export default class Quiz extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    intropic: PropTypes.string,
    description: PropTypes.string,
    questions: PropTypes.array.isRequired,
    results: PropTypes.array.isRequired,
  }
  constructor() {
    super();
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this)
  }
  componentWillMount() {
    this.setState({
      correctAnswers: 0,
      userAnswers: [],
    })
  }
  handleAnswerSelected(answer, questionNumber) {
    const updatedUserAnswers = this.state.userAnswers.slice();
    updatedUserAnswers[questionNumber] = answer
    this.setState({
      userAnswers: updatedUserAnswers
    });
  }
  getCorrectAnswerCount() {
    return this.state.userAnswers
      .filter(answer => answer.correct)
      .length;
  }
  getOneAnswerResult() {
    const totalQuestions = this.props.questions.length;
    const totalAnswered = this.state.userAnswers.length;
    if ( totalAnswered === totalQuestions ) {
      const score = Math.round((this.getCorrectAnswerCount() / totalQuestions) * 100);
      const resultNumber = Math.round((this.props.results.length - 1) * (score / 100));
      return <Results
        headline={this.props.results[resultNumber].headline}
        score={score}
        resultpic={this.props.results[resultNumber].resultPicture.file.url}
        summary={this.props.results[resultNumber].summery.summery} />
    }
  }
  getAnswerMatchResult() {
    const totalQuestions = this.props.questions.length;
    const totalAnswered = this.state.userAnswers.length;
    const counts = {};
    const compare = -1;
    const mostFrequent = [];
    for (i = 0; i <= this.totalAnswered.length; i++) {
      const resultAnswer = this.userAnswer.answerAnswerMatch[i];
      if (counts[resultAnswer] === undefined) {
        counts[resultAnswer] = 1;
      } else {
        counts[resultAnswer] = counts[resultAnswer] + 1;
      }
      if (counts[resultAnswer] > compare) {
        this.compare = counts[resultAnswer];
        this.mostFrequent = userAnswer.answerAnswerMatch[i];
        return <Results
          headline={this.props.resultAnswer[i]}
          score={this.props.resultAnswerMatch[i]}
          resultpic={this.props.resultAnswerMatch[i]}
          summary={this.props.resultAnswerMatch[i]} />
      }
    }
  }
  getResults() {
    const totalQuestions = this.props.questions.length;
    const totalAnswered = this.state.userAnswers.length;
    if (totalAnswered === totalQuestions) {
      if (this.userAnswers.hasOwnProperty('correct')) {
        return this.getOneAnswerResult()
      } else {
        return this.getAnswerMatchResult()
      }
    }
  }
  render() {
    console.log(this.props.questions);
    return (
      <div className="App">
      <div className="Introduction">
        <Introquiz
          quiztitle={this.props.title}
          intropic={this.props.intropic}
          quizsummary={this.props.description}
          onClick={this.handleQuizStart}/>
      </div>
      <div className="Quiz-Display">
        {this.props.questions.map((question, index) => {
          let picture;
          if (question.picture) {
            picture = question.picture.file.url;
          }
          return (<Question
            key={index}
            questionNumber={index}
            text={question.questionText}
            picture={picture}
            answers={question.answers}
            onClick={this.handleAnswerSelected}
            userAnswer={this.state.userAnswers[index]}/>);
        })}
      </div>
      {this.getResults()}
      </div>
    )}
}
