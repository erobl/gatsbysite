import React from "react"
import Layout from "../components/layout.js"
import Content from "../components/Content.js"
import { Helmet } from "react-helmet"

export default () => (
<Layout>
    <Helmet>
        <title>CV - Edgar Robles</title>
    </Helmet>
    <Content>
        <h1>CV</h1>
    </Content>
</Layout>
)
