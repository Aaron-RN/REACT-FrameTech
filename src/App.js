import React, { Component } from 'react';
import './css/App.css';
import './css/ARN-framework.css';
import Games from './components/game';
import Attacks from './components/attacks';
import Characters from './components/characters';
import Punish from './components/punish';
import MoveList from './components/moves';

class App extends Component {
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
    selectedMove: '',
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
    if(prevElem) prevElem.classList.toggle('selected');
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
    if(prevElem) prevElem.classList.toggle('selected');
    elem.classList.toggle('selected');
    this.setState({
      selectedPunisher: elem.textContent
    })
  }

  howToPunishHandler = () => {
    console.log('PUNISHed');
  }

  selectMoveHandler = (event) => {
    let prevElemID = this.state.selectedMove;
    prevElemID = prevElemID.replace(/\s/g, '');

    const prevElem = this.state.selectedMove !== '' ? document.querySelector(`#moveBox > #${prevElemID}`) : null;
    const elem = event.currentTarget;
    if(prevElem) prevElem.classList.toggle('selected');
    elem.classList.toggle('selected');
    this.setState({
      selectedMove: elem.textContent
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
              selectCounter
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
