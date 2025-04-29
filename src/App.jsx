import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Batsman from './Batsman'
import Mobile from './Mobile'
import State from './State'

function App() {
  const batsmen = ['Smith', 'Kohli', "Sakib", "Lara", "Head"];

  const mobiles = [
    { id: 1, name: "Apple", model: 'Iphone 14' },
    { id: 2, name: "Samsung", model: "Samsung s24 Ultra" },
    { id: 3, name: 'Xiaomi', model: 'Xiaomi 14' }
  ]

  const handleClick = () => {
    alert(" You Have Just clicked The Button")
  }

  const handleClick2 = (num) => {
    const newNum = num + 2;
    alert(newNum);
  }
  return (
    <>

      <h1 className='student'> My React Practice Project</h1>
      {/* <Player name="Tamim" runs="5000"></Player> */}
      {/* <Mobile name="Samsung" model="Sam Note 24 ultra" price="1100$"></Mobile>
      <Mobile name="Apple" model="Iphone 14 Pro Max" price="1199$"></Mobile>
      <Mobile name="Xiaomi" model="Xiaomi 14 Ultra" price="999$"></Mobile>
      <Mobile name="Oppo" model="Oppo Find X8 Ultra" price="900$"></Mobile>

      <ToDo task="React" isDone={true}></ToDo>
      <ToDo task="JS" isDone={true}></ToDo>
      <ToDo task="Next.js" isDone={false}></ToDo> */}
      {
        mobiles.map(mobile => <Mobile key={mobile.id} mobile={mobile}></Mobile>)
      }

      {
        batsmen.map(batsman => <Batsman batsman={batsman}></Batsman>)
      }

      <State></State>

      {/* <button onClick={handleClick}> Click Me</button>
    <button onClick={()=>handleClick2(10)}>Click to add number 2</button> */}


    </>
  )
}

// function Player({name,runs}){
//   return(
//     <div className='student'>
//       <h3> Name:{name} </h3>
//       <p>Runs:{runs}</p>
//     </div>
//   )
// }
// function Mobile({name, model,price}){
//   return(
//     <div className='student'>
//       <h3>Brand:{name}</h3>
//       <p>Model:{model} </p>
//       <p>Price:{price}</p>

//     </div>
//   )
// }

// function ToDo({task, isDone}){
//   if (isDone===true) {
//     return <li>Done:{task}</li>
//   }
//   else{
//     return <li>Practice Now:{task}</li>
//   }
// }

// Conditional Rendering: &&
// function ToDo({task, isDone}){
//   return isDone && <li> Done Tasks:{task}</li>
// }

// Conditiional Rendering: ||

// function ToDo({task, isDone}){
//   return isDone|| <li>Not Done Tasks:{task}</li>
// }


export default App
