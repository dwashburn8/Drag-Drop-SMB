import React, { Component } from "react";
import "./Footer-Menu.css"
import Card from "../Card"

class FooterMenu extends Component {

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
         

                <Card id="card-7" className="card drop-component footer" draggable="true"></Card>
                <Card id="card-8" className="card drop-component footer" draggable="true"></Card>
                <Card id="card-9" className="card drop-component footer" draggable="true"></Card>
                <Card id="card-10" className="card drop-component footer" draggable="true"></Card>
                <Card id="card-11" className="card drop-component footer" draggable="true"></Card>



            </div>
            </>
        )
    }
}

export default FooterMenu