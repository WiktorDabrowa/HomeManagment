import React from "react";

export default function HandyMenu() {
  const [tasks,setTasks] = React.useState([])

  React.useEffect( () => {
    fetch('/api/closest_tasks')
    .then(res => res.json())
    .then(items => {
      console.log(items)
      for (let i = 0 ; i<items.length ; i++) {
        items[i].deadline = items[i].deadline.split('-')
        items[i].deadline[2] = items[i].deadline[2].slice(0,2)
        items[i].deadline = items[i].deadline.reverse()
        items[i].deadline = items[i].deadline.join('.')
      }
      console.log(items)
      setTasks(items)
    })
  },[])

  console.log(tasks)

  const elements = tasks.map(item => {
    return (
    <div className='handy--closest-item'>
      <strong>{item.deadline}</strong>
      <span className='handy--closest-type'>{item.type.slice(0,1).toUpperCase() + item.type.slice(1)}</span>
      <br />
      {item.name} 
      <button className='handy--closest-item-delete-btn'>
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