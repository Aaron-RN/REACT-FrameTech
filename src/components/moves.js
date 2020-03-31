import React from 'react';


const moves = (props) => {
  const allMoves = props.allMoves;
  const allCounters = props.allCounters;

  const createMove = (name, id) => {
    return (
      <div id={'m' + id} key={id} onClick={props.selectMove} className='selectable'>{name}</div>
    );
  }
  const createCounter = (name, id) => {
    return (
      <div id={'m' + id} key={id} onClick={props.selectCounter} className='selectable'>{name}</div>
    );
  }
  const gameConsole = props.gameConsole;
  const move = props.moveSelected;
  let color = 'consoleBG-universal';
  if (gameConsole === 'xbox'){ color = 'consoleBG-xbox'; }
  if (gameConsole === 'ps4'){ color = 'consoleBG-ps4'; }

  return (
    <div id='movesSection' className='col-12'>
      <div className='row-flex-auto justify-between vert-stretch align-start'>
        <div className='col-3 col-12-sm text-center height-100'>
          <div id='moveBox'>
            {allMoves.map(move => createMove(move.moveName, move._id))}
          </div>
        </div>
        <div className='col col-12-sm text-center size-10'>
          <div id='textMove' className='row-header size-18 bold'>{move.moveName}</div>
          <div className='row-flex-auto center'>
            <div className='col-4'>
              <div className='row-header'>Type</div>
              <div id='textType'>{move.type}</div>
            </div>
            <div className='col-4'>
              <div className='row-header'>Damage</div>
              <div id='textDamage'>{move.damage}</div>
            </div>
            <div className='col-4'>
              <div className='row-header'>Chip Damage</div>
              <div id='textChipDamage'>{move.chipDamage}</div>
            </div>
          </div>
          <div className='row-flex-auto center'>
            <div className='col-4'>
              <div className='row-header'>Block Advantage</div>
              <div id='textBlock'>{move.blockAdvantage}</div>
            </div>
            <div className='col-4'>
              <div className='row-header'>Hit Advantage</div>
              <div id='textHit'>{move.hitAdvantage}</div>
            </div>
            <div className='col-4'>
              <div className='row-header'>Cancel</div>
              <div id='textCancel'>{move.cancel}</div>
            </div>
          </div>
          <div className='row-flex-auto center'>
            <div className='col-4'>
              <div className='row-header'>Startup</div>
              <div id='textStartup'>{move.startup}</div>
            </div>
            <div className='col-4'>
              <div className='row-header'>Active</div>
              <div id='textActive'>{move.active}</div>
            </div>
            <div className='col-4'>
              <div className='row-header'>Recovery</div>
              <div id='textRecovery'>{move.recovery}</div>
            </div>
          </div>
        </div>

        <div id='counterSection' className={'col-3 col-12-sm text-center height-100 ' + color}>
          <div id='counterBox'>
            {allCounters.map(move => createCounter(move.moveName, move._id))}
          </div>
        </div>
      </div>
    </div>
  )
};

export default moves;