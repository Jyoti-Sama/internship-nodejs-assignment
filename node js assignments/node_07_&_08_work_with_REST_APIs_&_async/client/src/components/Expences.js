import React, { useEffect, useState } from 'react'
import Expence from './expenceComponents/Expence'

import './expence_container.css'
import AddExpences from './form/AddExpences'

const URL = `http://localhost:5000/post`

function Expences() {
  const [expencesdetails, setExpencesdetails] = useState([])
  const [isAddClicked, setIsAddClicked] = useState(false)

  
  //add functions
  const addExpencesClickHandler = () => {
    setIsAddClicked(!isAddClicked);
  }
  
  const addExpenceHandler = (expence) => {

    fetch( URL, {
      method: 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ title:expence.title, amount:expence.amount})
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    }).catch((err) => console.log(err))


    setExpencesdetails(initialProps => [...initialProps,{...expence}])
  } 
  
  //delete function
  const deleteExpenceHandler = (id) => {
    console.log(id)
    fetch(URL, {
      method: 'DELETE',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ _id: id})
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setExpencesdetails(initialProps => {
        const newExpences = [...initialProps].filter(expence => !(expence._id === id));
        return newExpences
      })
    }).catch((err) => console.log(err))
    
  }

  const getUserData = async () => {
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setExpencesdetails(data)
    }).catch((err) => console.log(err))    
  }
  useEffect(() => {
    getUserData();
  }, [])
  

  // all expences renders here
  const expences = expencesdetails.map(item => <Expence key={item._id} expence={item} onExpemceDelete={deleteExpenceHandler}/>)
  
  return (
    <div>
      { isAddClicked ? <AddExpences onExpenceAdd={addExpenceHandler} onCancelClick={addExpencesClickHandler}/> : <div className='add-btn-container'><button onClick={addExpencesClickHandler}>Add Expences</button></div>}
      
      
      <div className='main-expence-container'>
        {expences.length > 0 ? expences : <div>No Items To Show</div>}
      </div>
    </div>
  )
}

export default Expences