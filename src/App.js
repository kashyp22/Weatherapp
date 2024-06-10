import { useState } from 'react';
import './App.css';
import axios from 'axios';

const api = {
  key:"c9f4c6fff4ca9493e39bb897512d6496",
  base:"https://api.openweathermap.org/data/2.5/",

}

function App() {
  const data = "21-01-2024";
  const [search, setSearch] = useState('');
  const serchPressed = async ()=>{
    // fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
   const getweathet = await axios.get(`https://api.openweathermap.org/data/2.5/roadrisk?lat=${11.2389483}&lon=${75.8417637}&dt=${data}&appid=${api.key}`)
     
   console.log(getweathet,"sdfghjkl");
    
  }
  return (
    <div className="App">

      <header className='App_header'>
        
        {/* header */}

            <h1>Weather App</h1>


        {/* search */}
        <div>
            <input type='text' placeholder='search...' onChange={(e)=>setSearch(e.target.value)}/>
            
            <button onClick={serchPressed}>Search</button>

        </div>
        {/* location */}
        <p>Kozhikode</p>
        {/* temperature */}
        <p>degree celsious</p>
        {/* condition weather */}
        <p>sunny weather</p>
      </header>


    </div>
  );
}

export default App;
