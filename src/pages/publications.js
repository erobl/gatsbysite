import React from "react"
import Layout from "../components/layout.js"
import Content from "../components/Content.js"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

export default ({data}) => {
    const { edges } = data.allPubBibtex

    return (
        <Layout>
            <Helmet>
                <title>Publications - Edgar Robles</title>
            </Helmet>
            <Content>
                <h1>Publications</h1>
                <div>
                    {edges.map((edge, i) => {
                        const { html } = edge.node
                        return ( 
                            <div style={{"display": "flex"}}>
                                <div style={{"marginRight": "0.4em"}}>
                                    {`[${edges.length - i}]`}
                                </div>
                                <div dangerouslySetInnerHTML={{ __html: html }} /> 
                            </div>
                        )
                    })}
                </div>
            </Content>
        </Layout>
    )
}

export const pageQuery = graphql`
    query {
        allPubBibtex(
            sort: { order: DESC, fields: [issued___date_parts] }
        ){
        edges {
          node {
            html
            bibtex
          }
        }
      }
    }
`
