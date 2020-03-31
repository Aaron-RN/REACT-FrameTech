import React from 'react';


const counters = (props) => {
  const allCounters = props.allCounters;

  const createCounter = (name, id) => {
    return (
      <div id={'m' + id} key={id} onClick={props.selectCounter} className='selectable'>{name}</div>
    );
  }
  const gameConsole = props.gameConsole;
  let color = 'consoleBG-universal';
  if (gameConsole === 'xbox'){ color = 'consoleBG-xbox'; }
  if (gameConsole === 'ps4'){ color = 'consoleBG-ps4'; }

  return (
    <div id='counterSection' className={'col-3 col-12-sm ' + color}>
      <div className='row-flex-auto center vert-stretch'>
        <div className='col-10-m12-12 text-center'>
          <div id='counterBox'>
            {allCounters.map(move => createCounter(move.moveName, move._id))}
            </div>
        </div>
      </div>
    </div>
  )
};

export default counters;