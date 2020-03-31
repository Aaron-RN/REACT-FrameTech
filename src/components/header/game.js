import React from 'react';


const gameSelect = (props) => {

  return (
    <div id='gameSection' className='col-12 text-center center width-max '>
      <div>         
        <div className='size-10'>Game</div>
        <select id="gameSelected" className='size-12 m-b-10' onChange={props.selectGame}>
          <option value="mk11">Mortal Kombat 11</option>
          <option value="inj2">Injustice 2</option>
        </select>
        <div className='size-10'>Gaming Console</div>
        <select id="gameConsole" className='size-12  m-b-5' onChange={props.selectConsole}>
          <option value="universal">Universal</option>
          <option value="xbox">Xbox</option>
          <option value="ps4">PS4</option>
        </select>
      </div>
    </div>
  )
};

export default gameSelect;