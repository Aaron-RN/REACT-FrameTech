import React from 'react';


const moves = (props) => {
  const allMoves = props.allMoves;

  const createMove = (name, id) => {
    return (
      <div id={name.replace(/\s/g, '')} key={id} onClick={props.selectMove} className='selectable'>{name}</div>
    );
  }
  const createCounter = (name, id) => {
    return (
      <div id={name.replace(/\s/g, '')} key={id} onClick={props.selectCounter} className='selectable'>{name}</div>
    );
  }
  const console = props.console;
  const move = props.moveSelected;
  let color = 'consoleBG-universal';
  if (console === 'xbox'){ color = 'consoleBG-xbox'; }
  if (console === 'ps4'){ color = 'consoleBG-ps4'; }

  return (
    <div id='movesSection' className='col-12'>
      <div className='row-flex-auto justify-between vert-stretch align-start'>
        <div className='col col-12-sm text-center height-100'>
          <div id='moveBox'>
            {allMoves.map(move => createMove(move.name, move.id))}
          </div>
        </div>
        <div className='col col-12-sm text-center size-10'>
          <div id='textMove' className='row-header'>Move Name</div>
          <div className='row-flex-auto center'>
            <div className='col-4'>
              <div className='row-header'>Type</div>
              <div id='textType'>{move.type}Overhead</div>
            </div>
            <div className='col-4'>
              <div className='row-header'>Damage</div>
              <div id='textDamage'>5</div>
            </div>
            <div className='col-4'>
              <div className='row-header'>Chip Damage</div>
              <div id='textChipDamage'>2</div>
            </div>
          </div>
          <div className='row-flex-auto center'>
            <div className='col-4'>
              <div className='row-header'>Block Advantage</div>
              <div id='textBlock'>-8</div>
            </div>
            <div className='col-4'>
              <div className='row-header'>Hit Advantage</div>
              <div id='textHit'>5</div>
            </div>
            <div className='col-4'>
              <div className='row-header'>Cancel</div>
              <div id='textCancel'>2</div>
            </div>
          </div>
          <div className='row-flex-auto center'>
            <div className='col-4'>
              <div className='row-header'>Startup</div>
              <div id='textStartup'>5</div>
            </div>
            <div className='col-4'>
              <div className='row-header'>Active</div>
              <div id='textActive'>5</div>
            </div>
            <div className='col-4'>
              <div className='row-header'>Recovery</div>
              <div id='textRecovery'>2</div>
            </div>
          </div>
        </div>

        <div id='counterSection' className={'col col-12-sm text-center height-100 ' + color}>
          <div id='counterBox'>
            {allMoves.map(move => createCounter(move.name, move.id))}
          </div>
        </div>
      </div>
    </div>
  )
};

export default moves;