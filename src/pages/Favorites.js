import React, { useEffect, useState } from 'react';

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(savedFavorites);
    }, []);

    return (
        <div>
            <h1>Hotéis Favoritos</h1>
            {favorites.length === 0 ? (
                <p>Nenhum favorito encontrado.</p>
            ) : (
                favorites.map((hotel, index) => (
                    <div key={index} className="hotel-card">
                        <h2>{hotel.name}</h2>
                        <img src={hotel.image} alt={hotel.name} />
                        <p>Classificação: {hotel.stars} estrelas</p>
                        <p>Cidade: {hotel.city}</p>
                        <p>Estado: {hotel.state}</p>
                        <p>Preço: R${hotel.price}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Favorites;
