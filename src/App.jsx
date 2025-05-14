import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';

function App() {
	return (
		<div className="app-container">
			<Navbar />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/product/:id" element={<ProductDetail />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;