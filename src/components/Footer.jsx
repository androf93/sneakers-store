import React from 'react';
import { Box, Typography } from '@mui/material';

const currentYear = new Date().getFullYear();
export default function Footer() {
	return (
		<Box component="footer" className="footer" sx={{ background: '#fff', textAlign: 'center', p: 2, boxShadow: '0 -2px 4px rgba(0,0,0,0.1)' }}>
			<Typography variant="body2">&copy; {currentYear} SneakerStore. All rights reserved.</Typography>
		</Box>
	);
}