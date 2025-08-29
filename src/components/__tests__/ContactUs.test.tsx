import { act, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { ContactForm } from '../ContactUs';
import * as api from '../../api/submitApi'

vi.mock( '../../api/submitApi' );
vi.mock( '../SucessModal', () => ( {
	default: ( { isOpen }: { isOpen: boolean } ) =>
		isOpen ? <div data-testid="success-modal">Success!</div> : null,
} ) );

describe( 'ContactForm Integration Test', () => {
	it( 'allows a user to fill out, submit, and see a success state', async () => {
		const user = userEvent.setup();
		let resolveSubmit: ( value: { success: boolean } ) => void;
		const submitPromise = new Promise<{ success: boolean }>( resolve => {
			resolveSubmit = resolve;
		} );
		vi.spyOn( api, 'submitForm' ).mockImplementation( () => submitPromise );
		render(<ContactForm />)
		
		// --- 1. Fill out the form ---
		await user.type( screen.getByLabelText( /first name/i ), 'John' );
		await user.type( screen.getByLabelText( /last name/i ), 'Doe' );
		await user.type( screen.getByLabelText( /email/i ), 'john.doe@example.com' );
		await user.type( screen.getByLabelText( /message/i ), 'This is a test message.' );
		await user.click( screen.getByLabelText( /i accept the terms/i ) );
		
		// --- 2. Submit the form ---
		const submitButton = screen.getByRole( 'button', { name: /book your call/i } );
		await user.click( submitButton );
		// --- 3. Assert the outcome ---
		// Check that the loading state appears
		expect( await screen.findByText( /submitting/i ) ).toBeInTheDocument();
		expect( api.submitForm ).toHaveBeenCalledTimes( 1 );
		await act( async () => {
			resolveSubmit( { success: true } );
		} );
		
		// Check that the success modal appears after the simulated API call
		expect( await screen.findByTestId( 'success-modal' ) ).toBeInTheDocument();
		
		// Check that the form has been cleared
		expect( screen.getByLabelText( /first name/i ) ).toHaveValue( '' );
	} );
} );