import React from "react";

export default function ItemGame(props) {
return (
            props.cell.map((item, index) => {
                return <li onClick={props.clickCellHandler.bind(this, index)}>{item}</li>
            })
    )
}