import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { CartContext } from '../context/CartContext';
import { Container, Typography, Button } from '@mui/material';

export default function ProductDetail() {
	const { id } = useParams();
	const product = products.find(p => p.id === parseInt(id));
	const { addToCart } = useContext(CartContext);

	if (!product) return <Typography>Product not found.</Typography>;

	return (
		<Container className="product-detail" maxWidth="sm">
			<img src={product.image} alt={product.name} style={{ maxWidth: '100%', borderRadius: 4, marginBottom: 16 }} />
			<Typography variant="h4" gutterBottom>{product.name}</Typography>
			<Typography variant="h6" color="text.secondary" gutterBottom>${product.price}</Typography>
			<Button variant="contained" color="success" size="large" onClick={() => addToCart(product)}>
				Add to Cart
			</Button>
		</Container>
	);
}