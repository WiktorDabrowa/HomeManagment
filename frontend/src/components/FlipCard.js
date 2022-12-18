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
            <button onClick={flip} className='tab--task-btn center delete'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
              </svg>
            </button>
            <button className='tab--task-btn center edit'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
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