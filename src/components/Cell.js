import React from 'react';
import './Cell.css';

const Cell = ({position, clickHandler, board}) => {
    return(
            <td className="cell" onClick={clickHandler.bind(this, position)}>{board[position]}</td>
    );
}

export default Cell;