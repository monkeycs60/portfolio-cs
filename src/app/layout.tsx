import Navbar from '@/components/layout/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
	title: 'Portfolio Clément Serizay',
	description: 'Clément Serizay, développeur fullstack react node js',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='fr'>
			<body className='m-auto flex flex-col justify-center overflow-x-hidden bg-primary'>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
