import React from 'react';


const characters = (props) => {
  const allChars = props.allCharacters;

  const createChar = (name, id) => {
    return (
      <div id={name.replace(/\s/g, '')} key={id} onClick={props.selectCharacter} className='selectable'>{name}</div>
    );
  }

  const gameSelected = props.gameSelected;
  let statsBoxEnabled = null;
  let rowClasses = 'row-flex-auto justify-between vert-stretch flex-col align-center';
  if(gameSelected === 'inj2'){
    rowClasses = 'row-flex-auto justify-between vert-stretch align-start';
    statsBoxEnabled = (
      <div id='statsBox' className='col'>
        <div className='col-0'>
          <div className="col-0">
            <div className='text-red'>Health</div>
            <div>1000</div>
            </div>
          <div className="col-0">
            <div className='text-grey'>Defence</div>
            <div>1000</div>
            </div>
        </div>
        <div className='col-0'>
          <div className="col-0">
            <div className='text-orange'>Strength</div>
            <div>1000</div>
            </div>
          <div className="col-0">
            <div className='text-green'>Agility</div>
            <div>1000</div>
            </div>
        </div>
    </div>
    );
  }

  return (
    <div id='consoleSection' className='col col-12-sm'>
      <div className={rowClasses}>
        <div className='col-6-m6-12 text-center max-width-auto'>
          <div className='size-10'>Gaming Console</div>
          <select id="gamingConsole" className='size-12  m-b-1' onChange={props.selectConsole}>
            <option value="universal">Universal</option>
            <option value="xbox">Xbox</option>
            <option value="ps4">PS4</option>
          </select>
          {statsBoxEnabled}
        </div>
        
        <div className='col-6-m6-12 text-center max-width-auto'>
          <div className='size-12'>Character</div>
          <div id='characterBox'>
            {allChars.map(char => createChar(char.charName, char._id))}
          </div>
        </div>
      </div>

    </div>
  )
};

export default characters;