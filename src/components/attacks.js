import React from 'react';


const basicAttacks = (props) => {
  // const selected = props.selected;
  let buttonSelected = (
    <div>
      <div id='basicAttacks' className='col-12 selectable selected' onClick={props.click}>Basic Attacks</div>
      <div id='comboAttacks' className='col-12 selectable' onClick={props.click}>Combos</div>
      <div id='specialAttacks' className='col-12 selectable' onClick={props.click}>Special Moves</div>
    </div>
  );
  // if (selected === 'basicAttacks'){
  //   buttonSelected = (
  //     <div>
  //       <div id='basicAttacks' className='col-12 selectable selected' onClick={props.click}>Basic Attacks</div>
  //       <div id='comboAttacks' className='col-12 selectable' onClick={props.click}>Combos</div>
  //       <div id='specialAttacks' className='col-12 selectable' onClick={props.click}>Special Moves</div>
  //     </div>
  //   );
  // }
  // if (selected === 'comboAttacks'){
  //   buttonSelected = (
  //     <div>
  //       <div id='basicAttacks' className='col-12 selectable' onClick={props.click}>Basic Attacks</div>
  //       <div id='comboAttacks' className='col-12 selectable selected' onClick={props.click}>Combos</div>
  //       <div id='specialAttacks' className='col-12 selectable' onClick={props.click}>Special Moves</div>
  //     </div>
  //   );
  // }
  // if (selected === 'specialAttacks'){
  //   buttonSelected = (
  //     <div>
  //       <div id='basicAttacks' className='col-12 selectable' onClick={props.click}>Basic Attacks</div>
  //       <div id='comboAttacks' className='col-12 selectable' onClick={props.click}>Combos</div>
  //       <div id='specialAttacks' className='col-12 selectable selected' onClick={props.click}>Special Moves</div>
  //     </div>
  //   );
  // }
  return (
    <div className='col-0 text-center'>
      {buttonSelected}
      <div className='col-12 size-10'>Search By</div>
      <select id="searchBy" className='size-12'>
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