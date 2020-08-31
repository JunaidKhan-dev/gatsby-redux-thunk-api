const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        allContentfulPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  )

  result.data.allContentfulPost.edges.forEach(({ node }) => {
    createPage({
      path: `/blogs/${node.slug}`,
      component: path.resolve(`./src/templates/BlogTemplate.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    })
  })
}
