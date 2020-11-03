import React, { Component } from "react"
import HeaderButton from "../Header-Button/Header-Button"
import HeaderMenu from "../Header-Menu/Header-Menu"

class HeaderContainer extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            visible: false
        };

        this.handleMouseDown = this.handleMouseDown.bind(this)
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    handleMouseDown(event){
        this.toggleMenu();

        console.log("clicked");
        event.stopPropagation();
        
    }

    toggleMenu() {
    this.setState({
        visible: !this.state.visible
    });
}

render() {
    return (
        <div>
        <HeaderButton handleMouseDown={this.handleMouseDown}/>
        <HeaderMenu  handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible}  />
        </div>
    )
}
}
export default HeaderContainer