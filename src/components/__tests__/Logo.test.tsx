import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Logo from '../Logo';

describe( 'Logo Component', () => {
	it( 'should render the logo image with correct alt text', () => {
		// 1. Render the component
		render( <Logo/> );
		
		// 2. Find the image by its role and accessible name (alt text)
		const logoImage = screen.getByRole( 'img', { name: /Security Council Logo/i } );
		
		// 3. Assert that it exists in the document
		expect( logoImage ).toBeInTheDocument();
	} );
} );