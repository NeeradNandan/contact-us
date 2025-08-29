import React, { useState, useEffect } from 'react'; // Import useEffect
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

interface Testimonial {
	id: number;
	quote: string;
	name: string;
	title: string;
	avatarUrl: string;
}

const testimonials: Testimonial[] = [
	{
		id: 1,
		quote: "Security Council transformed our cybersecurity posture, providing invaluable insights and support that exceeded our expectations.",
		name: "John Doe",
		title: "CISO, TechCorp",
		avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
	},
	{
		id: 2,
		quote: "The team's expertise in cloud security is unmatched. They identified critical vulnerabilities we didn't know we had.",
		name: "Jane Smith",
		title: "Head of Infrastructure, CloudFlow",
		avatarUrl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
	},
	{
		id: 3,
		quote: "A truly professional and seamless experience from start to finish. I highly recommend their services for any organization.",
		name: "Sam Wilson",
		title: "CEO, Innovate Solutions",
		avatarUrl: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
	},
];

const TestimonialSection: React.FC = () => {
	const [ currentIndex, setCurrentIndex ] = useState( 0 );
	const handlePrev = () => {
		setCurrentIndex( ( prevIndex ) =>
			                 prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
		);
	};
	
	const handleNext = () => {
		setCurrentIndex( ( prevIndex ) =>
			                 prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
		);
	};
	
	// --- Auto-rotation logic ---
	useEffect( () => {
		const timer = setInterval( () => {
			handleNext();
		}, 4000 );
		return () => clearInterval( timer );
	}, [ currentIndex ] );
	
	const activeTestimonial = testimonials[ currentIndex ];
	
	return (
		<section
			className="bg-slate-50 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
			<div
				className="max-w-4xl mx-auto text-center">
				<AnimatePresence
					mode="wait">
					<motion.div
						key={ activeTestimonial.id }
						initial={ { opacity: 0, y: 20 } }
						animate={ { opacity: 1, y: 0 } }
						exit={ { opacity: 0, y: -20 } }
						transition={ { duration: 0.5 } }
					>
						<div
							className="flex justify-center mb-6">
							<Logo
								className="h-10 w-auto"/>
						</div>
						<p
							className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-snug tracking-tight relative pb-4">
							"{ activeTestimonial.quote }"
							<span
								className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full">
							</span>
						</p>
						
						<div
							className="mt-12 flex flex-col items-center justify-center">
							<img
								src={ activeTestimonial.avatarUrl }
								alt={ activeTestimonial.name }
								className="w-20 h-20 object-cover rounded-full shadow-lg border-2 border-blue-200"/>
							<p
								className="mt-4 text-xl font-semibold text-gray-900">
								{ activeTestimonial.name }
							</p>
							<p
								className="text-gray-600">
								{ activeTestimonial.title }
							</p>
						</div>
					</motion.div>
				</AnimatePresence>
				
				{/* Carousel Controls */ }
				<div
					className="flex justify-center items-center mt-8 space-x-4">
					<button
						onClick={ handlePrev }
						className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 text-gray-600 shadow-md hover:bg-gray-300 transition-colors duration-300 transform hover:scale-105">
						<FaArrowLeft
							className="text-xl"/>
					</button>
					<div
						className="flex space-x-2">
						{ testimonials.map( ( _, index ) =>
							                    (
													<button
														key={ index }
														onClick={ () => setCurrentIndex( index ) }
														className={ `block w-2.5 h-2.5 rounded-full transition-colors duration-300 ${ currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
														}` }
													>
													</button>
							                    ) ) }
					</div>
					<button
						onClick={ handleNext }
						className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105">
						<FaArrowRight
							className="text-xl"/>
					</button>
				</div>
			</div>
		</section>
	);
};

export default TestimonialSection;