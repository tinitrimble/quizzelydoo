import React from "react"
import Link from "gatsby-link"
import Quiz from '../quiz/Quiz.js';
import * as PropTypes from "prop-types"

export default class QuizPage extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  }
  render() {
    return (
      <div>
        <h1>Quiz</h1>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query quizQuery($id: String!) {
    contentfulQuiz(id: { eq: $id }) {
      id,
      title,
      headerImage {
        id,
        file {
          url
        }
      },
      questions {
        id,
        questionText,
        answers {
          label,
          correct,
        }
      }
    }
  }
`;
