import React, { Component } from 'react';
import './css/App.css';
import './css/ARN-framework.css';
import Attacks from './components/attacks';
import Characters from './components/characters';

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
    selectedCharacter: ''
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

  selectSearchBy = (event) => {
    const elem = event.currentTarget;
    this.setState({
      searchBy: elem.value
    })
  }

  selectConsole = (event) => {
    const elem = event.currentTarget;
    this.setState({
      gamingConsole: elem.value
    })
  }
  selectGame = (event) => {
    const elem = event.currentTarget;
    this.setState({
      selectedGame: elem.value
    })
  }
  selectCharacter = (event) => {
    let prevElemID = this.state.selectedCharacter;
    prevElemID = prevElemID.replace(/\s/g, '');

    const prevElem = this.state.selectedCharacter !== '' ? document.querySelector(`#${prevElemID}`) : null;
    const elem = event.currentTarget;
    if(prevElem) prevElem.classList.toggle('selected');
    console.log(this.state.selectedCharacter);
    elem.classList.toggle('selected');
    this.setState({
      selectedCharacter: elem.textContent
    })
  }

  render(){
    return (
      <div className="App">
        <div className="bg-responsive-size hide"></div>
        <button type="button" className="debug-toggle">Debug Toggle</button>
        <header className="App-header container">
          <div id='topSection' className='row-flex-auto'>
            <Attacks 
              click={this.selectAttackHandler}
              select={this.selectSearchBy}
            />
            <Characters 
              selectGame={this.selectGame}
              selectConsole={this.selectConsole}
              allCharacters={this.state.characterList}
              selectCharacter={this.selectCharacter}
            />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
