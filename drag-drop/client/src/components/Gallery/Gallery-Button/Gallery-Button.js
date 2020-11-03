import React, { Component } from "react"


class GalleryButton extends Component {
    render(){
        return (
            <button id="exit" onMouseDown={this.props.handleMouseDown}>Gallery</button>
        )
    }
}


export default GalleryButton