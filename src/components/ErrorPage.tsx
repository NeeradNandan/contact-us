import React from 'react';
import Logo from './Logo'; // Import your existing Logo component
import { FaArrowLeft } from 'react-icons/fa';

const ErrorPage: React.FC = () => {
	return (
		<div
			className="min-h-screen bg-slate-50 flex flex-col justify-center items-center text-center px-4 py-8">
			<header
				className="absolute top-0 left-0 p-6">
				<a
					href="/"
					className="flex items-center space-x-2">
					<Logo
						className="h-8 w-auto"/>
				</a>
			</header>
			<main>
				<h1
					className="text-8xl font-extrabold text-blue-600 tracking-tighter">
					404
				</h1>
				<h2
					className="mt-4 text-3xl sm:text-4xl font-bold text-gray-800">
					Page Not Found
				</h2>
				<p
					className="mt-4 text-lg text-gray-600 max-w-md mx-auto">
					Sorry, we couldn't find the page you’re looking for. It might have been moved, deleted, or maybe you just mistyped the URL.
				</p>
				<a
					href="/"
					className="mt-8 inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-lg font-medium shadow-lg transition-transform transform hover:scale-105"
				>
					<FaArrowLeft
						className="mr-3 h-5 w-5"/>
					Go back
				</a>
			</main>
			
			<footer
				className="absolute bottom-0 p-6 text-gray-500 text-sm">
				&copy; 2025 Security Council. All rights reserved.
			</footer>
		</div>
	);
};

export default ErrorPage;