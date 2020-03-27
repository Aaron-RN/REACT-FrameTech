import React from 'react';


const characters = (props) => {
  const allChars = props.allCharacters;

  const createChar = (name, id) => {
    return (
      <div id={name.replace(/\s/g, '')} key={id} onClick={props.selectCharacter} className='selectable'>{name}</div>
    );
  }

  return (
    <div id='consoleSection' className='col-0 px-1'>
      <div className='row-flex-auto align-end justify-between'>
        <div className='col-0 text-center m-r-1'>
          <div className='size-10'>Gaming Console</div>
          <select id="gamingConsole" className='size-12  m-b-1' onChange={props.selectConsole}>
            <option value="universal">Universal</option>
            <option value="xbox">Xbox</option>
            <option value="ps4">PS4</option>
          </select>
          <div id='statsBox'>
            <div className='col-4'>
              <div className="col-0">
                <div className='text-red'>Health</div>
                <div>1000</div>
                </div>
              <div className="col-0">
                <div className='text-grey'>Defence</div>
                <div>1000</div>
                </div>
            </div>
            <div className='col-4'>
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
        </div>
        
        <div className='col-0 text-center'>
          <div className='size-10'>Game</div>
            <select id="gameSelected" className='size-12 m-b-1' onChange={props.selectGame}>
              <option value="mk11">Mortal Kombat 11</option>
              <option value="inj2">Injustice 2</option>
            </select>
          <div className='size-12'>Character</div>
          <div id='characterBox'>
            {allChars.map(char => createChar(char.name, char.id))}
          </div>
        </div>
      </div>

    </div>
  )
};

export default characters;