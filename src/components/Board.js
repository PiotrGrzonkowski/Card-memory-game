import React from 'react';

const Board = (props) => {

    const { lvlNormal, isHidden, isVisible } = props.state

    // console.log(lvlNormal)





    const displayCards = lvlNormal.map((item, i) => <div className={` ${item.isHidden ? "hidden" : null} ${item.isVisible ? 'noVisible' : null}`}
        key={i} data-number={i}
        onClick={() => props.checkCard(item, i)}>{item.sign}</div>)





    return (
        <div className="board">
            {displayCards}
        </div>
    );
}

export default Board;