import React from "react"
import Link from "gatsby-link"
import Quiz from '../quiz/Quiz.js';
import * as PropTypes from "prop-types"

export default class QuizPage extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  }
  render() {
    const {
      title,
      questions,
      results,
      description,
      headerImage
    } = this.props.data.contentfulQuiz;
    return (
      <div>
        <h3>This quizPage renders this page.... then the quiz component renders what is below</h3>
        <Quiz
          title={title}
          intropic={headerImage.file.url}
          description={description}
          questions={questions}
          results={results}
        />
      </div>
    )
  }
}

export const pageQuery = graphql`
  query quizQuery($id: String!) {
    contentfulQuiz(id: { eq: $id }) {
      id
      title
      description
      headerImage {
        id
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
      results {
        headline
        resultPicture {
          file {
            url
          }
        }
        summery {
          summery
        }
      }
    }
  }
`;
