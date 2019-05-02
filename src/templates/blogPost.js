import React from "react"
import Layout from "../components/layout.js"
import Content from "../components/Content.js"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import { Link } from "gatsby"
require(`katex/dist/katex.min.css`)
require("prismjs/themes/prism-tomorrow.css")


export default ({data}) => {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    return (
        <Layout>
            <Helmet>
                <title>Blog - Edgar Robles</title>
            </Helmet>
            <Content>
                <div>
                    <Link to="/blog">&lt; Blog</Link>
                </div>
                <div>
                    <h1>{ frontmatter.title }</h1>
                    <h3> { frontmatter.date } </h3>
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                </div>
            </Content>
        </Layout>
    )
}

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
            }
        }
    }
`
