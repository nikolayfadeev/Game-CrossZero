import React from 'react'
import ItemGame from './ItemGame'
import classes from './CrossZero.module.css'

export default function CrossZero(props) {
    return (

        <div className={classes.CrossZero}>
            <ul>
                <ItemGame cell={props.cell} clickCellHandler={props.clickCellHandler.bind(this)}/>
            </ul>
            <button onClick={props.onClearBoard}>Отчистить доску</button>
        </div>
    )

}