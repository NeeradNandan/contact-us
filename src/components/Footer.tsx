import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { Link } from "react-router-dom";
import Logo from './Logo';

const Footer: React.FC = () => {
	const footerNav = [
		{ name: 'Contact Us', href: '/' },
		{ name: 'About Us', href: '/about-us' },
		{ name: 'Our Services', href: '/services' },
		{ name: 'Blog Insights', href: '/blogs' },
	];
	
	const legalNav = [
		{ name: 'Privacy Policy', href: '/privacy-policy' },
		{ name: 'Terms of Use', href: '/terms' },
		{ name: 'Cookie Policy', href: '/cookie-policy' },
	];
	
	return (
		<footer
			className="bg-gray-100 text-gray-700 py-10 sm:py-16">
			<div
				className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div
					className="flex flex-col md:flex-row justify-between items-center pb-8 border-b border-gray-300 space-y-6 md:space-y-0">
					<div
						className="flex-shrink-0">
						<a
							href="#"
							className="flex items-center space-x-2">
							<Logo
								className="h-8 w-auto"/>
						</a>
					</div>
					
					<div
						className="flex flex-wrap justify-center md:justify-start space-x-6 sm:space-x-8">
						{ footerNav.map( ( item ) =>
							                 (
												 <a
													key={ item.name }
													href={ item.href }
													className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors duration-300 whitespace-nowrap"
												>
													{ item.name }
												</a>
							                 ) ) }
					</div>
					<div
						className="flex space-x-4">
						<Link
							to="https://facebook.com"
							className="text-gray-500 hover:text-gray-900 transition-colors duration-300">
							<FaFacebookF
								className="h-5 w-5"/>
						</Link>
						<Link
							to="https://x.com"
							className="text-gray-500 hover:text-gray-900 transition-colors duration-300">
							<FaTwitter
								className="h-5 w-5"/>
						</Link>
						<Link
							to="https://linkedin.com"
							className="text-gray-500 hover:text-gray-900 transition-colors duration-300">
							<FaLinkedinIn
								className="h-5 w-5"/>
						</Link>
						<Link
							to="https://youtube.com"
							className="text-gray-500 hover:text-gray-900 transition-colors duration-300">
							<FaYoutube
								className="h-5 w-5"/>
						</Link>
					</div>
				</div>
				
				<div
					className="mt-8 flex flex-col sm:flex-row justify-between items-center text-sm space-y-4 sm:space-y-0">
					<p
						className="text-gray-500">
						&copy; 2025 Security Council. All rights reserved.
					</p>
					<div
						className="flex space-x-4 sm:space-x-6">
						{ legalNav.map( ( item ) =>
							                (
												<a
													key={ item.name }
													href={ item.href }
													className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
												>
													{ item.name }
												</a>
											) ) }
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;