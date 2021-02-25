

const path = require(`path`)
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const result =  await graphql(`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            url
            date
          }
        }
      }
    }
  }
`);
  if (result.errors) {
    console.error(result.errors)
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.url,
      component: path.resolve(`src/pages/post.js`),
      context: {
        pagePath: node.frontmatter.url,
      },
    })
  })
}

