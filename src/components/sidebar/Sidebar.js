import React, { Component } from "react"
import styled from "styled-components"
import TitleButton from "./TitleButton";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faRssSquare } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// workaround for loading
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


library.add(faBars, fab, faRssSquare)


const SideNav = styled.div`
    background-color: #eeeeee;
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    @media (min-width: 800px) {
        position: fixed;
        height: 100%; 
        width: 310px;
        overflow-x: hidden; /* Disable horizontal scroll */
        padding-top: 20px;
        display: block;
    }

    @media (max-width: 800px) {
        width: 100%;
        display: ${props => props.open ? "block" : "none"};
    }
`

SideNav.defaultProps = {
    open: true
};

const Content = styled.div`
    margin-left: 310px; /* Same as the width of the sidebar */
    padding: 0px 0px;
    @media (max-width: 800px) {
        margin-left: 0px;
    }
`

export default class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        };
    }

    setSidebarOpen(open) {
        this.setState({open: open }) 
    }

    toggleSidebarOpen() {
        this.setState({open: !this.state.open }) 
    }

    render() {
        return (
        <div>
            <TitleButton onClick={() => this.toggleSidebarOpen()} />
            <SideNav open={this.state.open}>
                {this.props.sidebar}
            </SideNav>
            <Content>
                {this.props.children}
            </Content>
        </div>
        )
    }
}
