import React from 'react'
import AmountComponent from './AmountComponent';
import TitleComponent from './TitleComponent';

import './expenceStyle.css';

function Expence({expence, onExpemceDelete}) {
  
  return (
    <div className='expence-container'>
      <TitleComponent title={expence.title}/>
      <AmountComponent amount={expence.amount}/>
      <button onClick={()=> onExpemceDelete(expence._id)} className='delete-btn'>delete</button>
    </div>
  )
}

export default Expence;