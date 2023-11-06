import { Route, Routes } from 'react-router-dom';
import './app.css';
import './globals.css';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import React, { useEffect, useState } from 'react';
import { Admin } from './pages/Admin/Admin';
import { Home } from './pages/Home/Home';
import { Dashboard } from './pages/Dashboard/Dashboard';

export const Context = React.createContext();

export const App = () => {
	const [theme, setTheme] = useState(
		localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light',
	);

	useEffect(() => {
		localStorage.setItem('theme', theme);
		const localTheme = localStorage.getItem('theme');
		document.querySelector('html').setAttribute('data-theme', localTheme);
	}, [theme]);

	return (
		<Context.Provider value={[theme, setTheme]}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/admin" element={<Admin />} />
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</Context.Provider>
	);
};
