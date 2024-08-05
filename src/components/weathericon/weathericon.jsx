// src/App.jsx




const WeatherIcon = ({forcast}) => {

  const {day,img,imgAlt,conditions,time} = forcast

  return (
    <>
    

 
  <img src={img} alt={imgAlt} />

    
    </>
  );
}




export default WeatherIcon













