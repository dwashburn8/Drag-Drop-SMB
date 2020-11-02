import React, { Component } from "react";
import "./Gallery-Menu.css"
import Card from "../../Card"

class GalleryMenu extends Component {

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
         

                <Card id="card-25" className="card drop-component gallery" draggable="true"></Card>
                <Card id="card-26" className="card drop-component gallery" draggable="true"></Card>
                <Card id="card-27" className="card drop-component gallery" draggable="true"></Card>
                <Card id="card-28" className="card drop-component gallery" draggable="true"></Card>




            </div>
            </>
        )
    }
}

export default GalleryMenu