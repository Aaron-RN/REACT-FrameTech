import React from 'react';


const movesDesc = (props) => {
  const move = props.moveSelected;

  return (
    <div id='movesDescSection' className='col col-12-sm size-10'>
      <div className='row-flex-auto justify-between vert-stretch align-start'>
        <div className='col col-12-sm text-center'>
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
      </div>
    </div>
  )
};

export default movesDesc;