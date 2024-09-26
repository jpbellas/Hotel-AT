import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditHotel = () => {
    const { id } = useParams();
    const [hotel, setHotel] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const savedHotels = JSON.parse(localStorage.getItem('hotels')) || [];
        setHotel(savedHotels[id]);
    }, [id]);

    const handleChange = (e) => {
        setHotel({ ...hotel, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const savedHotels = JSON.parse(localStorage.getItem('hotels')) || [];
        savedHotels[id] = hotel;
        localStorage.setItem('hotels', JSON.stringify(savedHotels));
        alert("Hotel atualizado com sucesso!");
        navigate('/');
    };

    if (!hotel) return <p>Carregando...</p>;

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={hotel.name} onChange={handleChange} />
            <input type="text" name="image" value={hotel.image} onChange={handleChange} />
            <input type="number" name="stars" min="1" max="5" value={hotel.stars} onChange={handleChange} />
            <input type="text" name="city" value={hotel.city} onChange={handleChange} />
            <input type="text" name="state" value={hotel.state} onChange={handleChange} />
            <input type="number" name="price" min="1" value={hotel.price} onChange={handleChange} />
            <textarea name="description" value={hotel.description} onChange={handleChange}></textarea>
            <button type="submit">Salvar Alterações</button>
        </form>
    );
};

export default EditHotel;
