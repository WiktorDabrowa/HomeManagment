import React from "react";

export default function HandyMenu() {
  const [tasks,setTasks] = React.useState([])

  React.useEffect( () => {
    fetch('/api/closest_tasks')
    .then(res => res.json())
    .then(items => setTasks(items))
    console.log('got items')
  },[])

  console.log(tasks)

  const elements = tasks.map(item => {
    return (
    <div>
      {item.deadline}
      <br />
      {item.name}
    </div>
    )
})
  
  return (
    <div>
      <hr />
      <h2>Closest deadlines:</h2>
      {elements}
    </div>
  )
}