import React, { Component } from "react"
import GalleryButton from "../Gallery-Button/Gallery-Button"
import GalleryMenu from "../Gallery-Menu/Gallery-Menu"


class GalleryContainer extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            visible: false
        };

        this.handleMouseDown = this.handleMouseDown.bind(this)
        this.toggleMenu = this.toggleMenu.bind(this);
        this.drop = this.drop.bind(this)
    }

    handleMouseDown(event){
        this.toggleMenu();

        console.log("clicked");
        event.stopPropagation();
        
    }

    handleClickEvent(event){
        event.preventDefault();
        
    }

    toggleMenu() {
    this.setState({
        visible: !this.state.visible
    });
}

    drop(event){
        event.preventDefault();
        const cardId = event.dataTransfer.getData('cardId');

        const card = document.getElementById(cardId);
        card.style.display="block";

        event.target.appendChild(card);
    }

    dragOver(event){
        event.preventDefault()
    }

render() {
    return (
        <div>
        <GalleryButton handleMouseDown={this.handleMouseDown}/>
        <GalleryMenu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible}/>
        
        </div>
    )
}
}
export default GalleryContainer




