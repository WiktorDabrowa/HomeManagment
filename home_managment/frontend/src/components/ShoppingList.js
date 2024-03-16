import React from 'react'
import AddShoppingItem from './AddShoppingItem'

export default function ShoppingList(props) {
  const [shoppingListItems,setShoppingListItems] = React.useState([])
  const [selected,setSelected] = React.useState(new Set())

  console.log(props)
  function select(event) {
    setSelected(prevSelected => {
      let state = new Set([...prevSelected])
      if (prevSelected.has(event.target.name)) {
        state.delete(event.target.name)
      } else {
        state.add(event.target.name)
      }
      console.log(state)
      return(state)
    })
  }
  React.useEffect( () => {
    fetch('/api/tasks/shopping')
    .then(res => res.json())
    .then(items => setShoppingListItems(items))
    console.log('got items')
  },[])
  console.log(shoppingListItems)

  const shoppingItems = shoppingListItems.map(item => {
    return (
      <div key={item.id.toString()} className='shopping--item-container'>
        <form className='flex center'onChange={select}>
        <input className='shopping--checkbox' type='checkbox' name={item.id}/>
        </form>
        <div className='shopping--item-name shopping--item-column'>
          {item.name}
        </div>
        <div className='shopping--item-deadline shopping--item-column'>
          {item.deadline !== null ? `Deadline : ${item.deadline}` : null}
        </div>
        <div className='shopping--item-notes shopping--item-column'>
        {item.notes !== '' ? `Notes : ${item.notes}` : null}
        </div>
      </div>
    )
  })
  console.log(props)
  return (
    <div className='shopping--container'>
      {shoppingItems}
      <AddShoppingItem addItem={props.addItem}/>
      <button onClick={() => props.deleteSelected(selected)} className='shopping--delete-btn'>Delete Selected</button>
    </div>
  )
}