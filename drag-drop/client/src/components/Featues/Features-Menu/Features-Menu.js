import React, { Component } from "react";
import "./Features-Menu.css"
import Card from "../../Card"

class FeaturesMenu extends Component {

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
         

                <Card id="card-21" className="card drop-component features" draggable="true"></Card>
                <Card id="card-22" className="card drop-component features" draggable="true"></Card>
                <Card id="card-23" className="card drop-component features" draggable="true"></Card>
                <Card id="card-24" className="card drop-component features" draggable="true"></Card>




            </div>
            </>
        )
    }
}

export default FeaturesMenu