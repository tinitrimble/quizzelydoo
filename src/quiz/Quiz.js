import React, { Component } from 'react';
import Introquiz from './Introquiz.js';
import Counter from './Counter.js';
import Question from './Question.js';
import Results from './Results.js';
import * as PropTypes from "prop-types"
import './Quiz.css';

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
    this.handleQuizStart = this.handleQuizStart.bind(this)
  }
  componentWillMount() {
    this.setState({
      correctAnswers: 0,
      userAnswers: [],
      showIntro: true
    })
  }
  handleQuizStart() {
    this.setState({ showIntro: false })
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
  getResults() {
    const totalQuestions = this.props.questions.length;
    const totalAnswered = this.state.userAnswers.length;
    if ( totalAnswered === totalQuestions ) {
      const score = this.getCorrectAnswerCount() / totalQuestions;
      const resultNumber = Math.round((this.props.results.length - 1) * score);
      return <Results
        headline={this.props.results[resultNumber].headline}
        resultpic={this.props.results[resultNumber].resultpic}
        summary={this.props.results[resultNumber].summary} />
    }
  }
  render() {
    const isQuizIntro = this.state.showIntro;
    return (
      <div className="App">
        {isQuizIntro ? (
          <div className="Introduction">
            <Introquiz
              quiztitle={this.props.title}
              intropic={this.props.intropic}
              quizsummary={this.props.description}
              onClick={this.handleQuizStart}/>
          </div>
        ) : (
          <div className="Quiz-Display">
            <Counter
              totalscore={this.getCorrectAnswerCount()} 
              className="counterpos" />
            {this.props.questions.map((question, index) =>
              <Question
                key={index}
                questionNumber={index}
                text={question.text}
                picture={question.picture}
                answers={question.answers}
                onClick={this.handleAnswerSelected}
                userAnswer={this.state.userAnswers[index]}/>
            )}
          </div>
        )}
        {this.getResults()}
      </div>
    )
  }
}