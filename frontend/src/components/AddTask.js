import React from "react";

export default function AddTask(props) {
  const [data,setData] = React.useState({
    name:'',
    type:props.type,
    deadline:'',
    notes:''
  })
  function change(event) {
    setData(prevData => {
      console.log(data)
      return {
        ...prevData,
        [event.target.name]:event.target.value
      }
    })
  }
  return (
    <div className='addTask--container tab--task'>
      <form onSubmit={(event) => props.addItem(event,data)} onChange={change} className='addTask--form'>
        <input required value={data.name} name='name' type='text' placeholder='Name' />
        <input value={data.deadline} name='deadline' type='date' placeholder='Date' />
        <textarea value={data.notes} name='notes' placeholder='Notes' />
        <button className='addTask--form-btn'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
          </svg>
        </button>
      </form>
    </div>
  )
}