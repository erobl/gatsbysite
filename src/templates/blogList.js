import React from "react"
import Layout from "../components/layout.js"
import Content from "../components/Content.js"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import BlogPaginator from "../components/BlogPaginator.js"

export default ({data, pageContext}) => {
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

            <BlogPaginator currentPage={pageContext.currentPage} numPages={pageContext.numPages}/>
        </Content>
    </Layout>
    )
}

export const query = graphql`
    query BlogQuery($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            sort: {order: DESC, fields: [frontmatter___date]},
            limit: $limit,
            skip: $skip
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
