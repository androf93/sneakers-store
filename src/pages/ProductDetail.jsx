import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { CartContext } from '../context/CartContext';

export default function ProductDetail() {
	const { id } = useParams();
	const product = products.find(p => p.id === parseInt(id));
	const { addToCart } = useContext(CartContext);

	if (!product) return <p>Product not found.</p>;

	return (
		<div className="product-detail">
			<img src={product.image} alt={product.name} />
			<h2>{product.name}</h2>
			<p>${product.price}</p>
			<button onClick={() => addToCart(product)}>Add to Cart</button>
		</div>
	);
}