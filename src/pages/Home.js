import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [hotels, setHotels] = useState([]);
    const [filteredHotels, setFilteredHotels] = useState([]);
    const [sortCriteria, setSortCriteria] = useState('price');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const savedHotels = JSON.parse(localStorage.getItem('hotels')) || [];
        setHotels(savedHotels);
        setFilteredHotels(savedHotels);
    }, []);

    useEffect(() => {
        const filtered = hotels.filter(hotel => hotel.name.toLowerCase().includes(searchQuery.toLowerCase()));
        setFilteredHotels(filtered);
    }, [searchQuery, hotels]);

    const sortedHotels = [...filteredHotels].sort((a, b) => {
        if (sortCriteria === 'price') {
            return a.price - b.price;
        } else {
            return b.stars - a.stars;
        }
    });

    return (
        <div>
            <h1>Lista de Hotéis</h1>
            <input 
                type="text" 
                placeholder="Buscar por nome" 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} 
            />
            <select onChange={(e) => setSortCriteria(e.target.value)}>
                <option value="price">Ordenar por Preço</option>
                <option value="stars">Ordenar por Classificação</option>
            </select>
            <div>
                {sortedHotels.map((hotel, index) => (
                    <div key={index} className="hotel-card">
                        <Link to={`/hotel/${index}`}>
                            <h2>{hotel.name}</h2>
                            <img src={hotel.image} alt={hotel.name} style={{ width: '100%', borderRadius: '5px' }} />
                            <p>Classificação: {hotel.stars} estrelas</p>
                            <p>Cidade: {hotel.city}</p>
                            <p>Estado: {hotel.state}</p>
                            <p>Preço: R${hotel.price}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
