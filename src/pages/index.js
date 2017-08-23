import React from 'react'
import slug from 'slug';
import Link from 'gatsby-link';

const IndexPage = ({ data }) => {
  const quizes = data.allContentfulQuiz.edges.map(item => ({
    slug: slug(item.node.title),
    title: item.node.title,
  }));
  return (
    <div>
      <h1>Quizelydoo!</h1>
      <h2>Here are the quizzes</h2>
      {quizes.map(quiz => 
        <Link key={quiz.slug} to={quiz.slug}>{quiz.title}</Link>
      )}
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
query PageQuery {
	allContentfulQuiz {
    edges {
      node {
        title
      }
    }
	}
}
`;
