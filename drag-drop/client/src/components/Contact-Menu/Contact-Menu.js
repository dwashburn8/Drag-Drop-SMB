import React, { Component } from "react";
import "./Contact-Menu.css"
import Card from "../Card"
import UpArrow from "../Up-Arrow/Up-Arrow"

class ContactMenu extends Component {

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


                    <Card id="card-17" className="card drop-component contact" draggable="true">
                        <UpArrow
                            onArrow={this.props.onArrow}
                        />
                    </Card>
                    <Card id="card-18" className="card drop-component contact" draggable="true">
                        <UpArrow
                            onArrow={this.props.onArrow}
                        />
                    </Card>
                    <Card id="card-19" className="card drop-component contact" draggable="true">
                        <UpArrow
                            onArrow={this.props.onArrow}
                        />
                    </Card>
                    <Card id="card-20" className="card drop-component contact" draggable="true">
                        <UpArrow
                            onArrow={this.props.onArrow}
                        />
                    </Card>




                </div>
            </>
        )
    }
}

export default ContactMenu