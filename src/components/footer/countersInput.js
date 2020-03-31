import React from 'react';
import inputToConsole from './inputToConsole';


const counterInput = (props) => {
  const gameConsole = props.gameConsole;
  const counter = props.counterSelected;
  let color = 'consoleBG-universal';

  if (gameConsole === 'xbox'){ color = 'consoleBG-xbox'; }
  if (gameConsole === 'ps4'){ color = 'consoleBG-ps4'; }
  
  let input = counter.input;
  if(input){
    input = inputToConsole(input, gameConsole);
  }
  return (
    <div id='countersInputSection' className={'col-3 col-12-sm ' + color}>
      <div className='row-flex-auto center vert-stretch'>
        <div className='col-10-m12-12 text-center'>
          <div className='size-12'>
            <div className={'row-header-2 ' + color + '-btn'}>Input</div>
            <div className='size-18'>{input}</div>
          </div>
        </div>
      </div>
    </div>
    
  )
};

export default counterInput;