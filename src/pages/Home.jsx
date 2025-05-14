import React from 'react';
import ProductList from '../components/ProductList';

export default function Home() {
	return (
		<div className="home-page">
			<h2>Welcome to SneakerStore</h2>
			<p>Discover the latest in sneakers and streetwear.</p>
			<ProductList />
		</div>
	);
}