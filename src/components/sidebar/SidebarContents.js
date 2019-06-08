import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: #383C41;
    }

    font-size: 16pt;
`

const PaddedLink = styled.a`
    padding: 0pt 12pt;
`

const SidebarLink = (props) => {
    return (
    <div style={{padding: "1em 0em"}}>
        <StyledLink to={props.to}>{props.children}</StyledLink>
    </div>
    )
}

const Bio = () => {
    return <div style={{fontSize: "30pt", paddingBottom: "1em"}}>
        <div style={{ textAlign: "center" }}>
            <div>
                <Link to="/">Edgar Robles</Link>
            </div>
            <PaddedLink href="http://github.com/erobl/">
                <FontAwesomeIcon icon={["fab", "github"]} />
            </PaddedLink>
            <PaddedLink href="http://twitter.com/edgarobl">
                <FontAwesomeIcon icon={["fab", "twitter"]} />
            </PaddedLink>
            <PaddedLink href="http://erobl.xyz/blog/rss.xml">
                <FontAwesomeIcon icon="rss-square" />
            </PaddedLink>
        </div>
    </div>
}

const Content = styled.div`
    padding: 1em 2em;
    font-family: Lato, sans-serif
`

export default () => {
    return (
        <Content>
            <Bio />
            <SidebarLink to="/blog">Blog</SidebarLink>
        </Content>
    )
}
