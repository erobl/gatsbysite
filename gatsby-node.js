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
            // create blog posts
            result.data.allMarkdownRemark.edges.forEach(({node}) => {
                createPage({
                    path: node.frontmatter.path,
                    component: blogPostTemplate,
                    context: {}
                })
            })

            // create pagination
            const posts = result.data.allMarkdownRemark.edges
            const postsPerPage = 5
            const numPages = Math.ceil(posts.length / postsPerPage)
            Array.from({ length: numPages }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/blog` : `/blog/${i + 1}`,
                component: path.resolve("./src/templates/blogList.js"),
                context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages,
                currentPage: i + 1,
                },
            })
        })
    })
})
