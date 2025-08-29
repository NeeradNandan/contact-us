import React from 'react';
import newLogo from '/Company Logo.png';

const Logo: React.FC<{ className?: string }> = ( { className = 'h-8 w-auto' } ) => {
	return (
		<img
			src={ newLogo }
			alt="Security Council Logo"
			className={ className }/>
	);
};

export default Logo;