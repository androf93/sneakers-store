import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import { Container } from '@mui/material';

export default function ProductList() {
	return (
		<Container className="product-list" maxWidth="lg">
			{products.map(product => (
				<ProductCard key={product.id} product={product} />
			))}
		</Container>
	);
}