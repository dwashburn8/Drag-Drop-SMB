import React from "react"

function Card (props){
    const dragStart = event => {
        const target = event.target;

        event.dataTransfer.setData("CardId", target.id)

        // setTimeout(() => {
        //     target.style.display = "none"
        // }, 0);
    }

    const dragOver = event => {
        event.stopPropagation();
    }


    return (
        <div
        id={props.id}
        className={props.className}
        draggable={props.draggable}
        onDragStart={dragStart}
        onDragOver={dragOver}
        onArrow={props.onArrow}>
            {props. children}

        </div>
    )
}

export default Card