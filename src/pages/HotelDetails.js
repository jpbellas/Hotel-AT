import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const HotelDetails = () => {
    const { id } = useParams();
    const [hotel, setHotel] = useState(null);

    useEffect(() => {
        const savedHotels = JSON.parse(localStorage.getItem('hotels')) || [];
        setHotel(savedHotels[id]);
    }, [id]);

    if (!hotel) return <p>Carregando...</p>;

    return (
        <div>
            <h1>{hotel.name}</h1>
            <img src={hotel.image} alt={hotel.name} />
            <p>Descrição: {hotel.description}</p>
            <p>Cidade: {hotel.city}</p>
            <p>Estado: {hotel.state}</p>
            <p>Preço: R${hotel.price}</p>
            <p>Classificação: {hotel.stars} estrelas</p>
        </div>
    );
};

export default HotelDetails;
