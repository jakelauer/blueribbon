import AppPage from '@/ui/components/AppPage';
import { useAuth0 } from '@auth0/auth0-react';
import { Box, Typography } from '@mui/material';
import { navigate } from 'gatsby';
import React, { useEffect, useState } from 'react';

interface Props {
	data: any;
}

const Index: React.FC<Props> = () => {
	const [videoIndex, setVideoIndex] = useState(0);

	useEffect(() => {
		setVideoIndex(Math.ceil(Math.random() * 7));
	}, []);

	return (
		<AppPage title="Home">
			<AuthRedirect />
			<Box
				sx={{
					position: `relative`,
				}}
			>
				{videoIndex > 0 && (
					<video
						style={{
							position: `absolute`,
							top: 1,
							left: 1,
							width: `99%`,
							height: `99%`,
							objectFit: `cover`,
							filter: `brightness(0.9)`,
						}}
						src={`/bg_${videoIndex}.webm`}
						autoPlay
						loop
						muted
					/>
				)}

				<Typography
					variant="h1"
					sx={{
						position: `relative`,
						background: `white`,
						zIndex: 2,
						textAlign: `center`,
						color: `black`,
						mixBlendMode: `screen`,
						fontSize: {
							xs: `4rem !important`,
							md: `7rem !important`,
						},
						pt: 10,
						pb: 15,
						textShadow: `1px 3px 3px rgba(0,0,0,0.4)`,
					}}
				>
					The best entry system for competitions.
					<br />
					<span
						style={{ fontStyle: `normal`, filter: `saturate(0)` }}
					>
						🏆
					</span>
					<br />
					Absolutely free.
				</Typography>
			</Box>
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
