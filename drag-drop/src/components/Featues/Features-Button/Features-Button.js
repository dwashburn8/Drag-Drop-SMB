import React, { Component } from "react"


class FeaturesButton extends Component {
    render(){
        return (
            <button id="exit" onMouseDown={this.props.handleMouseDown}>Features</button>
        )
    }
}


export default FeaturesButton