import React from "react"

function Board(props) {

    let cardIdList= [];

    const handleUpArrow = event => {
        event.preventDefault();
    
        const upArrow = document.getElementsByClassName("upArrow");
        let arrowIndex = upArrow
        console.log("working!!!!")
    }

    const drop = event => {
        event.preventDefault();


        //Produces Cards when dropped 
        const cardId = event.dataTransfer.getData('cardId');
        cardIdList.push(cardId)


        for (let i = 0; i < cardIdList.length; i++) {

            const card = document.getElementById(cardIdList[i]);
            card.style.display="block";
            
            event.target.appendChild(card);

            console.log(cardIdList)
        }
    }

    const dragOver = event => {
                event.preventDefault();
            }


    return (
        <div 
        id={props.id}
        className={props.className}
        onDrop={drop}
        onDragOver={dragOver}
        >
            {props.children}
            
        </div>
    )
}

export default Board