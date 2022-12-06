import React from 'react'
import Nav from './Nav'
import ShoppingList from './ShoppingList'

export default function App() {
  // State and function describing which section to display
  const[shown,setShown] = React.useState('')
  function handleShown(event) {
    setShown(event.target.id)
    console.log(shown)
  }

  return (
    <div>
      <Nav show={handleShown}/>
      {shown === 'Shopping' && <ShoppingList />}
      {shown === 'Homework' && <div>Homework</div>}
      {shown === 'Bills' && <div>Bills</div>}
      {shown === 'Plans' && <div>Plans</div>}
      {shown === 'Other' && <div>Other</div>}
    </div>
  )
}