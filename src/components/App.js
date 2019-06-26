import React, { Component } from 'react';
import './App.css';
import StartScrin from './StartScreen';
import Board from './Board';
import ScoreScreen from './ScoreScreen';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, } from '@fortawesome/free-brands-svg-icons'
import { fas, } from '@fortawesome/free-solid-svg-icons'
import {
  faCheckSquare, faCalendar, faCalculator, faAd, faGhost, faGift,
  faFan, faNeuter, faAnchor, faDizzy, faMagic
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


library.add(fab, fas, faCheckSquare, faCalendar, faCalculator,
  faAd, faGhost, faGift, faFan, faNeuter, faAnchor, faDizzy,
  faMagic)


class App extends Component {
  state = {
    dispalyStartScrin: true,
    dispalyBoard: false,
    dispalyScoreScreen: false,
    activeClass: false,
    levelOfTheGame: 'Normal',
    counter: 0,
    lvlNormal: [
      { type: 'a', sign: <FontAwesomeIcon icon="check-square" size="2x" />, isVisible: false, isHidden: true },
      { type: 'b', sign: <FontAwesomeIcon icon="calendar" size="2x" />, isVisible: false, isHidden: true },
      { type: 'c', sign: <FontAwesomeIcon icon="ghost" size="2x" />, isVisible: false, isHidden: true },
      { type: 'd', sign: <FontAwesomeIcon icon="gift" size="2x" />, isVisible: false, isHidden: true },
      { type: 'e', sign: <FontAwesomeIcon icon="calculator" size="2x" />, isVisible: false, isHidden: true },
      { type: 'f', sign: <FontAwesomeIcon icon="fan" size="2x" />, isVisible: false, isHidden: true },
      { type: 'g', sign: <FontAwesomeIcon icon="neuter" size="2x" />, isVisible: false, isHidden: true },
      { type: 'h', sign: <FontAwesomeIcon icon="anchor" size="2x" />, isVisible: false, isHidden: true },
      { type: 'i', sign: <FontAwesomeIcon icon="dizzy" size="2x" />, isVisible: false, isHidden: true },
      { type: 'j', sign: <FontAwesomeIcon icon="magic" size="2x" />, isVisible: false, isHidden: true },
      { type: 'a', sign: <FontAwesomeIcon icon="check-square" size="2x" />, isVisible: false, isHidden: true },
      { type: 'b', sign: <FontAwesomeIcon icon="calendar" size="2x" />, isVisible: false, isHidden: true },
      { type: 'c', sign: <FontAwesomeIcon icon="ghost" size="2x" />, isVisible: false, isHidden: true },
      { type: 'd', sign: <FontAwesomeIcon icon="gift" size="2x" />, isVisible: false, isHidden: true },
      { type: 'e', sign: <FontAwesomeIcon icon="calculator" size="2x" />, isVisible: false, isHidden: true },
      { type: 'f', sign: <FontAwesomeIcon icon="fan" size="2x" />, isVisible: false, isHidden: true },
      { type: 'g', sign: <FontAwesomeIcon icon="neuter" size="2x" />, isVisible: false, isHidden: true },
      { type: 'h', sign: <FontAwesomeIcon icon="anchor" size="2x" />, isVisible: false, isHidden: true },
      { type: 'i', sign: <FontAwesomeIcon icon="dizzy" size="2x" />, isVisible: false, isHidden: true },
      { type: 'j', sign: <FontAwesomeIcon icon="magic" size="2x" />, isVisible: false, isHidden: true }
    ],
    cardValue: {
      firstCard: '',
      indexFirstCard: '',
      secondCard: '',
      indexSecondCard: '',
    },
    score: 0,
    initialTime: '',
    finalTime: '',
    countDownInInterval: 2000,

  }



  toggleClass = () => {

    const currentState = this.state.activeClass;
    this.setState({
      activeClass: !currentState,
    })
  }

  startGame = () => {
    const { levelOfTheGame } = this.state
    const { dispalyStartScrin, dispalyBoard } = this.state;
    const currentStateDisplayStart = dispalyStartScrin;
    const currentStateDispalyBoard = dispalyBoard;
    const time = new Date().getTime()
    if (levelOfTheGame === 'Normal') {
      this.setState({
        dispalyStartScrin: !currentStateDisplayStart,
        dispalyBoard: !currentStateDispalyBoard,
        initialTime: time,


      })
    } else if (levelOfTheGame === 'Nightmare') {
      const Nightmare = [{ type: 'a', sign: <FontAwesomeIcon icon="check-square" size="2x" />, isVisible: false, isHidden: true },
      { type: 'b', sign: <FontAwesomeIcon icon="calendar" size="2x" />, isVisible: false, isHidden: true },
      { type: 'c', sign: <FontAwesomeIcon icon="ghost" size="2x" />, isVisible: false, isHidden: true },
      { type: 'd', sign: <FontAwesomeIcon icon="gift" size="2x" />, isVisible: false, isHidden: true },
      { type: 'e', sign: <FontAwesomeIcon icon="calculator" size="2x" />, isVisible: false, isHidden: true },
      { type: 'f', sign: <FontAwesomeIcon icon="fan" size="2x" />, isVisible: false, isHidden: true },
      { type: 'g', sign: <FontAwesomeIcon icon="neuter" size="2x" />, isVisible: false, isHidden: true },
      { type: 'h', sign: <FontAwesomeIcon icon="anchor" size="2x" />, isVisible: false, isHidden: true },
      { type: 'i', sign: <FontAwesomeIcon icon="dizzy" size="2x" />, isVisible: false, isHidden: true },
      { type: 'j', sign: <FontAwesomeIcon icon="magic" size="2x" />, isVisible: false, isHidden: true },
      { type: 'a', sign: <FontAwesomeIcon icon="check-square" size="2x" />, isVisible: false, isHidden: true },
      { type: 'b', sign: <FontAwesomeIcon icon="calendar" size="2x" />, isVisible: false, isHidden: true },
      { type: 'c', sign: <FontAwesomeIcon icon="ghost" size="2x" />, isVisible: false, isHidden: true },
      { type: 'd', sign: <FontAwesomeIcon icon="gift" size="2x" />, isVisible: false, isHidden: true },
      { type: 'e', sign: <FontAwesomeIcon icon="calculator" size="2x" />, isVisible: false, isHidden: true },
      { type: 'f', sign: <FontAwesomeIcon icon="fan" size="2x" />, isVisible: false, isHidden: true },
      { type: 'g', sign: <FontAwesomeIcon icon="neuter" size="2x" />, isVisible: false, isHidden: true },
      { type: 'h', sign: <FontAwesomeIcon icon="anchor" size="2x" />, isVisible: false, isHidden: true },
      { type: 'i', sign: <FontAwesomeIcon icon="dizzy" size="2x" />, isVisible: false, isHidden: true },
      { type: 'j', sign: <FontAwesomeIcon icon="magic" size="2x" />, isVisible: false, isHidden: true },
      { type: 'a', sign: <FontAwesomeIcon icon="check-square" size="2x" />, isVisible: false, isHidden: true },
      { type: 'b', sign: <FontAwesomeIcon icon="calendar" size="2x" />, isVisible: false, isHidden: true },
      { type: 'c', sign: <FontAwesomeIcon icon="ghost" size="2x" />, isVisible: false, isHidden: true },
      { type: 'd', sign: <FontAwesomeIcon icon="gift" size="2x" />, isVisible: false, isHidden: true },
      { type: 'e', sign: <FontAwesomeIcon icon="calculator" size="2x" />, isVisible: false, isHidden: true },
      { type: 'f', sign: <FontAwesomeIcon icon="fan" size="2x" />, isVisible: false, isHidden: true },
      { type: 'g', sign: <FontAwesomeIcon icon="neuter" size="2x" />, isVisible: false, isHidden: true },
      { type: 'h', sign: <FontAwesomeIcon icon="anchor" size="2x" />, isVisible: false, isHidden: true },
      { type: 'i', sign: <FontAwesomeIcon icon="dizzy" size="2x" />, isVisible: false, isHidden: true },
      { type: 'j', sign: <FontAwesomeIcon icon="magic" size="2x" />, isVisible: false, isHidden: true }
      ];
      this.setState({
        dispalyStartScrin: !currentStateDisplayStart,
        dispalyBoard: !currentStateDispalyBoard,
        initialTime: time,
        lvlNormal: Nightmare,
        countDownInInterval: 1000,

      })
    } else if (levelOfTheGame === 'Hell') {
      const Hell = [{ type: 'a', sign: <FontAwesomeIcon icon="check-square" size="2x" />, isVisible: false, isHidden: true },
      { type: 'b', sign: <FontAwesomeIcon icon="calendar" size="2x" />, isVisible: false, isHidden: true },
      { type: 'c', sign: <FontAwesomeIcon icon="ghost" size="2x" />, isVisible: false, isHidden: true },
      { type: 'd', sign: <FontAwesomeIcon icon="gift" size="2x" />, isVisible: false, isHidden: true },
      { type: 'e', sign: <FontAwesomeIcon icon="calculator" size="2x" />, isVisible: false, isHidden: true },
      { type: 'f', sign: <FontAwesomeIcon icon="fan" size="2x" />, isVisible: false, isHidden: true },
      { type: 'g', sign: <FontAwesomeIcon icon="neuter" size="2x" />, isVisible: false, isHidden: true },
      { type: 'h', sign: <FontAwesomeIcon icon="anchor" size="2x" />, isVisible: false, isHidden: true },
      { type: 'i', sign: <FontAwesomeIcon icon="dizzy" size="2x" />, isVisible: false, isHidden: true },
      { type: 'j', sign: <FontAwesomeIcon icon="magic" size="2x" />, isVisible: false, isHidden: true },
      { type: 'a', sign: <FontAwesomeIcon icon="check-square" size="2x" />, isVisible: false, isHidden: true },
      { type: 'b', sign: <FontAwesomeIcon icon="calendar" size="2x" />, isVisible: false, isHidden: true },
      { type: 'c', sign: <FontAwesomeIcon icon="ghost" size="2x" />, isVisible: false, isHidden: true },
      { type: 'd', sign: <FontAwesomeIcon icon="gift" size="2x" />, isVisible: false, isHidden: true },
      { type: 'e', sign: <FontAwesomeIcon icon="calculator" size="2x" />, isVisible: false, isHidden: true },
      { type: 'f', sign: <FontAwesomeIcon icon="fan" size="2x" />, isVisible: false, isHidden: true },
      { type: 'g', sign: <FontAwesomeIcon icon="neuter" size="2x" />, isVisible: false, isHidden: true },
      { type: 'h', sign: <FontAwesomeIcon icon="anchor" size="2x" />, isVisible: false, isHidden: true },
      { type: 'i', sign: <FontAwesomeIcon icon="dizzy" size="2x" />, isVisible: false, isHidden: true },
      { type: 'j', sign: <FontAwesomeIcon icon="magic" size="2x" />, isVisible: false, isHidden: true }, { type: 'a', sign: <FontAwesomeIcon icon="check-square" size="2x" />, isVisible: false, isHidden: true },
      { type: 'b', sign: <FontAwesomeIcon icon="calendar" size="2x" />, isVisible: false, isHidden: true },
      { type: 'c', sign: <FontAwesomeIcon icon="ghost" size="2x" />, isVisible: false, isHidden: true },
      { type: 'd', sign: <FontAwesomeIcon icon="gift" size="2x" />, isVisible: false, isHidden: true },
      { type: 'e', sign: <FontAwesomeIcon icon="calculator" size="2x" />, isVisible: false, isHidden: true },
      { type: 'f', sign: <FontAwesomeIcon icon="fan" size="2x" />, isVisible: false, isHidden: true },
      { type: 'g', sign: <FontAwesomeIcon icon="neuter" size="2x" />, isVisible: false, isHidden: true },
      { type: 'h', sign: <FontAwesomeIcon icon="anchor" size="2x" />, isVisible: false, isHidden: true },
      { type: 'i', sign: <FontAwesomeIcon icon="dizzy" size="2x" />, isVisible: false, isHidden: true },
      { type: 'j', sign: <FontAwesomeIcon icon="magic" size="2x" />, isVisible: false, isHidden: true },
      { type: 'a', sign: <FontAwesomeIcon icon="check-square" size="2x" />, isVisible: false, isHidden: true },
      { type: 'b', sign: <FontAwesomeIcon icon="calendar" size="2x" />, isVisible: false, isHidden: true },
      { type: 'c', sign: <FontAwesomeIcon icon="ghost" size="2x" />, isVisible: false, isHidden: true },
      { type: 'd', sign: <FontAwesomeIcon icon="gift" size="2x" />, isVisible: false, isHidden: true },
      { type: 'e', sign: <FontAwesomeIcon icon="calculator" size="2x" />, isVisible: false, isHidden: true },
      { type: 'f', sign: <FontAwesomeIcon icon="fan" size="2x" />, isVisible: false, isHidden: true },
      { type: 'g', sign: <FontAwesomeIcon icon="neuter" size="2x" />, isVisible: false, isHidden: true },
      { type: 'h', sign: <FontAwesomeIcon icon="anchor" size="2x" />, isVisible: false, isHidden: true },
      { type: 'i', sign: <FontAwesomeIcon icon="dizzy" size="2x" />, isVisible: false, isHidden: true },
      { type: 'j', sign: <FontAwesomeIcon icon="magic" size="2x" />, isVisible: false, isHidden: true }];
      this.setState({
        dispalyStartScrin: !currentStateDisplayStart,
        dispalyBoard: !currentStateDispalyBoard,
        initialTime: time,
        lvlNormal: Hell,
        countDownInInterval: 500,

      })
    }
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
            firstCard: item.type,
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
            secondCard: item.type,
            indexSecondCard: index,
          }
        })


      }



    }

  }
  checkCard = () => {
    console.log("działa")
    const { lvlNormal, score } = this.state
    const { firstCard, secondCard, indexFirstCard, indexSecondCard } = this.state.cardValue

    if (indexFirstCard === indexSecondCard) {

      alert("Are you kidding me?? :)")
      alert("You have to pick again")
      let hiddenCards = [...lvlNormal]
      hiddenCards[indexFirstCard].isHidden = true;


      this.setState({
        counter: 0,
        cardValue: {
          firstCard: '',
          indexFirstCard: '',
          secondCard: '',
          indexSecondCard: '',
        },

      })
    }


    if (firstCard !== secondCard && this.state.counter === 2) {


      let hiddenCards = [...lvlNormal]


      setTimeout(function () {
        hiddenCards[indexFirstCard].isHidden = true;
        hiddenCards[indexSecondCard].isHidden = true;

        this.setState({
          counter: 0,
          lvlNormal: hiddenCards,

        })
      }.bind(this), this.state.countDownInInterval)

    } if (firstCard === secondCard && this.state.counter === 2 && indexFirstCard !== indexSecondCard) {

      setTimeout(function () {
        const lvl = [...lvlNormal];
        lvl[indexFirstCard].isVisible = true;
        lvl[indexSecondCard].isVisible = true;

        let currentStateScore = score;
        currentStateScore++
        const time = new Date().getTime()



        if (currentStateScore === lvlNormal.length / 2) {
          this.setState({
            dispalyBoard: false,
            dispalyScoreScreen: true,
            finalTime: time,

          })
        }

        this.setState({
          counter: 0,
          lvlNormal: lvl,
          score: currentStateScore,


        })
      }.bind(this), 500)

    }
  }

  render() {


    const { dispalyStartScrin, dispalyBoard, dispalyScoreScreen, activeClass } = this.state;

    return (
      <div className="wrap">

        {dispalyStartScrin ? <StartScrin toggle={this.toggleClass} active={activeClass} startGame={this.startGame} lvlGame={this.changeLvlGame} /> : null}
        {dispalyBoard ? <Board state={this.state} pickCard={this.pickCard} checkCard={this.checkCard} /> : null}
        {dispalyScoreScreen ? <ScoreScreen state={this.state} /> : null}



      </div>
    );
  }
}

export default App;