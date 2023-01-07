import React from "react";

export default function HandyMenu(props) {
  const [tasks,setTasks] = React.useState([])
  const today = new Date()

  React.useEffect( () => {
    fetch('/api/closest_tasks')
    .then(res => res.json())
    .then(items => {
      console.log(items)
      for (let i = 0 ; i<items.length ; i++) {
        let deadline = items[i].deadline
        if (items[i].deadline) {
          items[i].deadline = new Date(deadline.slice(0,4), deadline.slice(5,7)-1, deadline.slice(8,10))
        } else {
          items[i].deadline = 0
        }
        console.log(today < items[i].deadline)
      }
      console.log(items)
      setTasks(items)
    })
  },[])

  console.log(tasks)

  const elements = tasks.map(item => {
    return (
    <div className={ today < item.deadline ? 'handy--closest-item' : 'handy--closest-item redBg'}>
      <strong>{item.deadline !=0 ? `${item.deadline.getDate()}/${item.deadline.getMonth()+1}/${item.deadline.getFullYear()}` : 'No deadline'}</strong>
      <span className='handy--closest-type'>{item.type.slice(0,1).toUpperCase() + item.type.slice(1)}</span>
      <br />
      {item.name} 
      <button onClick={() => props.deleteItem(item.id)} className='handy--closest-item-delete-btn'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
        </svg>
      </button>
    </div>
    )
  })  
  function minimize(event) {
    const handy_menu = event.target.parentElement
    handy_menu.classList.toggle('minimized')
  }
  
  return (
    <div className='handy--container app--right'>
      <button onClick={minimize} className='handy--minimize-btn'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
        </svg>
      </button>
      <div className='handy--calendar'>
        Calendar Here
      </div>
      <h2>Closest deadlines:</h2>
      <div className='handy--closest-container'>
        {elements}
      </div>
    </div>
  )
}