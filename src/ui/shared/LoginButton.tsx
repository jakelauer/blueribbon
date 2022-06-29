import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';
import React from 'react';

export const GetStartedButton: React.FC = () => {
	const { isAuthenticated, loginWithRedirect } = useAuth0();

	return (
		<>
			{!isAuthenticated && (
				<Button
					variant="contained"
					onClick={() => loginWithRedirect()}
					sx={{ marginLeft: `10px` }}
				>
					Get Started
				</Button>
			)}
		</>
	);
};

export const LoginButton: React.FC = () => {
	const { isAuthenticated, loginWithRedirect } = useAuth0();

	return (
		<>
			{!isAuthenticated && (
				<Button
					variant="text"
					onClick={() => loginWithRedirect()}
					sx={{ marginLeft: `10px` }}
				>
					Sign in
				</Button>
			)}
		</>
	);
};
