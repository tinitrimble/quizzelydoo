import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => {
  const quizes = data.allContentfulQuiz.edges.map(item => item.node);
  return (
    <div>
      <h1>Quizelydoo!</h1>
      <h2>Here are the quizzes</h2>
      {quizes.map(quiz => 
        <div className="quiz">
          <h4>{ quiz.title }</h4>
        </div>
      )}
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
query PageQuery {
  allContentfulQuiz {
    edges {
      node {
        id
        title
      }
    }
  }
}
`;
