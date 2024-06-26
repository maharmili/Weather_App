
import Search from './components/Search'
import Result from './components/Result'
import {useState } from 'react'
import axios from 'axios'

function App() {

  const[search,setSearch]=useState();
  const[weather,setWeather]=useState([]);
  const[history,setHistory]=useState([])


const changeSearch=(value)=>{
setSearch(value)
}

const searchWeatherHandler=()=>{
   if(search !== ""){
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=7aaabf37c70d78d952aed3e217c92281`)
    .then(
      (response)=>{
        if(history.indexOf(search) === -1){
          setHistory([...history,search])
        }
    setWeather(response.data)
    console.log(response)
      }
    ).catch(
      (error)=>{
        console.log(error)
    
      }
    )
  }
 }

const historySearchHandler= async (data)=>{
 setSearch(data);

 if(data !== ""){
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=7aaabf37c70d78d952aed3e217c92281`)
  .then(
    (response)=>{
      if(history.indexOf(data) === -1){
        setHistory([...history,data])
      }
  setWeather(response.data)
  console.log(response)
    }
  ).catch(
    (error)=>{
      console.log(error)
  
    }
  )
}
}
return (
    <div className=' mt-16 p-6 w-full h-screen  items-center  '>
    <Search searchData={search} eventHandler={changeSearch} searchWeather={searchWeatherHandler} />
    <Result weatherData={weather} historyData={history} historySearch={historySearchHandler}/>
    </div>
     )
}

export default App
