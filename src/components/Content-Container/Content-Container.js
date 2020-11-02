import React, { Component } from "react"
import ContentButton from "../Content-Button/Content-Button"
import ContentMenu from "../Conent-Menu/Content-Menu"


class ContentContainer extends Component {
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
        <ContentButton handleMouseDown={this.handleMouseDown}/>
        <ContentMenu  handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible} />
        </div>
    )
}
}
export default ContentContainer




// handleMouseDown={this.handleMouseDown}