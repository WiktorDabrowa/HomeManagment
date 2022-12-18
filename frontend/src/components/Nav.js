import React from 'react'

export default function Nav(props) {
  const tabs = ['Home', 'Shopping', 'Homework', 'Bills', 'Plans', 'Other']
  const elements = tabs.map(tab => {
    return (
      <div onClick={props.show} 
          id={tab} 
          className={props.shown == tab ? 'nav--item-container shown' : 'nav--item-container'}>

        <h4>{tab}</h4>
      </div> 
    )
  })
  return (
    <nav className='nav'>
          {elements}
    </nav>
  )
}