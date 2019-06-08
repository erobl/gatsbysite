import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from "styled-components"

const Bar = styled.div`
    background: #eeeeee;
    width: 100%;
    margin: 0;

    @media (min-width: 800px) {
        display: none;
    }
`

const Padding = styled.div`
    padding: 5px;
`

const burgStyle = {
    border: "none",
    backgroundColor: "#dedede",
    padding: "5px 10px",
    fontSize: "16pt"
}

export default (props) => {
    return (
        <Bar>
            <Padding>
                <button aria-label="Expand" style={burgStyle} onClick={props.onClick}>
                    <FontAwesomeIcon icon="bars" />
                </button>
            </Padding>
        </Bar>
    )
}
