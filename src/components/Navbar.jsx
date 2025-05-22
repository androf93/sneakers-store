import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { AppBar, Toolbar, Typography, Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Navbar() {
	const { cart } = useContext(CartContext);

	return (
		<AppBar position="static" color="default" elevation={1} className="navbar">
			<Toolbar sx={{ justifyContent: 'space-between' }}>
				<Typography variant="h5" component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}>
					SneakerStore
				</Typography>
				<div>
					<IconButton component={Link} to="/shop" color="inherit">
						<Typography variant="button">Shop</Typography>
					</IconButton>
					<IconButton component={Link} to="/cart" color="inherit">
						<Badge badgeContent={cart.length} color="primary">
							<ShoppingCartIcon />
						</Badge>
					</IconButton>
				</div>
			</Toolbar>
		</AppBar>
	);
}