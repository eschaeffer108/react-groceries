import React from 'react';
import App from './App';
import Grocery from './Grocery'

const GroceryList= props => {
  let handleButtonClick = props.handleButtonClick

    let groceries = props.groceries.map(item =>{
  return(
    <Grocery
    key={item.id}
    name={item.name}
    handleButtonClick={handleButtonClick}
    />
  )
})


    return(
    <div>
      <h1>Grocery List</h1>
      <ul>{groceries}</ul>
    </div>
  )
}


export default GroceryList;
