import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/App.css';
import './css/ARN-framework.css';
import Games from './components/game';
import Attacks from './components/attacks';
import Characters from './components/characters';
import Punish from './components/punish';
import MoveList from './components/moves';
import mk11db from './backend/db/mk11/characters.json';

console.log(mk11db);

class App extends Component {
  // constructor(){
  // }
  state = {
    selectedAttack: 'basicAttacks',
    searchBy: 'Name',
    gamingConsole: 'Universal',
    selectedGame: 'mk11',
    characterList: [
      {id:'asd', name:'Aquaman'},
      {id:'arfwe', name:'Wonder Woman'}, 
      {id:'as78d', name:'Batman'}, 
      {id:'asd8', name:'Bane'}
    ],
    selectedCharacter: '',
    selectedPunisher: '',
    moveList: [
      {id:'as4d', name:'Slap'},
      {id:'arf4we', name:'Kick'}, 
      {id:'as578d', name:'Whap'}, 
      {id:'asd58', name:'Clap'}
    ],
    selectedMove: {
      name:'', 
      type:'', damage: 0, chipDamage: 0,
      blockAdv: 0, hitAdv: 0, cancel: 0, 
      startup: 0, active: 0, recovery: 0
    },
    selectedCounter: {
      name:'', 
      type:'', damage: 0, chipDamage: 0,
      blockAdv: 0, hitAdv: 0, cancel: 0, 
      startup: 0, active: 0, recovery: 0
    },
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
    console.log('PUNISHed');
  }

  selectMoveHandler = (event) => {
    let prevElemID = this.state.selectedMove.name;
    prevElemID = prevElemID.replace(/\s/g, '');

    const prevElem = this.state.selectedMove.name !== '' ? document.querySelector(`#moveBox > #${prevElemID}`) : null;
    const elem = event.currentTarget;
    if(prevElem) prevElem.classList.remove('selected');
    elem.classList.toggle('selected');
    const selectedMove = {...this.state.selectedMove};
    // selectedMove = Some DataBase Function
    this.setState({
      selectedMove: selectedMove
    })
  }

  selectCounterHandler = (event) => {
    let prevElemID = this.state.selectedCounter.name;
    prevElemID = prevElemID.replace(/\s/g, '');

    const prevElem = this.state.selectedCounter.name !== '' ? document.querySelector(`#counterBox > #${prevElemID}`) : null;
    const elem = event.currentTarget;
    if(prevElem) prevElem.classList.remove('selected');
    elem.classList.toggle('selected');
    const selectedCounter = {...this.state.selectedMove};
    // selectedMove = Some DataBase Function
    this.setState({
      selectedCounter: selectedCounter
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
              console = {this.state.gamingConsole}
            />
          </div>
        </header>
        <main>
          <div className='row-flex-auto center'>
            <MoveList
              selectMove={this.selectMoveHandler}
              selectCounter={this.selectCounterHandler}
              allMoves={this.state.moveList}
              moveSelected={this.state.selectedMove}
              console = {this.state.gamingConsole}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
