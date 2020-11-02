import React, { Component } from "react"
import "./Exit-Btn.css"

class ExitBtn extends Component {
    render() {
        return (
            <div id="btnWrapper">
                <div id="exitBtnCont">
                    <button id="exitBtn" onClick={this.props.handleMouseDown}>X</button>
                </div>
            </div>
        )
    }
}

export default ExitBtn