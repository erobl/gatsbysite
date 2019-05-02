module.exports = {
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
            resolve: `gatsby-transformer-remark`,
            options: {
                commonmark: true,
                footnotes: true,
                pedantic: true,
                gfm: true,
                plugins: [
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
        }
    ]
}
