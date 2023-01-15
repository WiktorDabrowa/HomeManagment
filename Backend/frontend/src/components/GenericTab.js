import React from "react";
import AddTask from "./AddTask";
import EditTask from './EditTask';
import FlipCard from "./FlipCard";



export default function Tab(props) {

  const[items,setItems] = React.useState([])
  const[addingItem, setAddingItem] = React.useState(false)
  const[editingItem, setEditingItem] = React.useState(false)
  const[itemEdited, setitemEdited] = React.useState('')


  // Fetch data from server and set it to state:
  React.useEffect( () => {
    fetch(`/api/tasks/${props.tabName.toLowerCase()}`)
    .then(res => res.json())
    .then(items => setItems(items))
  },[])
  
  
  // Functions :
    // Edit Item
    function editTask(item) {
        setEditingItem(!editingItem)
        setitemEdited(item)
    }
    // Add task to DB
    function addTask() {
        setAddingItem( !addingItem )
    }
    // Create elements for page
    const elements = items.map(item => {
        return (
        <FlipCard key={item.id.toString()} item={item} deleteItem={props.deleteItem} editTask={editTask}/>
        )
    })


  return(
    <div>
      <div onClick={addingItem ? addTask : ''} className={addingItem || editingItem ? 'tab--container blur' : 'tab--container'}>
        {elements}
        <div onClick={addTask} className='tab--task tab--task-add'>
          <div className='tab--task-add-text'>
            Add Task
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
            </svg>
          </div>
        </div>
      </div>
      {addingItem && <AddTask state={addingItem} close={addTask} addItem={props.addItem} type={props.tabName.toLowerCase()}/>}
      {editingItem && <EditTask state={editingItem} close={editTask} item={itemEdited} items={items}/>}
    </div>
  )
}