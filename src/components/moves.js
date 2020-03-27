import React from 'react';


const moves = (props) => {
  const allMoves = props.allMoves;

  const createMove = (name, id) => {
    return (
      <div id={name.replace(/\s/g, '')} key={id} onClick={props.selectMove} className='selectable'>{name}</div>
    );
  }

  const console = props.console;
  let color = 'consoleBG-universal';
  if (console === 'xbox'){ color = 'consoleBG-xbox'; }
  if (console === 'ps4'){ color = 'consoleBG-ps4'; }

  return (
    <div id='movesSection' className='col-12'>
      <div className='row-flex-auto justify-between vert-stretch align-start'>
        <div className='col-3-m3-12 text-center'>
          <div id='moveBox'>
            {allMoves.map(move => createMove(move.name, move.id))}
          </div>
        </div>
        <div className='col-4-m4-12 text-center'>
          <div className='size-10'>Move Name</div>
        </div>

        <div id='counterSection' className={'col-3-m3-12 text-center ' + color}>
          <div id='counterBox'>
            {allMoves.map(move => createMove(move.name, move.id))}
          </div>
        </div>
      </div>
    </div>
  )
};

export default moves;