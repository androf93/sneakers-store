import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

export default function ProductCard({ product }) {
	const { addToCart } = useContext(CartContext);

	return (
		<Card className="product-card">
			<CardMedia
				component="img"
				height="180"
				image={product.image}
				alt={product.name}
			/>
			<CardContent>
				<Typography variant="h6" component="h3">
					{product.name}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					${product.price}
				</Typography>
				<Button variant="contained" sx={{ mt: 2 }} onClick={() => addToCart(product)}>
					Add to Cart
				</Button>
			</CardContent>
		</Card>
	);
}