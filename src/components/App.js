import React, { Component } from 'react';
import './App.css';
import StartScrin from './StartScreen';
import Board from './Board'
import ScoreScreen from './ScoreScreen'

class App extends Component {
  state = {
    dispalyStartScrin: true,
    dispalyBoard: false,
    dispalyScoreScreen: false,
    activeClass: false,
    levelOfTheGame: 'Normal',


    counter: 0,

    lvlNormal: [
      { sign: 'a', isVisible: false, isHidden: true }, { sign: 'b', isVisible: false, isHidden: true }, { sign: 'c', isVisible: false, isHidden: true }, { sign: 'd', isVisible: false, isHidden: true }, { sign: 'e', isVisible: false, isHidden: true }, { sign: 'f', isVisible: false, isHidden: true }, { sign: 'g', isVisible: false, isHidden: true }, { sign: 'h', isVisible: false, isHidden: true }, { sign: 'i', isVisible: false, isHidden: true }, { sign: 'j', isVisible: false, isHidden: true }, { sign: 'a', isVisible: false, isHidden: true }, { sign: 'b', isVisible: false, isHidden: true }, { sign: 'c', isVisible: false, isHidden: true }, { sign: 'd', isVisible: false, isHidden: true }, { sign: 'e', isVisible: false, isHidden: true }, { sign: 'f', isVisible: false, isHidden: true }, { sign: 'g', isVisible: false, isHidden: true }, { sign: 'h', isVisible: false, isHidden: true }, { sign: 'i', isVisible: false, isHidden: true }, { sign: 'j', isVisible: false, isHidden: true }
    ],
    lvlNightmare: [],
    lvlHell: [],




  }

  toggleClass = () => {

    const currentState = this.state.activeClass;
    this.setState({
      activeClass: !currentState,
    })
  }

  startGame = () => {
    const currentStateDisplayStart = this.state.dispalyStartScrin;
    const currentStateDispalyBoard = this.state.dispalyBoard;
    this.setState({
      dispalyStartScrin: !currentStateDisplayStart,
      dispalyBoard: !currentStateDispalyBoard
    })
  }
  changeLvlGame = (level) => {

    this.setState({
      levelOfTheGame: level,
    })

  }

  checkCard = (item, index) => {
    console.log(this.counter)
    if (this.counter < 2) {
      const arrFormState = [...this.state.lvlNormal];
      const newItem = item;
      item.isHidden = false;
      arrFormState[index] = newItem;


      this.setState({
        lvlNormal: arrFormState,
      })
    }
  }








  render() {

    const { dispalyStartScrin, dispalyBoard, dispalyScoreScreen, activeClass } = this.state;

    return (
      <div className="wrap">
        {dispalyStartScrin ? <StartScrin toggle={this.toggleClass} active={activeClass} startGame={this.startGame} lvlGame={this.changeLvlGame} /> : null}
        {dispalyBoard ? <Board state={this.state} checkCard={this.checkCard} /> : null}
        {dispalyScoreScreen ? <ScoreScreen /> : null}



      </div>
    );
  }
}

export default App;