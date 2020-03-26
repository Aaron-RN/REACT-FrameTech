import React, { Component } from 'react';
import './css/App.css';
import './css/ARN-framework.css';
import Attacks from './components/attacks';

class App extends Component {
  state = {
    selected: 'basicAttacks',
  }

  selectAttackHandler = (event) => {
    const prevElem = document.querySelector(`#${this.state.selected}`);
    const elem = event.currentTarget;
    prevElem.classList.toggle('selected');
    elem.classList.toggle('selected');
    this.setState({
      selected: elem.id
    })
  }

  render(){
    return (
      <div className="App">
        <div className="bg-responsive-size hide"></div>
        <button type="button" className="debug-toggle">Debug Toggle</button>
        <header className="App-header container">
          <div className='row-flex'><Attacks click={this.selectAttackHandler} selected={this.state.selected} /></div>
        </header>
      </div>
    );
  }
}

export default App;
