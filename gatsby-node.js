const path = require("path")

exports.createPages = (({actions, graphql}) => {
    const { createPage } = actions

    const blogPostTemplate = path.resolve("src/templates/blogPost.js")

    return graphql(`
            query {
                allMarkdownRemark {
                    edges {
                        node {
                            frontmatter {
                                path
                            }
                        }
                    }
                }
            }
        `
        ).then(result => {
            result.data.allMarkdownRemark.edges.forEach(({node}) => {
                createPage({
                    path: node.frontmatter.path,
                    component: blogPostTemplate,
                    context: {}
                })
            })
        })
})
