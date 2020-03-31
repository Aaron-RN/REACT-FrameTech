import React from 'react';


const movesFooter = (props) => {
  const gameConsole = props.gameConsole;
  const move = props.moveSelected;

  return (
    <div id='movesInputSection' className='col-3 col-12-sm'>
      <div className='row-flex-auto center vert-stretch'>
        <div className='col-10-m12-12 text-center'>
          <div className='size-12'>
            <div className='row-header'>Input</div>
            <div>{move.input}</div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default movesFooter;