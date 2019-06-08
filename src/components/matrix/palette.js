import React, { Component } from "react"
import styled from "styled-components"

const Base = styled.div`
    background-color: #FFF;
    width: 100%;
    margin-top: 20px;
    float:left;
`

const Square = styled.div`
    width: ${props => 100/props.width + "%"};
    display: inline-block;
    outline 2px solid gray;
    float: left;
    background-color: ${props => props.color};

    &:after {
        content: "";
        display: block;
        padding-bottom: 100%;
    }
`

const Arrow = styled.div`
  position: absolute;
  width: 0px;
  height: 0px;
  border-left: 1vw solid transparent;
  border-right: 1vw solid transparent;
  border-top: 1vw solid #333;
  transform: translatex(-1vw) translatex(100%) translatey(-1vw);
`

const colors = [
    "#FFFFFF", "#000000", "#78014f", "#d50e55",
    "#ed673a", "#ffc75d", "#03760b", "#53b810",
    "#c3ffe2", "#8f11ba", "#356ee2", "#47c9ed",
    "#59404b", "#927691", "#cb9cdc", "#e427c6"
                ]

export default class Palette extends Component {
    constructor(props) {
        super(props);


        this.state = {
            colorId: 0
        }
    }

    pickColor(i) {
        this.setState({ colorId: i })
        this.props.setColor(colors[i])
    }

    createRow() {
        let row = [];
        for(let i = 0; i < colors.length; i++) {
            if(this.state.colorId === i) {
                row.push(<Square width={colors.length} color={colors[i]}
                    onClick={() => {this.pickColor(i)}}>
                    <Arrow />
                    </Square>)
            } else {
                row.push(<Square width={colors.length} color={colors[i]}
                    onClick={() => {this.pickColor(i)}} />)
            }
        }
        return row
    }

    render() {
        return (
            <Base>
                {this.createRow()}
            </Base>
        )
    }
}
