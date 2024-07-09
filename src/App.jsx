import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FunctionalComponent from './assets/Components/FunctionalComponent'

function App() {
  const [count, setCount] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [status,setStatus] = useState(true);
  const [timer,setTimer]=useState();

function HandleStart(){
  if(status){
    
    setTimer(setInterval(Uptime,1000));
  }
}
function Uptime(){
    if(status){
      // setSeconds(seconds=>seconds+1);
    
    setSeconds(seconds=>(seconds+1)%60)
  }
  console.log(minutes);
}

useEffect(() => {
  console.log(typeof(seconds),seconds);

  if(seconds==59){
    console.log("Inside");
    setMinutes(minutes=>minutes+1) 
  }
}, [seconds])

function HandleStop(){
    
    //setStatus(false);
    clearInterval(timer);
}
function HandleReset(){
    setSeconds(0)
    setMinutes(0)
    clearInterval(timer);
}

  return (
    <>
      <h1>Stop Watch</h1>
      <nav>
          <h2>Timer</h2>
          <br/>
          <p>{minutes.toString().padStart(2,'0')}:{seconds.toString().padStart(2,'0')}</p>
          <button onClick={HandleStart}>Start</button>
          <button onClick={HandleStop}>Stop</button>
          <button onClick={HandleReset}>Reset</button>
      </nav>
    </>
  )
}

export default App
