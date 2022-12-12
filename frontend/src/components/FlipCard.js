import React from 'react'

export default function FlipCard(props) {

  function flip(event) {
    const flipcard = event.target.parentElement.parentElement
    flipcard.classList.toggle('flipped')
  }
  
  return (
    <div className='tab--task'>
        <div className='flip-card-inner'>
          <div className='flip-card-front'>
            <button onClick={flip} className='tab--task-delete-btn center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
              </svg>
            </button>
            <h2>{props.item.name}</h2>
            <small>{props.item.deadline}</small>
            <p>{props.item.notes}</p>
          </div>
          <div className='flip-card-back'>
            <h2>Are you sure you want to delete this task?</h2>
            <button  onClick={() => props.deleteItem(props.item.id)} className='flip-card-btn'>Yes</button>
            <button onClick={flip} className='flip-card-btn'>No</button>
          </div>
        </div>
      </div>
  )
}