import React from 'react'

export default function ShoppingList() {
  const [shoppingListItems,setShoppingListItems] = React.useState([])

  React.useEffect( () => {
    fetch('http://127.0.0.1:8000/api/tasks/shopping')
    .then(res => res.json())
    .then(items => setShoppingListItems(items))
    console.log('got items')
  },[])

  const shoppingItems = shoppingListItems.map(item => {
    return (
      <div className='shopping--item'>
        {item.name}{item.deadline != '' ? ` | ${item.deadline}` : ''}{item.notes != '' ? ` | ${item.notes}` : ''}
      </div>
    )
  })

  return (
    <div className='shopping'>
    {shoppingItems}
    </div>
  )
}