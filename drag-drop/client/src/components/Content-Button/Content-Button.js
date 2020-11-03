import React, { Component } from "react"


class ContentButton extends Component {
    render(){
        return (
            <button id="exit" onMouseDown={this.props.handleMouseDown}>Content</button>
        )
    }
}


export default ContentButton