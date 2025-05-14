import React from 'react';

const currentYear = new Date().getFullYear();
export default function Footer() {
	return (
		<footer className="footer">
			<p>&copy; {currentYear} SneakerStore. All rights reserved.</p>
		</footer>
	);
}