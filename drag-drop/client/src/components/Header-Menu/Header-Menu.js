import React, { Component } from "react";
import "./Header-Menu.css"
import Card from "../Card"

class HeaderMenu extends Component {

    render() {
        var visibility = "hide"

        if (this.props.menuVisibility) {
            visibility = "show";
        }


        return (
            <>
                <div id="flyoutMenu" className={visibility}>


                    <div id="exitBtnCont" className={visibility}>
                        <button id="exitBtn" onMouseDown={this.props.handleMouseDown}>X</button>
                    </div>


                    <Card id="card-12" className="card drop-component header" draggable="true">

                    </Card>
                    <Card id="card-13" className="card drop-component header" draggable="true"></Card>
                    <Card id="card-14" className="card drop-component header" draggable="true"></Card>


                </div>
            </>
        )
    }
}

export default HeaderMenu