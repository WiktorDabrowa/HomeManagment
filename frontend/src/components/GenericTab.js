import React from "react";
import FlipCard from "./FlipCard";


export default function Tab(props) {

  const[items,setItems] = React.useState([])

  // Fetch data from server and set it to state:
  React.useEffect( () => {
    fetch(`/api/tasks/${props.tabName.toLowerCase()}`)
    .then(res => res.json())
    .then(items => setItems(items))
    console.log('got items')
  },[])
  console.log(items)
  // Create elements for page

  const elements = items.map(item => {
    return (
      <FlipCard item={item} deleteItem={props.deleteItem}/>
    )
  })

  return(
    <div className='tab--container'>
      {elements}
      <div className='tab--task tab--task-add'>
        <div className='tab--task-add-text'>
          Add Task
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
          </svg>
        </div>
      </div>
    </div>
  )
}