import React from 'react';

const GradientDivider: React.FC = () => {
	return (
		<div
			className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div
				className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"/>
		</div>
	);
};

export default GradientDivider;