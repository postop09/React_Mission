import React, { useState } from 'react'

function MissionPage() {
  const [count, setCount] = useState(0);
  const [onOff, setonOff] = useState(false);
  const countMinus = () => {
    setCount((prev) => prev - 1)
  }
  const countPlus = () => {
    setCount((prev) => prev + 1)
  }
  const changeOnOff = () => {
    setonOff(!onOff)
  }
  return (
    <div>
      <p className='txt_count' data-testid='txt_count'>{count}</p>
      <ul>
        <li><button type='button' disabled={onOff} onClick={countMinus} className='btn_minus' data-testid='btn_minus'>-</button></li>
        <li><button type='button' disabled={onOff} onClick={countPlus} className='btn_plus' data-testid='btn_plus'>+</button></li>
      </ul>
      <button type='button' onClick={changeOnOff} className='btn_onOff' style={{color: 'blue'}} data-testid='btn_onOff'>on/off</button>
    </div>
  )
}

export default MissionPage