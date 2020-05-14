import React from 'react';


const basicAttacks = (props) => {
  let buttonSelected = (
    <div className='m-b-1 size-12'>
      <div id='basicAttacks' className='col-12 selectable selected' onClick={props.click}>Basic Attacks</div>
      <div id='comboAttacks' className='col-12 selectable' onClick={props.click}>Combos</div>
      <div id='specialAttacks' className='col-12 selectable' onClick={props.click}>Special Moves</div>
    </div>
  );

  return (
    <div id='attackSection' className='col-3 col-12-sm text-center vert-stretch'>
      <div className='max-width-160 center'>         
        {buttonSelected}
        <div className='size-10'>Search By</div>
        <select id="searchBy" className='size-10 selectedOption' onChange={props.select}>
          <option value="moveName">Name</option>
          <option value="input">Input</option>
          <option value="blockAdvantage">Block Advantage</option>
          <option value="hitAdvantage">Hit Advantage</option>
          <option value="recovery">Recovery</option>
          <option value="startup">Startup</option>
          <option value="type">Type</option>
        </select>
      </div>
    </div>
  )
};

export default basicAttacks;