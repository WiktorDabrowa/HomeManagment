import React from "react";

export default function Test() {

  const [data,setData] = React.useState({
    'type':'',
    'name':'',
    'deadline':'',
    'notes':''
  })

  React.useEffect( () => {
    console.log('Effect run')
      fetch('http://127.0.0.1:8000/api/task/1')
      .then (res => res.json())
      .then (data => setData(data))
  }, [])

  return (
    <div>
      {data.name}
    </div>
  )
}