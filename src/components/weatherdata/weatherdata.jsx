// src/App.jsx



import "./weather.css"
const WeatherData = ({forcast}) => {

  const {day,img,imgAlt,conditions,time} = forcast

  return (
    <>
    

  <h2>{day}</h2>
  <p><span>conditions: </span>{conditions}</p>
  <p><span>time: </span>{time}</p>

    
    </>
  );
}

export default WeatherData













