import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/App.css';
import './css/ARN-framework.css';
import Games from './components/game';
import Attacks from './components/attacks';
import Characters from './components/characters';
import Punish from './components/punish';
import MoveList from './components/moves';
import mk11db from './backend/db/mk11/mk11db';
console.log(mk11db);

class App extends Component {
  constructor(props){
    super(props);
    const characters = [...mk11db.characters];
    this.state = {
      selectedAttack: 'basicAttacks',
      searchBy: 'Name',
      gamingConsole: 'Universal',
      selectedGame: 'mk11',
      characterList: characters,
      selectedCharacter: '',
      selectedPunisher: '',
      moveList: [{moveName:'', _id:''}],
      selectedMove: {
        moveName:'', 
        type:'', damage: 0, chipDamage: 0,
        blockAdvantage: 0, hitAdvantage: 0, cancel: 0, 
        startup: 0, active: 0, recovery: 0, chain:''
      },
      counterList: [{moveName:'', _id:''}],
      selectedCounter: {
        moveName:'', 
        type:'', damage: 0, chipDamage: 0,
        blockAdvantage: 0, hitAdvantage: 0, cancel: 0, 
        startup: 0, active: 0, recovery: 0, chain:''
      },
    }
  }

  selectAttackHandler = (event) => {
    const prevElem = document.querySelector(`#${this.state.selectedAttack}`);
    const elem = event.currentTarget;
    prevElem.classList.toggle('selected');
    elem.classList.toggle('selected');
    this.setState({
      selectedAttack: elem.id
    })
  }

  selectSearchByHandler = (event) => {
    const elem = event.currentTarget;
    this.setState({
      searchBy: elem.value
    })
  }

  selectConsoleHandler = (event) => {
    const elem = event.currentTarget;
    this.setState({
      gamingConsole: elem.value
    })
  }
  selectGameHandler = (event) => {
    const elem = event.currentTarget;
    this.setState({
      selectedGame: elem.value
    }, () => {
      if(this.state.selectedGame === 'mk11'){
        const characters = [...mk11db.characters];
        this.setState({
          characterList: characters
        })
      }
    })
  }
  selectCharacterHandler = (event) => {
    let prevElemID = this.state.selectedCharacter;
    prevElemID = prevElemID.replace(/\s/g, '');

    const prevElem = this.state.selectedCharacter !== '' ? document.querySelector(`#characterBox > #${prevElemID}`) : null;
    const elem = event.currentTarget;
    if(prevElem) prevElem.classList.remove('selected');
    elem.classList.toggle('selected');
    this.setState({
      selectedCharacter: elem.textContent
    }, () => {
      const character = [...this.state.characterList].filter( char => char.charName === this.state.selectedCharacter)
      let  basicAttacks;
      if(this.state.selectedGame === 'mk11'){
        basicAttacks = [...mk11db.basicAttacks].filter( move => move.charID === character[0].charID);
      }
      this.setState({
        moveList: basicAttacks
      })
    })
  }

  selectPunisherHandler = (event) => {
    let prevElemID = this.state.selectedPunisher;
    prevElemID = prevElemID.replace(/\s/g, '');

    const prevElem = this.state.selectedPunisher !== '' ? document.querySelector(`#punisherBox > #${prevElemID}`) : null;
    const elem = event.currentTarget;
    if(prevElem) prevElem.classList.remove('selected');
    elem.classList.toggle('selected');
    this.setState({
      selectedPunisher: elem.textContent
    })
  }

