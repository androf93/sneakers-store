import React, { createContext, useState, useCallback, useMemo } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
	const [cart, setCart] = useState([]);

	const addToCart = useCallback((product) => {
		setCart(prev => [...prev, product]);
	}, []);

	const removeFromCart = useCallback((id) => {
		setCart(prev => prev.filter(item => item.id !== id));
	}, []);

	const value = useMemo(() => ({ cart, addToCart, removeFromCart }), [cart, addToCart, removeFromCart]);

	return (
		<CartContext.Provider value={value}>
			{children}
		</CartContext.Provider>
	);
}