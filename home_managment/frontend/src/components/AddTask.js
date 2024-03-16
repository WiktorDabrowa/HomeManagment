import React from "react";

export default function AddTask(props) {
  const [data,setData] = React.useState({
    name:'',
    type:props.type,
    deadline:'',
    notes:''
  })
  function combine() {
    hide()
    setTimeout(props.close, 0.25*1000)
  }
  function hide() {
    document.querySelector('.addTask--container').style.transform = 'translateX(5000px) scale(0.1)'
  }

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
      <button onClick={combine}  className='addTask--container-close-btn'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
          </svg>
      </button>
      <form onSubmit={(event) => props.addItem(event,data)} onChange={change} className='addTask--form'>
        <input required value={data.name} name='name' type='text' placeholder='Name' />
        <input disabled value={props.type.slice(0,1).toUpperCase() + props.type.slice(1)} />
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