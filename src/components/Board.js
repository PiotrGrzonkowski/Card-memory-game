import React from 'react';

const Board = (props) => {

    const { lvlNormal, counter, } = props.state



    if (counter === 2) {


        // props.checkCard()
    }





    const displayCards = lvlNormal.map((item, i) => <div className={` ${item.isHidden ? "hidden" : null} ${item.isVisible ? 'noVisible' : null}`}
        key={i} data-number={i}
        onClick={() => props.pickCard(item, i)}>{item.sign}</div>)





    return (
        <div className="board">
            {displayCards}
        </div>
    );
}

export default Board;