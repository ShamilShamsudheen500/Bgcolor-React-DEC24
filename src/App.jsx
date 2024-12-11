import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState("#000000");
  
  const bgChange=(col)=>{
    if(col=='red')
    {
      setBgColor ('#9e1b32');;
    }
    else if(col == 'pink')
    {
      setBgColor('#ff33e0')
    }
    else if(col == 'blue')
      {
        setBgColor('#0047AB');
      }
      else
        {
          setBgColor('#17B169');
        }
  }
 

  return (
    <>
      
    <div className='bg' style={{background: bgColor == "#000000" ? "#000000" : bgColor}}>
      
        <div className='btnGrp'>
          <button id='red' onClick={(e)=> bgChange('red')}>Red</button>
          <button id='pink' onClick={(e)=> bgChange('pink')}>Pink</button>
          <button id='blue' onClick={(e)=> bgChange('blue')}>Blue</button>
          <button id='green' onClick={(e)=> bgChange('green')}>Green</button>
        </div>
      </div>
    </>
  )
}

export default App