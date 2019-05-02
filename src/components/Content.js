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

    a a:focus, a:hover, a:visited, a:link, a:active {
        color: #000000;
    }

    a:hover {
        color: #6d6d6d;
    }

    img {
        width: 100%;
    }
`

export default ({children}) => 
    <Content>
        {children}
    </Content>
