import React, { useState} from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Weather  from './components/Weather'
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
           <Weather weather={weather}/>
        </div>
    )
}

export default App;