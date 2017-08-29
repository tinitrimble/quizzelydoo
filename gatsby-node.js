const slug = require('slug');
const path = require('path');

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programatically
// create pages.
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local Contentful graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.
    graphql(`{
      allContentfulQuiz {
        edges {
          node {
            id
            title
          }
        }
      }
    }`)
      .then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        const quizTemplate = path.resolve(`./src/templates/quiz.js`)
        result.data.allContentfulQuiz.edges.forEach(edge => {
          console.log(edge.node);
          createPage({
            path: slug(edge.node.title),
            component: quizTemplate,
            context: {
              id: edge.node.id,
            }
          })
        })
        resolve();
      })
  })
}
