import { useState } from 'react';
import './App.css';
import Board from './components/Board';

function App() {

    const [history, setHistory] = useState([{ squares: Array(9).fill(null)}]);
    const [xIsNext, setXIsNext] = useState(true);

    const calcWinner = (squares) => {
        const lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,5],
            [2,4,6]
        ]

        for (let index = 0; index < lines.length; index++) {
            const [a,b,c] = lines[index];

            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    const current = history[history.length - 1];
    const winner = calcWinner(current.squares);

    let status;
    if (winner) status = 'winner:' + winner;
    else status = `next player: ${xIsNext ? 'X' : 'O'}`

    const handleClick = (i) => {
        const newSqares = current.squares.slice();

        if (calcWinner(newSqares) || newSqares[i]) {
            return
        }

        newSqares[i] = xIsNext ? 'X' : 'O';
        setHistory([...history, { squares: newSqares }]);
        setXIsNext(prev => !prev);

    }

    return (
        <div className='game'>
            <div className='game-board'>
                <Board squares={current.squares} onClick={(i) => handleClick(i)} />
            </div>
            <div className='game-info'>
                <div className='status'>{status}</div>
            </div>
        </div>
    );
}

export default App;

