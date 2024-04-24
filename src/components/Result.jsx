


const Result = ({weatherData,historyData,historySearch}) => {


  const historyItems=historyData.map((item,index)=>{
  return(
      <li onClick={()=>historySearch(item)}  className="text-lg cursor-pointer" key={index}>{item}</li>
    )
  })


  
  return(
<div className=" grid grid-cols-4 shadow-md mt-2 p-2 bg-green-300 shadow-current">

<div className="col-span-1 border-r-2">
<span className="text-center block font-bold text-xl">History</span>
<ul>
  {historyItems}
</ul>
</div>


<div className="col-span-3 " >
{
  weatherData.length !== 0 ? <><h1 className="text-4xl text-center">{weatherData.name}</h1>

  <div className="text-2xl flex justify-around my-2 mt-6">
    <div>Max Temp : <span className="font-bold"> {weatherData.main?.temp_max}</span></div>
  <div>Min Temp :<span className="font-bold"> {weatherData.main?.temp_min}</span></div>
  </div>
  <div className=" text-2xl  flex justify-around my-2 items-center">
  <div>
    <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" />
  </div>
  <div className=" font-semibold">{weatherData.weather[0].main}</div>
  </div>
   </> : 
  <>
    <h2 className="text-center p-3 text-5xl">Please enter the city name</h2>
  </>
} 
</div>
</div>
    
  ) 
  
};

export default Result;
