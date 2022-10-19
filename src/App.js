import React,{useState} from 'react'
import './App.css'


function App() {
  
  const apiKey = '426b8ee7a7244bbb2d02fd169da663f1'
  const[weatherData,setWeatherData] = useState([{}])
  const[city,setCity] = useState("")

  const getWeather = (event)=>{
    if(event.key == "Enter"){
      fetch('https://api.openweathermap.org/data/3.0/weather?q=${city}&appid=${apiKey}').then(
        response => response.json()
      ).then(
        data => {
          setWeatherData(data)
        }
      )
    }
  }
  return (
    <div className='container'>

<input className='input'
 placeholder='Enter Beach...'
 onChange={e => setCity(e.target.value)}
 value={city}
 onKeyPress={getWeather}
 >
  
 </input>
    </div>
  )
}

export default App