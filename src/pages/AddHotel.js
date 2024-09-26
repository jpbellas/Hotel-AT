import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddHotel = () => {
    const [hotel, setHotel] = useState({ name: '', image: '', stars: 1, city: '', state: '', price: 0, description: '' });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!hotel.name || !hotel.image || hotel.price <= 0 || !hotel.city || !hotel.state) {
            alert("Por favor, preencha todos os campos corretamente!");
            return;
        }

        const savedHotels = JSON.parse(localStorage.getItem('hotels')) || [];
        savedHotels.push(hotel);
        localStorage.setItem('hotels', JSON.stringify(savedHotels));
        alert("Hotel adicionado com sucesso!");
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nome do Hotel" onChange={(e) => setHotel({ ...hotel, name: e.target.value })} />
            <input type="text" placeholder="URL da Imagem" onChange={(e) => setHotel({ ...hotel, image: e.target.value })} />
            <input type="number" min="1" max="5" placeholder="Classificação (1-5)" onChange={(e) => setHotel({ ...hotel, stars: Number(e.target.value) })} />
            <input type="text" placeholder="Cidade" onChange={(e) => setHotel({ ...hotel, city: e.target.value })} />
            <input type="text" placeholder="Estado" onChange={(e) => setHotel({ ...hotel, state: e.target.value })} />
            <input type="number" min="1" placeholder="Preço" onChange={(e) => setHotel({ ...hotel, price: Number(e.target.value) })} />
            <textarea placeholder="Descrição" onChange={(e) => setHotel({ ...hotel, description: e.target.value })}></textarea>
            <button type="submit">Adicionar Hotel</button>
        </form>
    );
};

export default AddHotel;
