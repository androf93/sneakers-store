import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Cart() {
	const { cart, removeFromCart } = useContext(CartContext);

	if (cart.length === 0) return <p>Your cart is empty.</p>;

	return (
		<div className="cart-page">
			<h2>Your Cart</h2>
			{cart.map(item => (
				<div key={item.id} className="cart-item">
					<h4>{item.name}</h4>
					<p>${item.price}</p>
					<button onClick={() => removeFromCart(item.id)}>Remove</button>
				</div>
			))}
		</div>
	);
}