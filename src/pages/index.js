import React from 'react'
import slug from 'slug';
import Link from 'gatsby-link';
import index from './index.scss';

const IndexPage = ({ data }) => {
  const quizes = data.allContentfulQuizOneCorrect.edges.map(edge => edge.node);
  return (
    <div className="mainquizzes">
      <h2>Featured Quizzes</h2>
      {quizes.map(quiz =>
        <div className="quizbox">
          <Link to={slug(quiz.title)} className="quizlink" key={quiz.id}>
            <img src={quiz.headerImage.file.url} className="headerImage"/>
            <div className="quiztitle">
              {quiz.title}
            </div>
          </Link>
        </div>
      )}
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
query quizzesQuery {
  allContentfulQuizOneCorrect {
    edges {
      node {
        id
        title
        headerImage {
        file {url}
       }
      }
    }
  }
}
`
