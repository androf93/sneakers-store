import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Container, Typography, Button, Box } from '@mui/material';

export default function Cart() {
	const { cart, removeFromCart } = useContext(CartContext);

	if (cart.length === 0) return <Typography>Your cart is empty.</Typography>;

	return (
		<Container className="cart-page" maxWidth="md">
			<Typography variant="h3" gutterBottom>Your Cart</Typography>
			{cart.map(item => (
				<Box key={item.id} className="cart-item" sx={{ background: '#fff', p: 2, mb: 2, borderRadius: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: 1 }}>
					<div>
						<Typography variant="h6">{item.name}</Typography>
						<Typography color="text.secondary">${item.price}</Typography>
					</div>
					<Button variant="contained" color="error" onClick={() => removeFromCart(item.id)}>
						Remove
					</Button>
				</Box>
			))}
		</Container>
	);
}