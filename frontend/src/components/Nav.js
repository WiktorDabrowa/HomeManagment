import React from 'react'

export default function Nav(props) {

  return (
    <nav className='nav'>
          <div onClick={props.show} id='Home' className='nav--item-container'>
            <h4>Home</h4>
          </div>
          <div onClick={props.show} id='Shopping' className='nav--item-container'>
            <h4>Shopping</h4>
          </div>
          <div onClick={props.show} id='Homework' className='nav--item-container'>
            <h4>Homework</h4>
          </div>
          <div onClick={props.show} id='Bills' className='nav--item-container'>
            <h4>Bills</h4>
          </div>
          <div onClick={props.show} id='Plans' className='nav--item-container'>
            <h4>Plans</h4>
          </div>
          <div onClick={props.show} id='Other' className='nav--item-container'>
            <h4>Other</h4>
          </div>
      
    </nav>
  )
}