import React, { Component } from "react"


class ContactButton extends Component {
    render(){
        return (
            <button id="exit" onMouseDown={this.props.handleMouseDown}>Contact</button>
        )
    }
}


export default ContactButton