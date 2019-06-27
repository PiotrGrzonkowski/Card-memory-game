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
  faFan, faNeuter, faAnchor, faDizzy, faMagic, faQrcode, faQuran, faWalking,
  faWater, faEgg, faArchive, faCamera, faEthernet, faAngry, faJoint, faMars
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


library.add(fab, fas, faCheckSquare, faCalendar, faCalculator,
  faAd, faGhost, faGift, faFan, faNeuter, faAnchor, faDizzy,
  faMagic, faQrcode, faQuran, faWalking, faWater, faEgg
  , faArchive, faCamera, faEthernet, faAngry, faJoint, faMars
)


class App extends Component {
  state = {
    dispalyStartScrin: true,
    dispalyBoard: false,
    dispalyScoreScreen: false,
    activeClass: false,
    levelOfTheGame: 'Normal',
    counter: 0,
    lvlGame: [

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

      const normal = [{ type: 'a', sign: <FontAwesomeIcon icon="check-square" size="2x" />, isVisible: false, isHidden: true },
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
      ]
      let currentIndex = normal.length, randomIndex, temporaryValue
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = normal[currentIndex];
        normal[currentIndex] = normal[randomIndex];
        normal[randomIndex] = temporaryValue;
      }
      this.setState({
        dispalyStartScrin: !currentStateDisplayStart,
        dispalyBoard: !currentStateDispalyBoard,
        initialTime: time,
        lvlGame: normal,
      })

    } else if (levelOfTheGame === 'Nightmare') {
      const nightmare = [
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
        { type: 'j', sign: <FontAwesomeIcon icon="magic" size="2x" />, isVisible: false, isHidden: true },
        { type: 'k', sign: <FontAwesomeIcon icon="qrcode" size="2x" />, isVisible: false, isHidden: true },
        { type: 'l', sign: <FontAwesomeIcon icon="quran" size="2x" />, isVisible: false, isHidden: true },
        { type: 'm', sign: <FontAwesomeIcon icon="walking" size="2x" />, isVisible: false, isHidden: true },
        { type: 'n', sign: <FontAwesomeIcon icon="water" size="2x" />, isVisible: false, isHidden: true },
        { type: 'o', sign: <FontAwesomeIcon icon="egg" size="2x" />, isVisible: false, isHidden: true },
        { type: 'k', sign: <FontAwesomeIcon icon="qrcode" size="2x" />, isVisible: false, isHidden: true },
        { type: 'l', sign: <FontAwesomeIcon icon="quran" size="2x" />, isVisible: false, isHidden: true },
        { type: 'm', sign: <FontAwesomeIcon icon="walking" size="2x" />, isVisible: false, isHidden: true },
        { type: 'n', sign: <FontAwesomeIcon icon="water" size="2x" />, isVisible: false, isHidden: true },
        { type: 'o', sign: <FontAwesomeIcon icon="egg" size="2x" />, isVisible: false, isHidden: true }
      ];
      let currentIndex = nightmare.length, randomIndex, temporaryValue
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = nightmare[currentIndex];
        nightmare[currentIndex] = nightmare[randomIndex];
        nightmare[randomIndex] = temporaryValue;
      }
      this.setState({
        dispalyStartScrin: !currentStateDisplayStart,
        dispalyBoard: !currentStateDispalyBoard,
        initialTime: time,
        lvlGame: nightmare,
        countDownInInterval: 1000,

      })
    } else if (levelOfTheGame === 'Hell') {
      const hell = [
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
        { type: 'j', sign: <FontAwesomeIcon icon="magic" size="2x" />, isVisible: false, isHidden: true },
        { type: 'k', sign: <FontAwesomeIcon icon="qrcode" size="2x" />, isVisible: false, isHidden: true },
        { type: 'l', sign: <FontAwesomeIcon icon="quran" size="2x" />, isVisible: false, isHidden: true },
        { type: 'm', sign: <FontAwesomeIcon icon="walking" size="2x" />, isVisible: false, isHidden: true },
        { type: 'n', sign: <FontAwesomeIcon icon="egg" size="2x" />, isVisible: false, isHidden: true },
        { type: 'o', sign: <FontAwesomeIcon icon="archive" size="2x" />, isVisible: false, isHidden: true },
        { type: 'p', sign: <FontAwesomeIcon icon="camera" size="2x" />, isVisible: false, isHidden: true },
        { type: 'r', sign: <FontAwesomeIcon icon="ethernet" size="2x" />, isVisible: false, isHidden: true },
        { type: 's', sign: <FontAwesomeIcon icon="angry" size="2x" />, isVisible: false, isHidden: true },
        { type: 't', sign: <FontAwesomeIcon icon="joint" size="2x" />, isVisible: false, isHidden: true },
        { type: 'w', sign: <FontAwesomeIcon icon="mars" size="2x" />, isVisible: false, isHidden: true },
        { type: 'k', sign: <FontAwesomeIcon icon="qrcode" size="2x" />, isVisible: false, isHidden: true },
        { type: 'l', sign: <FontAwesomeIcon icon="quran" size="2x" />, isVisible: false, isHidden: true },
        { type: 'm', sign: <FontAwesomeIcon icon="walking" size="2x" />, isVisible: false, isHidden: true },
        { type: 'n', sign: <FontAwesomeIcon icon="egg" size="2x" />, isVisible: false, isHidden: true },
        { type: 'o', sign: <FontAwesomeIcon icon="archive" size="2x" />, isVisible: false, isHidden: true },
        { type: 'p', sign: <FontAwesomeIcon icon="camera" size="2x" />, isVisible: false, isHidden: true },
        { type: 'r', sign: <FontAwesomeIcon icon="ethernet" size="2x" />, isVisible: false, isHidden: true },
        { type: 's', sign: <FontAwesomeIcon icon="angry" size="2x" />, isVisible: false, isHidden: true },
        { type: 't', sign: <FontAwesomeIcon icon="joint" size="2x" />, isVisible: false, isHidden: true },
        { type: 'w', sign: <FontAwesomeIcon icon="mars" size="2x" />, isVisible: false, isHidden: true }];
      let currentIndex = hell.length, randomIndex, temporaryValue
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = hell[currentIndex];
        hell[currentIndex] = hell[randomIndex];
        hell[randomIndex] = temporaryValue;
      }
      this.setState({
        dispalyStartScrin: !currentStateDisplayStart,
        dispalyBoard: !currentStateDispalyBoard,
        initialTime: time,
        lvlGame: hell,
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
    const { lvlGame, counter, cardValue: cardValueName } = this.state
    let currentValueCounter = counter

    if (counter < 2) {
      const arrFormState = [...lvlGame];
      const newItem = item;
      item.isHidden = false;
      arrFormState[index] = newItem;
      currentValueCounter++

      this.setState({
        lvlGame: arrFormState,
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
    const { lvlGame, score } = this.state
    const { firstCard, secondCard, indexFirstCard, indexSecondCard } = this.state.cardValue

    if (indexFirstCard === indexSecondCard) {

      alert("Are you kidding me?? :)")
      alert("You have to pick again")
      let hiddenCards = [...lvlGame]
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

      let hiddenCards = [...lvlGame]

      setTimeout(function () {
        hiddenCards[indexFirstCard].isHidden = true;
        hiddenCards[indexSecondCard].isHidden = true;

        this.setState({
          counter: 0,
          lvlGame: hiddenCards,
        })
      }.bind(this), this.state.countDownInInterval)

    } if (firstCard === secondCard && this.state.counter === 2 && indexFirstCard !== indexSecondCard) {

      setTimeout(function () {
        const lvl = [...lvlGame];
        lvl[indexFirstCard].isVisible = true;
        lvl[indexSecondCard].isVisible = true;

        let currentStateScore = score;
        currentStateScore++
        const time = new Date().getTime()

        if (currentStateScore === lvlGame.length / 2) {
          this.setState({
            dispalyBoard: false,
            dispalyScoreScreen: true,
            finalTime: time,
          })
        }

        this.setState({
          counter: 0,
          lvlGame: lvl,
          score: currentStateScore,
        })
      }.bind(this), 500)
    }
  }


  restart = () => {
    this.setState({
      dispalyStartScrin: true,
      dispalyBoard: false,
      dispalyScoreScreen: false,
      activeClass: false,
      levelOfTheGame: 'Normal',
      counter: 0,
      lvlGame: [

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
    })
  }

  render() {

    const { dispalyStartScrin, dispalyBoard, dispalyScoreScreen, activeClass } = this.state;

    return (
      <div className="wrap">
        {dispalyStartScrin ? <StartScrin toggle={this.toggleClass} active={activeClass} startGame={this.startGame} lvlGame={this.changeLvlGame} /> : null}
        {dispalyBoard ? <Board state={this.state} pickCard={this.pickCard} checkCard={this.checkCard} /> : null}
        {dispalyScoreScreen ? <ScoreScreen state={this.state} restart={this.restart} /> : null}
      </div>
    );
  }
}

export default App;