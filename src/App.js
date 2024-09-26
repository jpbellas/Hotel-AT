import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddHotel from './pages/AddHotel';
import EditHotel from './pages/EditHotel';
import HotelDetails from './pages/HotelDetails';
import Favorites from './pages/Favorites';

const App = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.body.className = savedTheme; // Aplicar classe ao body
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', theme); // Salvar tema no localStorage
        document.body.className = theme; // Aplicar classe ao body
    }, [theme]);

    return (
        <Router>
            <div>
                <button onClick={toggleTheme}>
                    {theme === 'light' ? 'Mudar para Escuro' : 'Mudar para Claro'}
                </button>
                <nav style={{ marginBottom: '20px', display: 'flex', gap: '40px' }}>
                    <Link to="/">Home</Link>
                    <Link to="/add">Adicionar Hotel</Link>
                    <Link to="/favorites">Favoritos</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add" element={<AddHotel />} />
                    <Route path="/edit/:id" element={<EditHotel />} />
                    <Route path="/hotel/:id" element={<HotelDetails />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
