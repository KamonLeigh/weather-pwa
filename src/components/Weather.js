import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Weather = ({ weather}) => {
    console.log(weather);
    return (
        <>
        <AnimatePresence>
            { weather.main && (
                <motion.div className="city"
                    layout
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
            
        </>
    )
}

export default Weather;