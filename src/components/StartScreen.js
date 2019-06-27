import React from 'react';


const StartScrin = (props) => {


    return (
        <div className="ContainerStartScrin">
            <button onClick={() => props.startGame()}>start game</button>

            <button className={props.active ? "active" : null} onClick={() => props.toggle()}>difficulty level</button>
            <div className={props.active ? null : "hidden"}>
                <button id="Normal" onClick={() => props.lvlGame("Normal")}>Normal</button>
                <button id="Nightmare" onClick={() => props.lvlGame("Nightmare")}>Nightmare</button>
                <button id="Hell" onClick={() => props.lvlGame("Hell")}>Hell</button>
            </div>

        </div>
    );
}

export default StartScrin;