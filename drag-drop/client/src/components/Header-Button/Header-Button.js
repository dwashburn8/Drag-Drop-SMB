import React, { Component } from "react"


class HeaderButton extends Component {
    render(){
        return (
            <button id="exit" onMouseDown={this.props.handleMouseDown}>Headers</button>
        )
    }
}


export default HeaderButton