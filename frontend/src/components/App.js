import React from 'react'
import Nav from './Nav'
import ShoppingList from './ShoppingList'
import Tab from './GenericTab'
import HandyMenu from './HandyMenu'


export default function App() {
  // State:
  
  // State and function describing which section to display
  const[shown,setShown] = React.useState('')
  
  // Local Storage:
    
    // 
    React.useEffect(() => {
      const shownTab = window.localStorage.getItem('shownTab');
      if (shownTab !== null) {setShown(JSON.parse(shownTab))}
      console.log(`Got from localStorage : ${shownTab}`)
    },[])
    // Setting Local Storage to shown state
    React.useEffect(() => {
      window.localStorage.setItem('shownTab', JSON.stringify(shown))
      console.log(`Set the localStorage to : ${shown}`)
    }, [shown])
  
  // Functions: 

      // Adding an item to DB
      async function addItem(event, data){
        console.log('adding item')
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
      // Delete one item from db
      function deleteItem(item_id) {
        const requestOptions = {
          method: 'DELETE',
          body: item_id
        }
        fetch(`/api/task/delete/${item_id}`, requestOptions)
        .then(res => res.json())
        .then(data => console.log(data))
        document.location.reload()
      }
  // Idea: set localStorage to shown and then initial
  // state to localStorage -> same tab is open on refresh

  return (
    <div>
      <Nav show={handleShown}/>
      <div className='app--main'>
        <div className='app--left'>
          {shown === 'Home' && <div>Home</div>}
          {shown === 'Shopping' && <ShoppingList deleteSelected={deleteSelected} addItem={addItem}/>}
          {shown === 'Homework' && <Tab deleteItem={deleteItem} addItem={addItem} tabName='Homework' />}
          {shown === 'Bills' && <Tab deleteItem={deleteItem} addItem={addItem} tabName='Bills' />}
          {shown === 'Plans' && <Tab deleteItem={deleteItem} addItem={addItem} tabName='Plans' />}
          {shown === 'Other' && <Tab deleteItem={deleteItem} addItem={addItem} tabName='Other' />}
          </div>
        <div className='app--right'>
          Calendar widget;
          <HandyMenu />
        </div>
      </div>
    </div>
  )
}