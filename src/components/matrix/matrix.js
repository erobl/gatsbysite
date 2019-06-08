import React, { Component } from "react"
import styled from "styled-components"
import Palette from "./palette.js"

const Base = styled.div`
`

const Square = styled.div`
    width: ${props => 100/props.width + "%"};
    display: inline-block;
    float: left;
    outline 2px solid gray;
    background-color: ${props => props.color};

    &:after {
        content: "";
        display: block;
        padding-bottom: 100%;
    }
`

const Row = styled.div`
    display: block;
`

export default class Matrix extends Component {
    constructor(props) {
        super(props)
        const defaultColor = "#000";

        let mat = [];
        for(var i = 0; i < this.props.height; i++) {
            let innerrow = [];
            for(var j = 0; j < this.props.width; j++) {
                innerrow.push(defaultColor);
            }
            mat.push(innerrow)
        }

        this.state = {
            width: this.props.width,
            height: this.props.height,
            mat: mat,
            dragging: false,
            color: "#FFF"
        }
    }

    setColor(color) {
        this.setState({color: color})
    }

    changeColor(i,j) {
            let mat = this.state.mat.slice()
            mat[i][j] = this.state.color;
            this.setState({mat: mat})
    }

    createRow(i) {
        let row = []
        for(let j = 0; j < this.state.width; j++) {
            row.push(<Square color={this.state.mat[i][j]} 
                onMouseOver={() => {if(this.state.dragging) {
                    this.changeColor(i,j)}}}
                onClick={() => {this.changeColor(i,j)}}
                onMouseDown={() => {this.setState({dragging: true})}}
                onMouseUp={() => {this.setState({dragging: false})}}
                width={this.state.width}/>)
        }
        return row
    }

    createMatrix() {
        let cols = [];
        for(let i = 0; i < this.state.height; i++) {
            cols.push(<Row>{this.createRow(i)}</Row>)
        }
        return cols
    }

    render() {

        return (
            <div>
                <Base>
                    {this.createMatrix()}
                </Base>
                <Palette setColor={(color) => {this.setColor(color)}} />
            </div>
        )
    }
}
