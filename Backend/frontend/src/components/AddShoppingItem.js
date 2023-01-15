import React from 'react'

export default function AddShoppingItem(props) {

  const [data,setData] = React.useState({
    name:'',
    type:'shopping',
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
      <form  autoComplete='off' className='shopping--item-container center' onChange={change} onSubmit={(event) => props.addItem(event,data)}>
        <button className='shopping--add-item-button center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-plus-square" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
          </svg>
        </button>
        <input value={data.name} className='shopping--add-item-input' type='text' name='name' placeholder='Name'/>
        <input value={data.deadline} className='shopping--add-item-input' type='date' name='deadline' placeholder='Deadline'/>
        <input value={data.notes} className='shopping--add-item-input' type='text' name='notes' placeholder='Notes'/>
      </form>
  )
}