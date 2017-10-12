const slug = require('slug');
const path = require('path');

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programatically
// create pages.
exports.createPages = ({
  graphql,
  boundActionCreators
}) => {
  const {
    createPage
  } = boundActionCreators
  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local Contentful graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.
    graphql(`{
      allContentfulQuizOneCorrect {
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

<<<<<<< HEAD
        const quizTemplate = path.resolve(`./src/templates/quizPage.js`)
        result.data.allContentfulQuizOneCorrect.edges.forEach(edge => {
          createPage({
            path: slug(edge.node.title),
            component: quizTemplate,
            context: {
              id: edge.node.id,
            }
=======
        const quizTemplate = path.resolve(`./src/templates/quizPage.js`);
        if (result.data) {
          result.data.allContentfulQuizOneCorrect.edges.forEach(edge => {
            createPage({
              path: slug(edge.node.title),
              component: quizTemplate,
              context: {
                id: edge.node.id,
              }
            })
>>>>>>> master
          })
        }
        resolve();
      })
  })
}
