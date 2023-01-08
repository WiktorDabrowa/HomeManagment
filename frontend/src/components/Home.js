import React from 'react'

export default function Home() {

  const [items,setItems] = React.useState([])

  React.useEffect( () => {
    fetch(`/api/tasks`)
    .then(res => res.json())
    .then(items => setItems(items))
  },[])
  console.log(items)
  const closest = items.filter(item => item.deadline !== null).sort(item => {return item.deadline}).slice(0,5)

  const shopping = items.filter(item => item.type === 'shopping').sort(item => { return item.deadline})
  const homework = items.filter(item => item.type === 'homework').sort(item => { return item.deadline})
  const bills = items.filter(item => item.type === 'bills').sort(item => { return item.deadline})
  const plans = items.filter(item => item.type === 'plans').sort(item => { return item.deadline})
  const other = items.filter(item => item.type === 'other').sort(item => { return item.deadline})
  
  const closestElements = closest.map(item => {
    return (
      <div className='home--item'>
        {item.name}
      </div>
    )
  })
  const homeworkElements = homework.slice(0,5).map(item => {
    return (
      <div className='home--item'>
        {item.name}
      </div>
    )
  })
  const billsElements = bills.slice(0,5).map(item => {
    return (
      <div className='home--item'>
        {item.name}
      </div>
    )
  })
  const otherElements = other.slice(0,5).map(item => {
    return (
      <div className='home--item'>
        {item.name}
      </div>
    )
  })
  const plansElements = plans.slice(0,5).map(item => {
    return (
      <div className='home--item'>
        {item.name}
      </div>
    )
  })
  const shoppingElements = shopping.slice(0,15).map(item => {
    return (
      <div className='home--item'>
        {item.name}
      </div>
    )
  })

  console.log(billsElements)
  return (
    <div className='home--container'>
      <div className='home--greetings'>
        <p>Hello</p>
      </div>
      <div className='home--shopping'>
        <h2>Shopping</h2>
        {shoppingElements.length !== 0 ? shoppingElements : 'No Shopping to do'}
      </div>
      <div className='home-closest'>
      <h2>Closest Tasks</h2>
      {closestElements}
      </div>
      <div className='home--homework'>
      <h2>Homework</h2>
        {homeworkElements.length !== 0 ? homeworkElements : 'No homework!'}
      </div>
      <div className='home--bills'>
      <h2>Bills</h2>
        {billsElements.length !== 0 ? billsElements : 'No bills to pay!'}
      </div>
      <div className='home-other'>
      <h2>Other</h2>
        {otherElements.length !== 0 ? otherElements : 'Nothing to do?'}
      </div>
      <div className='home--plans'>
      <h2>Plans</h2>
        {plansElements.length !== 0 ? plansElements : 'No plans...'}  
      </div>
    </div>
  )
}