  howToPunishHandler = () => {
    const attacker = [...this.state.characterList].filter( char => char.charName === this.state.selectedCharacter);
    const defender = [...this.state.characterList].filter( char => char.charName === this.state.selectedPunisher);
    let allAttackerMoves;
    let allDefenderMoves;
    let counters;
    let quickestStartup = 99999;
    let quickestMoveIndex;
    let calcStartup;

    if(this.state.selectedGame === 'mk11'){
      allAttackerMoves = [...mk11db.basicAttacks].filter( move => move.charID === attacker[0].charID)
      .filter( move => move.chain !== 'T' && move.type !== 'Buff');
      allDefenderMoves = [...mk11db.basicAttacks].filter( move => move.charID === defender[0].charID)
      .filter( move => move.chain !== 'T' && move.type !== 'Buff');
      allAttackerMoves.sort((a, b) =>  a.startup - b.startup );
      allDefenderMoves.sort((a, b) =>  a.startup - b.startup );
      console.log(allAttackerMoves);

      for(let i = 0; i < allAttackerMoves.length; i += 1){
        if(quickestStartup > allAttackerMoves[i].startup){
           quickestStartup = allAttackerMoves[i].startup; 
           quickestMoveIndex = i;
        }
      }
      console.log(quickestStartup, quickestMoveIndex);

      if(this.state.selectedMove.blockAdvantage > 0){
        calcStartup = this.state.selectedMove.blockAdvantage - allAttackerMoves[quickestMoveIndex].startup;
      }else{
        calcStartup = allAttackerMoves[quickestMoveIndex].startup - this.state.selectedMove.blockAdvantage;
      }
      alert("Quickest Possible Counter Attack for Attacker: " + this.state.selectedCharacter + "\n" +
      "Move Name: " + allAttackerMoves[quickestMoveIndex].moveName + "\n" +
      "Startup: " + allAttackerMoves[quickestMoveIndex].startup + "\n" +
      "Calculated Startup: " + (calcStartup));
    }
    counters = [...allDefenderMoves].filter( move => move.startup < calcStartup);
    console.log('mk11', counters);
    this.setState({
      counterList: counters
    })
  }

  selectMoveHandler = (event) => {
    let prevElemID = this.state.selectedMove.moveName;
    prevElemID = prevElemID.replace(/\s/g, '');

    const prevElem = this.state.selectedMove.moveName !== '' ? document.querySelector(`#moveBox > #${prevElemID}`) : null;
    const elem = event.currentTarget;
    if(prevElem) prevElem.classList.remove('selected');
    elem.classList.toggle('selected');
    const selectedMove = [...this.state.moveList].filter( move => move.moveName === elem.textContent);
    this.setState({
      selectedMove: selectedMove[0]
    })
  }

  selectCounterHandler = (event) => {
    let prevElemID = this.state.selectedCounter.moveName;
    prevElemID = prevElemID.replace(/\s/g, '');

    const prevElem = this.state.selectedCounter.moveName !== '' ? document.querySelector(`#counterBox > #${prevElemID}`) : null;
    const elem = event.currentTarget;
    if(prevElem) prevElem.classList.remove('selected');
    elem.classList.toggle('selected');
    const selectedCounter = [...this.state.counterList].filter( move => move.moveName === elem.textContent);
    this.setState({
      selectedCounter: selectedCounter[0]
    })
  }

  render(){
    return (
      <div className="App container">
        <div className="bg-responsive-size hide"></div>
        <button type="button" className="debug-toggle">Debug Toggle</button>
        <header>
          <div id='topSection' className='row-flex-auto center'>
            <Games 
              selectGame={this.selectGameHandler}
            />
            <Attacks 
              click={this.selectAttackHandler}
              select={this.selectSearchByHandler}
            />
            <Characters 
              selectConsole={this.selectConsoleHandler}
              allCharacters={this.state.characterList}
              selectCharacter={this.selectCharacterHandler}
              gameSelected = {this.state.selectedGame}
            />
            <Punish 
              click={this.howToPunishHandler}
              allCharacters={this.state.characterList}
              selectPunisher={this.selectPunisherHandler}
              gameConsole = {this.state.gamingConsole}
            />
          </div>
        </header>
        <main>
          <div className='row-flex-auto center'>
            <MoveList
              selectMove={this.selectMoveHandler}
              selectCounter={this.selectCounterHandler}
              allMoves={this.state.moveList}
              allCounters={this.state.counterList}
              moveSelected={this.state.selectedMove}
              gameConsole = {this.state.gamingConsole}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
