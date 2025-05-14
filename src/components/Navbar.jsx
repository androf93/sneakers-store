import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function Navbar() {
	const { cart } = useContext(CartContext);

	return (
		<nav className="navbar">
			<h1 className="logo"><Link to="/">SneakerStore</Link></h1>
			<ul className="nav-links">
				<li><Link to="/shop">Shop</Link></li>
				<li><Link to="/cart">Cart ({cart.length})</Link></li>
			</ul>
		</nav>
	);
}