import React from 'react';

const Board = (props) => {

    const { lvlGame, counter, levelOfTheGame, } = props.state



    if (counter === 2) props.checkCard()


    let stateDependentBylvl = {};
    if (levelOfTheGame === "Normal") {
        stateDependentBylvl = {}
    } else if (levelOfTheGame === "Nightmare") {
        stateDependentBylvl = {
            flexBasic: `14%`,
        }
    } else {
        stateDependentBylvl = {
            flexBasic: `2%`,
            padding: `4px`,
            margin: `1px`
        }
    }


    const displayCards = lvlGame.map((item, i) => <div className={` ${item.isHidden ? "hidden" : null} ${item.isVisible ? 'noVisible' : null}`}
        key={i} data-number={i} style={stateDependentBylvl}
        onClick={() => props.pickCard(item, i)}>{item.sign}</div>)





    return (
        <div className="board">
            {displayCards}
        </div>
    );
}

export default Board;