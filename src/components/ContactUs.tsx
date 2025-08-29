import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SuccessModal from "./SucessModal";

// ############################################################################
// ## 1. Contact Information Sub-Component (Left Side)
// ############################################################################
const ContactInfo = () => {
	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
	};
	
	return (
		<div
			className="flex flex-col justify-center space-y-6 md:pr-8">
			<motion.span
				variants={ itemVariants }
				className="text-blue-700 text-sm font-semibold uppercase tracking-wide">
				Contact us
			</motion.span>
			<motion.h1
				variants={ itemVariants }
				className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
				Let's
				<span
					className="text-blue-600">
					Secure Your Business
				</span>
			</motion.h1>
			<motion.p
				variants={ itemVariants }
				className="text-lg text-gray-600">
				Have questions about our services or need a custom security solution? Our team will get back to you within 24 hours.
			</motion.p>
			<div
				className="space-y-4 pt-4">
				<motion.div
					variants={ itemVariants }
					className="flex items-center space-x-4 text-gray-700">
					<FaEnvelope
						className="text-blue-600 text-xl"/>
					<a
						href="mailto:email@example.com"
						className="hover:text-blue-800 transition-colors">
						email@example.com
					</a>
				</motion.div>
				<motion.div
					variants={ itemVariants }
					className="flex items-center space-x-4 text-gray-700">
					<FaPhoneAlt
						className="text-blue-600 text-xl"/>
					<a
						href="tel:+15550000000"
						className="hover:text-blue-800 transition-colors">
						+1 (555) 000-0000
					</a>
				</motion.div>
				<motion.div
					variants={ itemVariants }
					className="flex items-center space-x-4 text-gray-700">
					<FaMapMarkerAlt
						className="text-blue-600 text-xl"/>
					<a
						href="https://www.google.com/maps/search/?api=1&query=123+Sample+St%2C+Sydney+NSW+2000+AU"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-blue-800 hover:underline transition-colors">
						123 Sample St, Sydney NSW 2000 AU
					</a>
				</motion.div>
			</div>
		</div>
	);
};

// ############################################################################
// ## 2. Contact Form Sub-Component (Right Side)
// ############################################################################
interface FormData {
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	serviceType: string;
	message: string;
	acceptTerms: boolean;
}

