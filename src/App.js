import React from 'react';
import './App.css';
import CrossZero from "./components/Cross-zero/CrossZero";
import IziWinn from "./components/Cross-zero/IziWinn";

class App extends React.Component {


    state = {
        cell: Array(9).fill(null),
        count: 0,
        win: false
    }

    onClearBoard = () => {
        this.setState({
            cell: Array(9).fill(null)
        })
        this.setState({
            win: false
        })
    }

    isWinner = () => {
        let winCombo = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        let symbl = (this.state.count % 2 === 0) ? "x" : 0

        for (let i=0; i<winCombo.length; i++) {
            let onCombo = winCombo[i]
            if(this.state.cell[onCombo[0]] === symbl
            && this.state.cell[onCombo[1]] === symbl
            && this.state.cell[onCombo[2]] === symbl
            ) {
                this.setState({
                    win: true
                })
                alert(`${symbl} - Вы выиграли`)

                this.onClearBoard()
            }
        }
    }

    clickCellHandler = (index) => {
        let cell = this.state.cell

        this.setState({
            win: false
        })

        if (cell[index] === null) {
                cell[index] = (this.state.count % 2 === 0) ? "x" : 0
                this.setState({
                count: this.state.count+1,
                cell: cell
            })
        }
        this.isWinner()
    }



    render() {

        return (
            <div className="App">
                <h1 className="titleGame">Игра "Крестики-нулики"</h1>

                <CrossZero
                    cell={this.state.cell}
                    clickCellHandler={this.clickCellHandler}
                    onClearBoard={this.onClearBoard}
                />


                <p>Ход игрока: {(this.state.count % 2 === 0) ? "x" : 0}</p>
                <IziWinn win={this.state.win} />

            </div>
        );
    }
}

export default App;
