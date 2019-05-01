import React from "react"
import styled from "styled-components"

const Content = styled.div`
    max-width: 34em;
    margin: 30px auto;
    font-family: "Merriweather Sans", sans-serif;
    font-size: 100%;
    line-height: 1.5;

    h1, h2, h3 {
        font-family: "Fira Sans", sans-serif;
    }

`

export default ({children}) => 
    <Content>
        {children}
    </Content>
