import React from 'react';


const characters = (props) => {
  const allChars = props.allCharacters;

  const createChar = (name, id) => {
    return (
      <div id={name.replace(/\s/g, '')} key={id} onClick={props.selectPunisher} className='selectable'>{name}</div>
    );
  }

  const gameConsole = props.gameConsole;
  let color = 'consoleBG-universal';
  if (gameConsole === 'xbox'){ color = 'consoleBG-xbox'; }
  if (gameConsole === 'ps4'){ color = 'consoleBG-ps4'; }

  return (
    <div id='punishSection' className={'col-3 col-12-sm ' + color}>
      <div className='row-flex-auto center vert-stretch'>
        <div className='col-10-m12-12 text-center m-b-10'>
          <div className='size-12'>Defender</div>
          <div id='punisherBox'>
            {allChars.map(char => createChar(char.charName, char._id))}
          </div>
        </div>
        <div className='col text-center vert-mid'>
          <button type='button' onClick={props.click} className={'btn punishBtn ' + color + '-btn'}>How to Punish</button>
        </div>
      </div>

    </div>
  )
};

export default characters;