import React from "react";
import "./Square.css"

const Square = ({ onClick, value}) => {
    return (
        <button
            className="square"
            onClick={onClick}
        >
            {value}
        </button>
    )
}

export default Square;

// 클래스형
// export default class square extends React.Component {
//     render() {
//         return (
//             <button
//                 className="square"
//                 onClick={() => this.props.onClick()}
//             >
//                 {this.props.value}
//             </button>
//         )
//     }
// }