const ContactForm = () => {
	const [ formData, setFormData ] = useState<FormData>(
		{
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          serviceType: 'Web Application Security Audits',
          message: '',
          acceptTerms: false,
		} );
	const [ isSubmitting, setIsSubmitting ] = useState( false );
	const [ errors, setErrors ] = useState( { email: '' } );
	const [ isModalOpen, setIsModalOpen ] = useState( false );
	
	const handleChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
		const { name, value, type } = e.target;
		
		// --- Real-time Validation Logic ---
		
		if ( name === 'firstName' || name === 'lastName' ) {
			// Allow only letters, spaces, and hyphens. Block numbers.
			if ( /^[A-Za-z\s\-]*$/.test( value ) ) {
				setFormData( prev => ( { ...prev, [ name ]: value } ) );
			}
		} else if ( name === 'phoneNumber' ) {
			// Allow only numbers, hyphens, and an optional leading '+'
			if ( /^\+?[0-9\-]*$/.test( value ) ) {
				setFormData( prev => ( { ...prev, [ name ]: value } ) );
			}
		} else if ( name === 'email' ) {
			// Always update the input, but check for errors in real-time
			setFormData( prev => ( { ...prev, email: value } ) );
			if ( value.length > 0 && !value.includes( '@' ) ) {
				setErrors( prev => ( { ...prev, email: "Email should include an '@'" } ) );
			} else if ( value.includes( '@' ) && !/\..+/.test( value.split( '@' )[ 1 ] ) ) {
				setErrors( prev => ( { ...prev, email: "Please enter a valid domain (e.g., .com)" } ) );
			} else {
				setErrors( prev => ( { ...prev, email: '' } ) );
			}
		} else {
			setFormData( prev => ( {
				...prev,
				[ name ]: type === 'checkbox' ? ( e.target as HTMLInputElement ).checked : value,
			} ) );
		}
	};
	
	
	const handleSubmit = async ( e: React.FormEvent<HTMLFormElement> ) => {
		e.preventDefault();
		setIsSubmitting( true );
		
		// Simulate an API call
		await new Promise( resolve => setTimeout( resolve, 2000 ) );
		
		setIsSubmitting( false );
		console.log( 'Form data submitted:', formData );
		setIsModalOpen( true );
		
		// Reset form state
		setFormData( {
			             firstName: '',
			             lastName: '',
			             email: '',
			             phoneNumber: '',
			             serviceType: 'Web Application Security Audits',
			             message: '',
			             acceptTerms: false,
		             } );
	};
	
	return (
		<motion.div
			initial={ { opacity: 0, scale: 0.95 } }
			animate={ { opacity: 1, scale: 1 } }
			transition={ { duration: 0.5, delay: 0.2 } }
			className="bg-white/80 backdrop-blur-lg p-8 md:p-10 rounded-xl shadow-2xl relative z-10"
		>
			<form onSubmit={ handleSubmit } className="space-y-6">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
					<div>
						<label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
							First name
						</label>
						<input
							type="text"
							name="firstName"
							id="firstName"
							required value={ formData.firstName }
							onChange={ handleChange }
							pattern="[A-Za-z\s\-]+"
							title="Please enter only letters, spaces, or hyphens."
							className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition"/>
					</div>
					<div>
						<label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last name</label>
						<input
							type="text"
							name="lastName"
							id="lastName"
							required value={ formData.lastName }
							onChange={ handleChange }
							className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition"/>
					</div>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
					<div>
						<label htmlFor="email" className="block text-sm font-medium text-gray-700">
							Email
						</label>
						<input
							type="email"
							name="email"
							id="email"
							required value={ formData.email }
							onChange={ handleChange }
							className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition"/>
						{ errors.email &&
						  <p className="mt-1 text-xs text-red-600">
							  { errors.email }
						  </p> }
					</div>
					<div>
						<label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
							Phone number
						</label>
						<input
							type="tel"
							name="phoneNumber"
							id="phoneNumber"
							value={ formData.phoneNumber }
							onChange={ handleChange }
							className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition"
							pattern="[0-9\s\-()+]*"
							title="Please enter a valid phone number"
							inputMode="numeric"/>
					</div>
				</div>
				<div>
					<label
						className="block text-sm font-medium text-gray-700 mb-2">
						Service Type?
					</label>
					<div className="mt-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
						{
							[ 'Web Application Security Audits',
							  'PCI DSS Gap Assessments',
							  'Cloud Security Assessments',
							  'Security Awareness Training' ]
								.map( ( service ) =>
									      (
											  <div
												  key={ service }
												  className="flex items-center">
												  <input
													  id={ service.replace( /\s/g, '-' ).toLowerCase() } name="serviceType"
													  type="radio"
													  value={ service }
													  checked={ formData.serviceType === service }
													  onChange={ handleChange }
													  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"/>
												  <label
													  htmlFor={ service.replace( /\s/g, '-' ).toLowerCase() } className="ml-3 block text-sm text-gray-700">
													  { service }
												  </label>
											  </div> ) ) }
					</div>
				</div>
				<div>
					<label
						htmlFor="message"
						className="block text-sm font-medium text-gray-700">
						Message
					</label>
					<textarea
						name="message"
						id="message"
						rows={ 4 }
						value={ formData.message }
						onChange={ handleChange }
						className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition"
						placeholder="Type your message...">
					</textarea>
				</div>
				<div
					className="flex items-center">
					<input
						id="acceptTerms"
						name="acceptTerms"
						type="checkbox"
						checked={ formData.acceptTerms }
						onChange={ handleChange } required
						className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"/>
					<label
						htmlFor="acceptTerms"
						className="ml-2 block text-sm text-gray-900">
						I accept the
						<a
							href="#"
							className="text-blue-600 hover:underline">
							Terms
						</a>
					</label>
				</div>
				<button
					type="submit"
					disabled={ isSubmitting }
					className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all transform hover:scale-105 active:scale-95 disabled:bg-blue-400 disabled:cursor-not-allowed">
					{ isSubmitting ? (
						<>
							<svg
								className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24">
								<circle
									className="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									strokeWidth="4">
								</circle>
								<path
									className="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
								</path>
							</svg>
							Submitting...
						</>
					) : (
						  'Book your call'
					  ) }
				</button>
			</form>
			<SuccessModal
				isOpen={ isModalOpen }
				onClose={ () => setIsModalOpen( false ) }/>
		</motion.div>
	);
};

// ############################################################################
// ## 3. Main HeroSection Component (Layout Container)
// ############################################################################
const ContactUs: React.FC = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.1, delayChildren: 0.1 },
		},
	};
	
	return (
		<section
			className="relative bg-white py-16 sm:py-24 overflow-hidden">
			<div
				className="absolute inset-0">
				<iframe
					title="background-map"
					width="100%"
					height="100%"
					src="https://www.openstreetmap.org/export/embed.html?bbox=-74.0212%2C40.7103%2C-73.9785%2C40.7303&layer=mapnik"
					className="filter grayscale opacity-30"
				>
				</iframe>
				<div
					className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/50">
				</div>
			</div>
			
			<motion.div
				className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
				variants={ containerVariants }
				initial="hidden"
				animate="visible"
				whileInView="visible" // Re-triggers animation when scrolled into view
				viewport={ { once: true } }
			>
				<div
					className="grid md:grid-cols-2 gap-12 items-start">
					<ContactInfo/>
					<ContactForm/>
				</div>
			</motion.div>
		</section>
	);
};

export default ContactUs;