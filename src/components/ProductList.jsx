import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

export default function ProductList() {
	return (
		<div className="product-list">
			{products.map(product => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
}