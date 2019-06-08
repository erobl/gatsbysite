import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const CenteredDiv = styled.div`
    text-align: center
`

const StyledLink = styled(Link)`
    margin-right: 3px;
    margin-left: 3px;
`

const StyledDiv = styled.div`
    display: inline-block;
    margin-right: 3px;
    margin-left: 3px;
`

export default class BlogPaginator extends React.Component {
    createPageNumbers() {
        let numbers = []
        for(var i = 0; i < this.props.numPages; i++) {
            if(i === this.props.currentPage - 1) {
                numbers.push(
                    <StyledDiv>
                        {i+1}
                    </StyledDiv>
                )
            } else {
                numbers.push(<StyledLink key={`pagination-number${i+1}`} to={`/blog/${i === 0 ? "" : i + 1}`}>
                        {i+1}
                </StyledLink>
                )
            }
        }
        return numbers
    }

    backButton() {
        const backpage = this.props.currentPage - 1
        if(this.props.currentPage !== 1) {
            return (<StyledLink key={`back`} to={`/blog/${backpage === 1 ? "" : backpage}`}>
                &lt;
            </StyledLink>)
        }
        return ""
    }

    nextButton() {
        const nextpage = this.props.currentPage + 1
        if(this.props.currentPage !== this.props.numPages) {
            return (<StyledLink key={`next`} to={`/blog/${nextpage === 1 ? "" : nextpage}`}>
                &gt;
            </StyledLink>)
        }
        return ""
    }

    render() {
        return (
            <CenteredDiv>
                {this.backButton()}
                {this.createPageNumbers()}
                {this.nextButton()}
            </CenteredDiv>
        );
    }
}
