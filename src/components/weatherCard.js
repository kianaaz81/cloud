const WeatherCard=({data})=>{
  const location = data?.location||{};
  const current= data?.current|| {};
    return(
      <div className="grid font-mono text-left justify-left text-gray-800 text-2xl mt-5">  
      {/* Check if location.name exists before rendering */}  
      <p className="mt-5">Location: {location.name || 'Location not found'}, {location.country || ''}</p>  

      {/* Check if current.temp_c exists before rendering */}  
      <p className="mt-5">Temperature: {current.temp_c !== undefined ? `${current.temp_c} °C` : 'N/A'}</p>  

      {/* Use optional chaining with a fallback to avoid accessing undefined */}  
      <p className="mt-4">Weather: {current.condition ? current.condition.text : 'No data available'}</p>  

      {/* Ensure humidity and wind speed are also accessibly safely */}  
      <p className="mt-4">Humidity: {current.humidity !== undefined ? `${current.humidity}%` : 'N/A'}</p>  
      <p className="mt-4">Wind Speed: {current.wind_kph !== undefined ? `${current.wind_kph} kph` : 'N/A'}</p>  
    </div>  
    )
}
export default WeatherCard;