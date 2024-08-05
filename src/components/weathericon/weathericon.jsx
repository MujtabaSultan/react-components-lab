// src/App.jsx



import "./weather.css"
const WeatherIcon = ({forcast}) => {

  const {day,img,imgAlt,conditions,time} = forcast

  return (
    <>
    
<div className="weather">
 
  <img src={img} alt={imgAlt} />
 
</div>
    
    </>
  );
}




export default WeatherIcon













