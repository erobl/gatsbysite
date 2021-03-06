import React from "react"
import Layout from "../components/layout.js"
import Content from "../components/Content.js"
import SplashScreen from "../components/splashscreen.js"
import { Helmet } from "react-helmet"

export default () => (
<Layout>
    <Helmet>
        <title>Edgar Robles</title>
    </Helmet>
    <Content>
        <SplashScreen />
    </Content>
</Layout>
)
