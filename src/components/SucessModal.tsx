import React from 'react';
import { Dialog, DialogPanel, DialogTitle, Transition } from "@headlessui/react";
import { Fragment } from 'react';

interface SuccessModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ( { isOpen, onClose } ) => {
	return (
		<Transition
			appear
			show={ isOpen }
			as={ Fragment }>
			<Dialog
				as="div"
				className="relative z-50"
				onClose={ onClose }>
				<Transition
					show={ isOpen }
					as={ Fragment }
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div
						className="fixed inset-0 bg-white/30 backdrop-blur-md"/>
				</Transition>
				
				<div
					className="fixed inset-0 overflow-y-auto">
					<div
						className="flex min-h-full items-center justify-center p-4 text-center">
						<Transition
							show={ isOpen }
							as={ Fragment }
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<DialogPanel
								className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 text-center align-middle shadow-xl transition-all">
								<div
									className="flex justify-center items-center mb-4">
									<img
										src="/Company%20Logo.png"
										alt="Success Confirmation"
									/>
								</div>
								
								<DialogTitle
									as="h3"
									className="mt-6 text-2xl font-bold leading-6 text-gray-900"
								>
									Let's Secure Your Business
								</DialogTitle>
								<div
									className="mt-2">
									<p
										className="text-sm text-gray-500">
										Our team will get back to you within 24 hours.
									</p>
								</div>
								
								<div
									className="mt-6">
									<button
										type="button"
										className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
										onClick={ onClose }
									>
										Continue
									</button>
								</div>
							</DialogPanel>
						</Transition>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};

export default SuccessModal;