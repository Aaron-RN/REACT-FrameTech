import React from 'react';


const movesFooter = (props) => {
  const gameConsole = props.gameConsole;
  const move = props.moveSelected;
  const counter = props.counterSelected;
  let color = 'consoleBG-universal';

  if (gameConsole === 'xbox'){ color = 'consoleBG-xbox'; }
  if (gameConsole === 'ps4'){ color = 'consoleBG-ps4'; }

  return (
    <div id='movesFooterSection' className='col-12'>
      <div className='row-flex-auto justify-between vert-stretch align-start'>
        <div className='col-3 col-12-sm text-center height-100 p-t-5'>
          <div className='size-12'>
            <div className='row-header'>Input</div>
            <div>{move.input}</div>
          </div>
        </div>
        <div id='counterDesc' className={'col col-12-sm text-center size-10 ' + color}>
          <div id='textMove' className={'size-18 bold row-header-2 ' + color + '-btn'}>{counter.moveName}</div>
          <div className='row-flex-auto center'>
            <div className='col-4'>
              <div className={'row-header-2 ' + color + '-btn'}>Type</div>
              <div id='textType'>{counter.type}</div>
            </div>
            <div className='col-4'>
              <div className={'row-header-2 ' + color + '-btn'}>Damage</div>
              <div id='textDamage'>{counter.damage}</div>
            </div>
            <div className='col-4'>
              <div className={'row-header-2 ' + color + '-btn'}>Chip Damage</div>
              <div id='textChipDamage'>{counter.chipDamage}</div>
            </div>
          </div>
          <div className='row-flex-auto center'>
            <div className='col-4'>
              <div className={'row-header-2 ' + color + '-btn'}>Block Advantage</div>
              <div id='textBlock'>{counter.blockAdvantage}</div>
            </div>
            <div className='col-4'>
              <div className={'row-header-2 ' + color + '-btn'}>Hit Advantage</div>
              <div id='textHit'>{counter.hitAdvantage}</div>
            </div>
            <div className='col-4'>
              <div className={'row-header-2 ' + color + '-btn'}>Cancel</div>
              <div id='textCancel'>{counter.cancel}</div>
            </div>
          </div>
          <div className='row-flex-auto center'>
            <div className='col-4'>
              <div className={'row-header-2 ' + color + '-btn'}>Startup</div>
              <div id='textStartup'>{counter.startup}</div>
            </div>
            <div className='col-4'>
              <div className={'row-header-2 ' + color + '-btn'}>Active</div>
              <div id='textActive'>{counter.active}</div>
            </div>
            <div className='col-4'>
              <div className={'row-header-2 ' + color + '-btn'}>Recovery</div>
              <div id='textRecovery'>{counter.recovery}</div>
            </div>
          </div>
        </div>

        <div id='counterSection' className={'col-3 col-12-sm text-center height-100 ' + color}>
          <div className='size-12'>
            <div className={'row-header-2 ' + color + '-btn'}>Input</div>
            <div>{counter.input}</div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default movesFooter;