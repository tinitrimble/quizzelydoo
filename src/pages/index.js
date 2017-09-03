import React from 'react'
import slug from 'slug';
import Link from 'gatsby-link';

const IndexPage = ({ data }) => {
  const quizes = data.allContentfulQuiz.edges.map(edge => edge.node);
  return (
    <div>
      <h2>Here are the quizzes</h2>
      {quizes.map(quiz =>
        <div>
          <Link to={slug(quiz.title)} key={quiz.id}>{quiz.title}</Link>
        </div>
      )}
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
query quizzesQuery {
  allContentfulQuiz {
    edges {
      node {
        id
        title
      }
    }
  }
}
`
