import React, { Component, useState } from 'react'
import Square from './Square'
import "./Board.css"

// 함수형
const Board = () => {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const status = `Next player ${xIsNext ? 'X' : 'O'}`
    const handleClick = (i) => {
        const changeSquares = squares.slice();
        changeSquares[i] = xIsNext ? 'X' : 'O';
        setSquares(changeSquares);
        setXIsNext(current => !xIsNext);
    }

    const renderSquare = (i) => {
        return <Square
                    value={squares[i]}
                    onClick={() => handleClick(i)}
                />
    }

    return (
        <div>
            <div className='status'>{status}</div>
            <div className='board-row'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className='board-row'>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className='board-row'>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}

export default Board;


// 클래스형
// export default class board extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             squares: Array(9).fill(null)
//         }
//     }

//     handleClick(i) {
//         const changeSquares = this.state.squares.slice();
//         changeSquares[i] = 'X';
//         this.setState({ squares: changeSquares});
//     }

//     renderSquare(i) {
//         return <Square
//                     value={this.state.squares[i]}
//                     onClick={() => this.handleClick(i)}
//                 />
//     }

//     render() {
//         return (
//             <div>
//                 <div className='status'>Next Player: X, O</div>
//                 <div className='board-row'>
//                     {this.renderSquare(0)}
//                     {this.renderSquare(1)}
//                     {this.renderSquare(2)}
//                 </div>
//                 <div className='board-row'>
//                     {this.renderSquare(3)}
//                     {this.renderSquare(4)}
//                     {this.renderSquare(5)}
//                 </div>
//                 <div className='board-row'>
//                     {this.renderSquare(6)}
//                     {this.renderSquare(7)}
//                     {this.renderSquare(8)}
//                 </div>
//             </div>
//         )
//     }
// }
