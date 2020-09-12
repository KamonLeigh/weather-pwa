import React, { useState} from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { fetchWeather } from './api/fetchWater';
import './App.css';

const App = () => {
    const [query, setQuery ] = useState('');
    const [ weather, setWeather] = useState({});

    const search = async (e) => {
        if(e.key === 'Enter') {
            setWeather({});
            const data = await fetchWeather(query);

           setWeather(data);
           setQuery('');
        }
    }
    return (
        <div className="main-container">
           <AnimatePresence>
                <motion.input
                    type="text"
                    className="search"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={search}
                    initial={{
                        opacity:0,
                        y:'110%'
                    }}
                    animate={{
                        opacity:1,
                        y: 0
                    }}
                 />
            </AnimatePresence>
            <AnimatePresence>
            { weather.main && (
                <motion.div className="city"
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                >
                    <h2 className="city-title">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-name">
                        {Math.round(weather.main.temp -273.15)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}/>
                        <p>{weather.weather[0].description}</p>
                     </div>
                </motion.div>
            )}
            </AnimatePresence>
        </div>
    )
}

export default App;