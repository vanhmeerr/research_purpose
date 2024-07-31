// MapComponent.js
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
    // Example coordinates
    const [city, setCity] = useState('');
    const [center, setCenter] = useState([3.1319, 101.6841]);

    useEffect(() => {
        if (city) {
            fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${city}`)
                .then(response => response.json())
                .then(data => {
                    if (data.length > 0) {
                        const { lat, lon } = data[0];
                        setCenter([parseFloat(lat), parseFloat(lon)]);
                    }
                })
                .catch(error => {
                    console.error('Error fetching geocoding data:', error);
                });
        }
    }, [city]);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(e.target.elements);
        const cityInput = e.target.elements.city.value; // Get the value from the input
        setCity(cityInput); // Update city state
    };


    return (
        <div className="container">
            <h1 className="mb-5 display-1">Map</h1>
            <div onSubmit={handleSearch} class="mb-3">
                {/* label and input */}
                <label for="exampleFormControlInput1" class="form-label">Find Location</label>
                <input type="text" class="form-control w-50" id="exampleFormControlInput1" placeholder="Location" />
                <button onSubmit={handleSearch} type="submit" class="btn btn-success mt-3">Find</button>
            </div>
            {/* map container and tile layer */}
            <MapContainer center={center} zoom={13} style={{ height: "100vh", width: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={center}>
                    <Popup>
                        A pretty CSS3 popup.<br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default MapComponent;
