module.exports = {
    siteMetadata: {
        siteUrl: "https://erobl.xyz"
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                {
                    family: `Merriweather Sans`
                },
                {
                    family: `Fira Sans`
                },
                {
                    family: `Lato`
                }
                ],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blog`,
                path: `${__dirname}/src/blog`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `bibtex`,
                path: `${__dirname}/src/bibtex/`,
                headers: {
                    "/*.bib": [
                        "Cache-Control: public, max-age=0, must-revalidate",
                        "Content-Type: text/bibtex"
                    ]
                }
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                commonmark: true,
                footnotes: true,
                pedantic: true,
                gfm: true,
                plugins: [
                    {
                        resolve: 'gatsby-remark-video',
                        options: {
                            width: 800,
                            height: 'auto',
                            preload: 'auto',
                            muted: true,
                            controls: true,
                            autoplay: false
                        }
                    },
                    {
                        resolve: `gatsby-remark-katex`,
                        options: {
                          strict: `ignore`
                        }
                    },
                    `gatsby-remark-autolink-headers`,
                    {
                      resolve: 'gatsby-remark-graph',
                      options: {
                        language: 'mermaid',
                        theme: 'default' // could also be dark, forest, or neutral
                      }
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                        }
                    },
                    `gatsby-remark-prismjs`, // needs to be after gatsby-autolink-headers
                    "gatsby-remark-copy-linked-files"
                ],
            }
        },
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
                    {
                      site {
                        siteMetadata {
                          siteUrl
                        }
                      }
                    }
                `,
                feeds: [
                    {
                        query: `
                            {
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
                                            excerpt(pruneLength: 90)
                                            html
                                        }
                                    }
                                }
                            }
                        `,
                        serialize: ({ query: { site, allMarkdownRemark } }) => {
                            return allMarkdownRemark.edges.map(edge => {
                                return Object.assign({}, edge.node.frontmatter, {
                                    description: edge.node.excerpt,
                                    date: edge.node.frontmatter.date,
                                    url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                                    guid: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                                    custom_elements: [{"content:encoded": edge.node.html }]
                                })
                            })
                        },
                        output: "/blog/rss.xml",
                        title: "Edgar Robles' blog"
                    }
                ]
            }
        },
        {
            resolve: `gatsby-plugin-gtag`,
            options: {
                trackingId: `UA-139647659-1`,
                head: false,
                anonymize: true,
            }
        },
        "gatsby-transformer-bibtex"
    ]
}
