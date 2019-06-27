import React from 'react';

const ScoreScreen = (props) => {

    const { initialTime, finalTime, levelOfTheGame } = props.state

    const time = finalTime - initialTime


    return (
        <div className="scoreScrin">
            <p>your time : {`${Math.floor((time / 1000) % 60)}s`};</p>
            <p>  your level : {levelOfTheGame}</p>
            <p> <button onClick={() => { props.restart() }}>again?</button></p>
        </div>
    );
}

export default ScoreScreen;
