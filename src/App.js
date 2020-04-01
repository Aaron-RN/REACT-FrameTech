import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/App.css';
import './css/ARN-framework.css';
import Games from './components/header/game';
import Attacks from './components/header/attacks';
import Characters from './components/header/characters';
import Punish from './components/header/punish';
import MoveList from './components/body/moves';
import MoveDesc from './components/body/movesDesc';
import CounterList from './components/body/counters';
import MoveInput from './components/footer/movesInput';
import CounterDesc from './components/footer/countersDesc';
import CounterInput from './components/footer/countersInput';

import mk11db from './backend/db/mk11/mk11db';

class App extends Component {
  constructor(props){
    super(props);
    const characters = [...mk11db.characters];
    this.state = {
      selectedAttack: 'basicAttacks',
      searchBy: 'moveName',
      gamingConsole: 'Universal',
      selectedGame: 'mk11',
      characterList: characters,
      selectedCharacter: '',
      selectedPunisher: '',
      moveList: [{moveName:'', _id:''}],
      selectedMove: {
        moveName:'', 
        type:'none', damage: 0, chipDamage: 0,
        blockAdvantage: 0, hitAdvantage: 0, cancel: 0, 
        startup: 0, active: 0, recovery: 0, chain:''
      },
      counterList: [{moveName:'', _id:''}],
      selectedCounter: {
        moveName:'', 
        type:'none', damage: 0, chipDamage: 0,
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
    }, () => {
      const character = [...this.state.characterList].filter( char => char.charName === this.state.selectedCharacter)
      if (character.length === 0){ return }
      let  moves;
      if(this.state.selectedGame === 'mk11'){
        if(this.state.selectedAttack === 'basicAttacks'){
          moves = [...mk11db.basicAttacks].filter( move => move.charID === character[0].charID);}
        else if(this.state.selectedAttack === 'comboAttacks'){
            moves = [...mk11db.comboStrings].filter( move => move.charID === character[0].charID);}
        else if(this.state.selectedAttack === 'specialAttacks'){
          moves = [...mk11db.specialMoves].filter( move => move.charID === character[0].charID);}
      }
      this.setState({
        moveList: moves
      })
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
      let  moves;
      if(this.state.selectedGame === 'mk11'){
        if(this.state.selectedAttack === 'basicAttacks'){
          moves = [...mk11db.basicAttacks].filter( move => move.charID === character[0].charID);}
        else if(this.state.selectedAttack === 'comboAttacks'){
            moves = [...mk11db.comboStrings].filter( move => move.charID === character[0].charID);}
        else if(this.state.selectedAttack === 'specialAttacks'){
          moves = [...mk11db.specialMoves].filter( move => move.charID === character[0].charID);}
      }
      this.setState({
        moveList: moves
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
    if(this.state.selectedPunisher === '' 
    || this.state.selectedCharacter === ''
    || this.state.selectedMove.moveName === ''){return}
    const attacker = [...this.state.characterList].filter( char => char.charName === this.state.selectedCharacter);
    const defender = [...this.state.characterList].filter( char => char.charName === this.state.selectedPunisher);
    let allAttackerMoves;
    let allDefenderMoves;
    let counters;
    let quickestStartup = 99999;
    let quickestMoveIndex;
    let calcStartup;

    if(this.state.selectedGame === 'mk11'){
      allAttackerMoves = [...mk11db.allMoves].filter( move => move.charID === attacker[0].charID)
      .filter( move => move.chain !== 'T' && move.type !== 'Buff' && move.type !== 'Debuff')
      .filter( move => move.input.substring(0,2) !== 'up' 
      && move.input.substring(0,3) !== 'get' && move.input.substring(0,3) !== 'hop');
      allDefenderMoves = [...mk11db.allMoves].filter( move => move.charID === defender[0].charID)
      .filter( move => move.chain !== 'T' && move.type !== 'Buff' && move.type !== 'Debuff')
      .filter( move => move.input.substring(0,2) !== 'up' 
      && move.input.substring(0,3) !== 'get' && move.input.substring(0,3) !== 'hop');
      allAttackerMoves.sort((a, b) =>  a.startup - b.startup );
      allDefenderMoves.sort((a, b) =>  a.startup - b.startup );

      for(let i = 0; i < allAttackerMoves.length; i += 1){
        if(quickestStartup > allAttackerMoves[i].startup){
           quickestStartup = allAttackerMoves[i].startup; 
           quickestMoveIndex = i;
        }
      }

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
    const prevElemID = 'm' + this.state.selectedMove._id;

    const prevElem = this.state.selectedMove.moveName !== '' ? document.querySelector(`#moveBox > #${prevElemID}`) : null;
    const elem = event.currentTarget;
    if(prevElem) prevElem.classList.remove('selected');
    elem.classList.toggle('selected');
    const selectedMove = [...this.state.moveList].filter( move => move.moveName === elem.getAttribute('data-name'));
    this.setState({
      selectedMove: selectedMove[0]
    })
  }

  selectCounterHandler = (event) => {
    const prevElemID = 'm' + this.state.selectedCounter._id;

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
        <main className='app-main'>
          <header id='topSection' className='row-flex-auto center m-b-5'>
            <Games 
              selectGame={this.selectGameHandler}
              selectConsole={this.selectConsoleHandler}
            />
            <Attacks 
              click={this.selectAttackHandler}
              select={this.selectSearchByHandler}
            />
            <Characters 
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
          </header>
          <div id='middleSection' className='row-flex-auto center m-b-5'>
            <MoveList
              selectMove={this.selectMoveHandler}
              allMoves={this.state.moveList}
              searchCondition={this.state.searchBy}
            />
            <MoveDesc moveSelected={this.state.selectedMove} />
            <CounterList
              selectCounter={this.selectCounterHandler}
              allCounters={this.state.counterList}
              gameConsole = {this.state.gamingConsole}
            />
          </div>
          <footer id='bottomSection' className='row-flex-auto center'>
            <MoveInput
              moveSelected={this.state.selectedMove}
              gameConsole = {this.state.gamingConsole}
            />
            <CounterDesc
              counterSelected={this.state.selectedCounter}
              gameConsole = {this.state.gamingConsole}
            />
            <CounterInput
              counterSelected={this.state.selectedCounter}
              gameConsole = {this.state.gamingConsole}
            />
          </footer>
        </main>
      </div>
    );
  }
}

export default App;
