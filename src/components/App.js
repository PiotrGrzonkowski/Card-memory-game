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

    cardValue: {
      firstCard: '',
      indexFirstCard: '',
      secondCard: '',
      indexSecondCard: '',

    },
    test: [
      { sign: 'a', isVisible: false, isHidden: true }, { sign: 'b', isVisible: false, isHidden: true }, { sign: 'c', isVisible: false, isHidden: true }, { sign: 'd', isVisible: false, isHidden: true }, { sign: 'e', isVisible: false, isHidden: true }, { sign: 'f', isVisible: false, isHidden: true }, { sign: 'g', isVisible: false, isHidden: true }, { sign: 'h', isVisible: false, isHidden: true }, { sign: 'i', isVisible: false, isHidden: true }, { sign: 'j', isVisible: false, isHidden: true }, { sign: 'a', isVisible: false, isHidden: true }, { sign: 'b', isVisible: false, isHidden: true }, { sign: 'c', isVisible: false, isHidden: true }, { sign: 'd', isVisible: false, isHidden: true }, { sign: 'e', isVisible: false, isHidden: true }, { sign: 'f', isVisible: false, isHidden: true }, { sign: 'g', isVisible: false, isHidden: true }, { sign: 'h', isVisible: false, isHidden: true }, { sign: 'i', isVisible: false, isHidden: true }, { sign: 'j', isVisible: false, isHidden: true }],



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
      dispalyBoard: !currentStateDispalyBoard,



    })
  }
  changeLvlGame = (level) => {

    this.setState({
      levelOfTheGame: level,
    })

  }

  pickCard = (item, index) => {
    const { lvlNormal, counter, cardValue: cardValueName } = this.state
    let currentValueCounter = counter

    if (counter < 2) {


      const arrFormState = [...lvlNormal];
      const newItem = item;

      item.isHidden = false;
      arrFormState[index] = newItem;
      currentValueCounter++
      this.setState({
        lvlNormal: arrFormState,
        counter: currentValueCounter,

      })



      if (counter === 0) {

        this.setState({
          cardValue: {
            firstCard: item.sign,
            indexFirstCard: index,
          }
        })

      }
      if (counter === 1) {

        const currentFirstCard = cardValueName.firstCard
        const currnetIndexFirstCard = cardValueName.indexFirstCard
        this.setState({
          cardValue: {
            firstCard: currentFirstCard,
            indexFirstCard: currnetIndexFirstCard,
            secondCard: item.sign,
            indexSecondCard: index,
          }
        })

      }




    }

  }
  checkCard = (currentLvl) => {
    console.log(currentLvl)

    const { firstCard, secondCard, indexFirstCard, indexSecondCard } = this.state.cardValue
    if (firstCard !== secondCard && this.state.counter === 2) {

      setTimeout(function () {


        this.setState({
          counter: 0,
          lvlNormal: currentLvl,
        })
      }.bind(this), 1000)
    } if (firstCard === secondCard && this.state.counter === 2) {

      const lvl = [...this.state.lvlNormal];
      lvl[indexFirstCard].isVisible = true;
      lvl[indexSecondCard].isVisible = true;

      this.setState({

        test: lvl,
        counter: 0,
      })


    }
  }









  render() {


    const { dispalyStartScrin, dispalyBoard, dispalyScoreScreen, activeClass } = this.state;

    return (
      <div className="wrap">
        {dispalyStartScrin ? <StartScrin toggle={this.toggleClass} active={activeClass} startGame={this.startGame} lvlGame={this.changeLvlGame} /> : null}
        {dispalyBoard ? <Board state={this.state} pickCard={this.pickCard} checkCard={this.checkCard} /> : null}
        {dispalyScoreScreen ? <ScoreScreen /> : null}



      </div>
    );
  }
}

export default App;