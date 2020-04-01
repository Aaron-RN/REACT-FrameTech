import React from 'react';


const movesInput = (props) => {
  const allMoves = props.allMoves;
  const searchBy = props.searchCondition;
  allMoves.sort((a, b) =>  a[searchBy] - b[searchBy] );


  const createMove = (name, id, searchOrder = 'none') => {
    console.log(searchBy);
    return (
      <div id={'m' + id} key={id} onClick={props.selectMove} className='selectable' data-name={name}>
        {searchOrder===99? 'Unblockable': searchOrder}</div>
    );
  }

  return (
    <div id='movesSection' className='col-3 col-12-sm'>
      <div className='row-flex-auto center vert-stretch'>
        <div className='col-10-m12-12 text-center'>
          <div id='moveBox'>
            {allMoves.map(move => createMove(move.moveName, move._id, move[searchBy]))}
          </div>
        </div>
      </div>
    </div>
  )
};

export default movesInput;