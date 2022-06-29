import AppPage from '@/ui/components/AppPage';
import { useAuth0 } from '@auth0/auth0-react';
import { Container, Typography } from '@mui/material';
import { navigate } from 'gatsby';
import React from 'react';

interface Props {
	data: any;
}

const Index: React.FC<Props> = () => {
	return (
		<AppPage title="Home">
			<AuthRedirect />
			<Container maxWidth={`lg`}>
				<Typography
					variant="h1"
					sx={{
						textAlign: `center`,
					}}
				>
					Simply the most complete, user&#8209;friendly show entry
					system.
					<br />
					<br />
					And it&apos;s absolutely <span>free</span>.
				</Typography>
			</Container>
		</AppPage>
	);
};

const AuthRedirect = () => {
	const { isAuthenticated } = useAuth0();

	if (isAuthenticated) {
		navigate(`/dashboard`);
	}

	return null;
};

export default Index;
