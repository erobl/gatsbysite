import React, { Component } from "react";
import Sidebar from "./sidebar/Sidebar.js";
import "./layout.css"
import SidebarContents from "./sidebar/SidebarContents";

export default class Layout extends Component {
    render() {
        return (
            <Sidebar sidebar={<SidebarContents />}>
                {this.props.children}
            </Sidebar>
        );
    }
}
