import React, { Component } from "react"


class FooterButton extends Component {
    render(){
        return (
            <button id="exit" onMouseDown={this.props.handleMouseDown}>Footer</button>
        )
    }
}


export default FooterButton