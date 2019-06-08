import React from "react"
import Layout from "../components/layout.js"
import Content from "../components/Content.js"
import Matrix from "../components/matrix/matrix.js"
import { Helmet } from "react-helmet"

export default () => (
<Layout>
    <Helmet>
        <title>Matrix Toy - Edgar Robles</title>
    </Helmet>
    <Content>
        <h1>Matrix Toy</h1>
        <Matrix height={16} width={16} />
    </Content>
</Layout>
)
