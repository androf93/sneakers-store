import React from 'react';
import ProductList from '../components/ProductList';
// MUI imports
import { Container, Typography } from '@mui/material';

export default function Home() {
	return (
		<Container className="home-page" maxWidth="md">
			<Typography variant="h2" component="h1" gutterBottom>
				Welcome to SneakerStore
			</Typography>
			<Typography variant="subtitle1" gutterBottom>
				Discover the latest in sneakers and streetwear.
			</Typography>
			<ProductList />
		</Container>
	);
}