import React from 'react';


const basicAttacks = (props) => {
  let buttonSelected = (
    <div className='m-b-1'>
      <div id='basicAttacks' className='col-12 selectable selected' onClick={props.click}>Basic Attacks</div>
      <div id='comboAttacks' className='col-12 selectable' onClick={props.click}>Combos</div>
      <div id='specialAttacks' className='col-12 selectable' onClick={props.click}>Special Moves</div>
    </div>
  );

  return (
    <div id='attackSection' className='col-0 text-center'>
      {buttonSelected}
      <div className='size-10'>Search By</div>
      <select id="searchBy" className='size-12' onChange={props.select}>
        <option value="name">Name</option>
        <option value="input">Input</option>
        <option value="block">Block Advantage</option>
        <option value="hit">Hit Advantage</option>
        <option value="recovery">Recovery</option>
      </select>
    </div>
  )
};

export default basicAttacks;