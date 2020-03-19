import React from "react";

export default function IziWinn(props) {
    return (
        <span>
            {(props.win === true)? <p>Изи победа</p>: null}

        </span>
    )
}