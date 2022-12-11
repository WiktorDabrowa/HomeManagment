import React from 'react'
import Nav from './Nav'
import ShoppingList from './ShoppingList'

export default function App() {
  // Local Storage:
    
  // State:

    // State and function describing which section to display
    const[shown,setShown] = React.useState('Shopping')


  // Functions: 

      // Adding an item to DB
      async function addItem(event,data){
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(data)
        }
        fetch(`api/task/add`, requestOptions)
        .then(res => res.json())
        .then(response => console.log(response))
      }

      // Show Tab
      function handleShown(event) {
        setShown(event.target.id)
        console.log(shown)
      }
      
      // Delete item set from db
      function deleteSelected(items) {
        items.forEach(item => {
          const requestOptions = {
            method: 'DELETE',
            body: item
          }
          fetch(`/api/task/delete/${item}`, requestOptions)
          .then(res => res.json())
          .then(data => console.log(data))
        document.location.reload()
        })
      }

  // Idea: set localStorage to shown and then initial
  // state to localStorage -> same tab is open on refresh

  return (
    <div>
      <Nav show={handleShown}/>
      <div className='app--main'>
        <div className='app--left'>
          {shown === 'Shopping' && <ShoppingList deleteSelected={deleteSelected} addItem={addItem}/>}
          {shown === 'Homework' && <div>Homework</div>}
          {shown === 'Bills' && <div>Bills</div>}
          {shown === 'Plans' && <div>Plans</div>}
          {shown === 'Other' && <div>Other</div>}
          </div>
        <div className='app--right'>
          Here some content
        </div>
      </div>
    </div>
  )
}