import React from 'react';
import ProductList from '../components/ProductList';
import { Container, Typography } from '@mui/material';

export default function Shop() {
	return (
		<Container className="shop-page" maxWidth="md">
			<Typography variant="h2" component="h1" gutterBottom>
				Shop All Products
			</Typography>
			<ProductList />
		</Container>
	);
}