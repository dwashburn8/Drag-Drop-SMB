import React, { Component } from "react";
import "./Content-Menu.css"
import Card from "../Card"

class ContentMenu extends Component {

    render() {
        var visibility = "hide"

        if (this.props.menuVisibility) {
            visibility = "show";
        }


        return (
            <>
            <div id="flyoutMenu"  className={visibility}>

            
                <div id="exitBtnCont" className={visibility}>
                    <button id="exitBtn" onMouseDown={this.props.handleMouseDown}>X</button>
                </div>
         

                <Card id="card-1" className="card drop-component content" draggable="true"></Card>
                <Card id="card-2" className="card drop-component content" draggable="true"></Card>
                <Card id="card-3" className="card drop-component content" draggable="true"></Card>


            </div>
            </>
        )
    }
}

export default ContentMenu