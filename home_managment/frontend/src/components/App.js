import React from 'react'
import Nav from './Nav'
import ShoppingList from './ShoppingList'
import Tab from './GenericTab'
import HandyMenu from './HandyMenu'
import Home from './Home'


export default function App() {
  // State:
  
  // State and function describing which section to display
  const[shown,setShown] = React.useState('Home')
  
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
        console.log(data)
        event.preventDefault()
        console.log(event)
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(data)
        }
        fetch('http://127.0.0.1:8000/api/task/add', requestOptions)
        .then(res => res.json())
        .then(response => console.log(response))
        //.then(() => {document.location.reload()})
      }
      // Show Tab
      function handleShown(event) {
        setShown(event.target.id)
      }
      // Delete item set from db
      async function deleteSelected(items) {
        items.forEach(item => {
          const requestOptions = {
            method: 'DELETE',
            body: item
          }
          fetch(`http://127.0.0.1:8000/api/task/delete/${item}`, requestOptions)
          .then(res => res.json())
          .then(data => console.log(data))
        document.location.reload()
        })
      }
      // Delete one item from db
      async function deleteItem(item_id) {
        console.log("deleting item")
        const requestOptions = {
          method: 'DELETE',
          body: item_id
        }
        fetch(`http://127.0.0.1:8000/api/task/delete/${item_id}`, requestOptions)
        .then(res => res.json())
        .then(data => console.log(data))
        .then(() => {document.location.reload()})
      }

  return (
    <div>
      <Nav shown = {shown} show={handleShown}/>
      <div className='app--main'>
        <div className='app--left'>
          {shown === 'Home' && <Home />}
          {shown === 'Shopping' && <ShoppingList deleteSelected={deleteSelected} addItem={addItem}/>}
          {shown === 'Homework' && <Tab deleteItem={deleteItem} addItem={addItem} tabName='Homework' />}
          {shown === 'Bills' && <Tab deleteItem={deleteItem} addItem={addItem} tabName='Bills' />}
          {shown === 'Plans' && <Tab deleteItem={deleteItem} addItem={addItem} tabName='Plans' />}
          {shown === 'Other' && <Tab deleteItem={deleteItem} addItem={addItem} tabName='Other' />}
          </div>
        { shown !== 'Home' && <HandyMenu deleteItem={deleteItem}/>}
      </div>
    </div>
  )
}