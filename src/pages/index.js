import React from 'react'

const IndexPage = ({ data }) => {
  const quizes = data.allSitePage.edges.map(item => item.node);
  return (
    <div>
      <h1>Quizelydoo!</h1>
      <h2>Here are the quizzes</h2>
      {quizes.map(quiz => 
        <div key={quiz.id} className="quiz">
          <a href={quiz.path}>{quiz.id}</a>
        </div>
      )}
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
query PageQuery {
  allSitePage(filter: {
    componentPath: {
      regex: "/quiz.js/"
    }
  }) {
	  edges {
	    node {
	      id,
        path,
	    }
	  }
	}
}
`;
