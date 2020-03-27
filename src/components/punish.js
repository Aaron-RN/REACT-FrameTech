import React from 'react';


const characters = (props) => {
  const allChars = props.allCharacters;

  const createChar = (name, id) => {
    return (
      <div id={name.replace(/\s/g, '')} key={id} onClick={props.selectPunisher} className='selectable'>{name}</div>
    );
  }

  const console = props.console;
  let color = 'consoleBG-universal';
  if (console === 'xbox'){ color = 'consoleBG-xbox'; }
  if (console === 'ps4'){ color = 'consoleBG-ps4'; }

  return (
    <div id='punishSection' className={'col col-12-sm ' + color}>
      <div className='row-flex-auto center vert-stretch'>
        <div className='col-8-m12-12 text-center'>
          <div className='size-12'>Defender</div>
          <div id='punisherBox'>
            {allChars.map(char => createChar(char.name, char.id))}
          </div>
        </div>
        <div className='col-8-m12-12 text-center vert-mid'>
          <button type='button' onClick={props.click} className={'btn punishBtn ' + color + '-btn'}>How to Punish</button>
        </div>
      </div>

    </div>
  )
};

export default characters;