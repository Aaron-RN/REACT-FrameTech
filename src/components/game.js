import React from 'react';


const gameSelect = (props) => {

  return (
    <div id='gameSection' className='col-12 text-center center width-max '>
      <div>         
         <div className='size-10'>Game</div>
          <select id="gameSelected" className='size-12 m-b-1' onChange={props.selectGame}>
            <option value="mk11">Mortal Kombat 11</option>
            <option value="inj2">Injustice 2</option>
          </select>
      </div>
    </div>
  )
};

export default gameSelect;