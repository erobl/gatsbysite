import React from "react"
import Layout from "../components/layout.js"
import Content from "../components/Content.js"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import { Link } from "gatsby"

export default ({data}) => {
    const { edges } = data.allMarkdownRemark
    return (
    <Layout>
        <Helmet>
            <title>Blog - Edgar Robles</title>
        </Helmet>
        <Content>
            <h1>Blog</h1>
            {edges.map(edge => {
                const { frontmatter } = edge.node
                return (
                    <div key={frontmatter.path}>
                        <h2>
                            <Link to={frontmatter.path}>
                                {frontmatter.title}
                            </Link>
                        </h2>
                        <div dangerouslySetInnerHTML={{ __html: edge.node.excerpt }} />
                    </div>
                )
            })}
        </Content>
    </Layout>
    )
}

export const query = graphql`
    query BlogQuery {
        allMarkdownRemark(
            sort: {order: DESC, fields: [frontmatter___date]}
        ) {
            edges { 
                node {
                    frontmatter {
                        title
                        path
                        date
                    }
                    excerpt(pruneLength: 90, format: HTML)
                }
            }
        }
    }
`
