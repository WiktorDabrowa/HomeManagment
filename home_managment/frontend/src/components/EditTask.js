import React from "react";

export default function EditTask(props) {
  const item = props.items.find(item => {
    return item.id === props.item
  })
  
  const [data,setData] = React.useState({
    name:item.name,
    type:item.type,
    deadline:item.deadline ? item.deadline.slice(0,10): null,
    notes:item.notes
  })
  function change(event) {
    setData(prevData => {
      return {
        ...prevData,
        [event.target.name]:event.target.value
      }
    })
  }
  async function editItem(e){
    e.preventDefault()
    console.log('editing')
    console.log(e)
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(data)
    }
    fetch(`api/task/${item.id}/edit`, requestOptions)
    .then(res => res.json())
    .then(response => console.log(response))
    .then(() => {document.location.reload()})
  }

  function combine() {
    hide()
    setTimeout(props.close, 0.25*1000)
  }

  function hide() {
    document.querySelector('.addTask--container').style.transform = 'translateX(5000px) scale(0.1)'
  }

  return (
    <div className='addTask--container tab--task'>
       <button onClick={combine} className='addTask--container-close-btn'>X</button>
       <form onSubmit={editItem} onChange={change} className='addTask--form'>
         <input required value={data.name} name='name' type='text' placeholder='Name' />
         <input disabled value={data.type.slice(0,1).toUpperCase() + data.type.slice(1)} />
         <input value={ data.deadline === null ? null : data.deadline.slice(0,10)} name='deadline' type='date'/>
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