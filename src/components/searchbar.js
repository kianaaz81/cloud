import { useState } from "react";

const SearchBar = ({ fetchWeather }) => {
    const [city , setCity] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if(city){
        fetchWeather(city)
        setCity('')
    }
  };

  return (
    <form 
    className="mt-5" 
    onSubmit={handleSubmit}>
      <input className="border border-white bg-gray-100 opacity-70 rounded-md w-100 p-2" 
      type="text" 
      value={city} 
      placeholder="enter city" 
      onChange={(e)=>setCity(e.target.value)} 
      required>
      </input>
      <button 
      className="text-blue-500 bg-white rounded-md p-2 ml-5 " 
      type="submit">
        search
      </button>
    </form>
  );
};
export default SearchBar;
