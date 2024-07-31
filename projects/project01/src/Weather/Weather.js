import React, { useState } from 'react';

const WeatherComponent = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

    const handleInputChange = (event) => {
        setCity(event.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    City:
                    <input type="text" value={city} onChange={handleInputChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
            {weatherData && <p>Weather in {city}: {weatherData}°C</p>}
        </div>
    );
};

export default WeatherComponent;
