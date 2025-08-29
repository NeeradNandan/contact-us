import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown, FaPhoneAlt } from "react-icons/fa";
import Logo from './Logo';
import { motion, AnimatePresence } from 'framer-motion';


interface NavItem {
	name: string;
	to: string;
	dropdown?: boolean;
}

interface DropdownItem {
	name: string;
	to: string;
}

const Navbar: React.FC = () => {
	const [ isOpen, setIsOpen ] = useState( false );
	const navRef = useRef<HTMLElement>( null );
	const [ isServicesOpen, setIsServicesOpen ] = useState( false );
	const [ isMobileServicesOpen, setMobileServicesOpen ] = useState( false );
	
	// 2. Apply the NavItem type to our array
	const navItems: NavItem[] = [
		{ name: 'Home', to: '/home' },
		{ name: 'Services', to: '/services', dropdown: true },
		{ name: 'Blogs', to: '/blogs' },
	];
	
	const servicesDropdownItems: DropdownItem[] = [
		{ name: 'Web Application Security Audits', to: '/services' },
		{ name: 'Cloud Security Assessments', to: '/services' },
		{ name: 'PCI DSS Gap Assessments', to: '/services' },
		{ name: 'Security Awareness Training', to: '/services' },
	];
	
	useEffect( () => {
		const handleClickOutside = ( event: MouseEvent ) => {
			if ( isOpen && navRef.current && !navRef.current.contains( event.target as Node ) ) {
				setIsOpen( false );
			}
		};
		document.addEventListener( 'mousedown', handleClickOutside );
		return () => {
			document.removeEventListener( 'mousedown', handleClickOutside );
		};
	}, [ isOpen ] );
	
	return (
		<nav
			ref={ navRef }
			className="sticky top-0 z-50 bg-white/50 backdrop-blur-lg border-b border-gray-200">
			<div
				className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
				<div
					className="flex justify-between items-center h-16">
					<div
						className="flex-shrink-0 z-10">
						<Link
							to="/"
							className="flex items-center space-x-2">
							<Logo
								className="h-8 w-auto"/>
						</Link>
					</div>
					
					<div
						className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
						<div
							className="flex items-center space-x-4">
							{ navItems.map( ( item ) =>
								                (
													item.dropdown ?
													(
														<div
															key={ item.name }
															className="relative"
															onMouseEnter={ () => setIsServicesOpen( true ) }
															onMouseLeave={ () => setIsServicesOpen( false ) }>
															<Link
																to={ item.to }
																onClick={ () => setIsOpen( false ) }
																className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
																<span>
																	{ item.name }
																</span>
																<FaChevronDown
																	className={ `w-3 h-3 transition-transform duration-300 ${ isServicesOpen ? 'rotate-180' : ''}` }/>
															</Link>
															<AnimatePresence>
																{ isServicesOpen &&
																  (
																	  <motion.div
																		  initial={ { opacity: 0, y: 10 } }
																		  animate={ { opacity: 1, y: 0 } }
																		  exit={ { opacity: 0, y: 10 } }
																		  transition={ { duration: 0.2 } }
																		  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-md shadow-lg bg-white/80 backdrop-blur-lg ring-1 ring-black ring-opacity-5">
																		  <div
																			  className="py-1">
																			  { servicesDropdownItems.map( ( service ) =>
																				                               (
																												   <Link
																													   key={ service.name }
																													   onClick={ () => {
																														   setMobileServicesOpen(
																															   false );
																														   setIsOpen(
																															   false );
																													   } }
																													   to={ service.to }
																													   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
																													   { service.name }
																												   </Link>
																				                               ) ) }
																		  </div>
																	  </motion.div>
																  ) }
															</AnimatePresence>
														</div>
													) : (
														<Link
															key={ item.name }
															to={ item.to }
															onClick={ () => setIsOpen( false ) }
															className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
															{ item.name }
														</Link>
													)
								                ) ) }
						</div>
					</div>
					<div
						className="flex items-center z-10">
						<Link
							to="/"
							onClick={ () => setIsOpen( false ) }
							className="hidden md:inline-flex px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium shadow-lg transition-transform transform hover:scale-105 space-x-2">
							<FaPhoneAlt
								className="h-4 w-4"/>
							<span>
								Contact us
							</span>
						</Link>
						<div
							className="ml-4 flex md:hidden">
							<button
								onClick={ () => setIsOpen( !isOpen ) }
								type="button"
								className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-800 hover:bg-gray-100/50 focus:outline-none">
								<span
									className="sr-only">
									Open main menu
								</span>
								{ isOpen ?
								  <FaTimes
									  className="h-6 w-6"/> :
								  <FaBars
									  className="h-6 w-6"/>
								}
							</button>
						</div>
					</div>
				</div>
			</div>
			<AnimatePresence>
				{ isOpen && (
					<motion.div
						key="mobile-menu"
						className="md:hidden"
						initial={ { opacity: 0, height: 0 } }
						animate={ { opacity: 1, height: 'auto' } }
						exit={ { opacity: 0, height: 0 } }
						transition={ { duration: 0.3, ease: 'easeInOut' } }
					>
						<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200/50">
							{ navItems.map( ( item ) => (
								item.dropdown ? (
									<div key={ item.name }>
										<button
											onClick={ () => setMobileServicesOpen( !isMobileServicesOpen ) }
											className="w-full flex justify-between items-center text-gray-600 hover:bg-gray-100/50 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium text-left"
										>
											<span>{ item.name }</span>
											<FaChevronDown
												className={ `w-3 h-3 transition-transform duration-300 ${
													isMobileServicesOpen ? 'rotate-180' : ''
												}` }
											/>
										</button>
										<AnimatePresence>
											{ isMobileServicesOpen && (
												<motion.div
													key="mobile-services-dropdown"
													initial={ { opacity: 0, height: 0 } }
													animate={ { opacity: 1, height: 'auto' } }
													exit={ { opacity: 0, height: 0 } }
													className="pl-4 pt-1 overflow-hidden"
												>
													{ servicesDropdownItems.map( ( service ) => (
														<Link
															key={ service.name }
															to={ service.to }
															onClick={ () => {
																setMobileServicesOpen( false );
																setIsOpen( false );
															} }
															className="text-gray-600 hover:bg-gray-100/50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
														>
															{ service.name }
														</Link>
													) ) }
												</motion.div>
											) }
										</AnimatePresence>
									</div>
								) : (
									<Link
										key={ item.name }
										to={ item.to }
										onClick={ () => setIsOpen( false ) }
										className="text-gray-600 hover:bg-gray-100/50 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
									>
										{ item.name }
									</Link>
								)
							) ) }
							{/* Contact Us button */ }
							<Link
								to="/"
								onClick={ () => setIsOpen( false ) }
								className="flex items-center justify-center w-full text-center px-3 py-2 mt-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-base font-medium space-x-2"
							>
								<FaPhoneAlt className="h-4 w-4"/>
								<span>Contact us</span>
							</Link>
						</div>
					</motion.div>
				) }
			</AnimatePresence>
		</nav>
	);
};

export default Navbar;