import bg1 from '@/static/bg_1.webm';
import bg2 from '@/static/bg_2.webm';
import bg3 from '@/static/bg_3.webm';
import bg4 from '@/static/bg_4.webm';
import bg5 from '@/static/bg_5.webm';
import squareLogo from '@/static/logo_square_large.png';
import AppPage from '@/ui/components/AppPage';
import { useAuth0 } from '@auth0/auth0-react';
import { Box, SxProps, Theme, Typography } from '@mui/material';
import { navigate } from 'gatsby';
import React, { useEffect, useState } from 'react';

interface Props {
	data: any;
}

const Index: React.FC<Props> = () => {
	const [videoIndex, setVideoIndex] = useState(0);

	useEffect(() => {
		setVideoIndex(Math.floor(Math.random() * 5));
	}, []);

	const videoSources = [bg1, bg2, bg3, bg4, bg5];
	const video = videoSources[videoIndex];

	const Text = (props: { sx?: SxProps<Theme> }) => (
		<Typography
			variant="h1"
			sx={{
				position: `relative`,
				background: `white`,
				zIndex: 2,
				textAlign: `center`,
				fontSize: {
					xs: `4rem !important`,
					md: `7rem !important`,
				},
				pt: 10,
				pb: 15,
				...(props.sx ?? {}),
			}}
		>
			The best entry system for competitions.
			<br />
			<br />
			Absolutely free.
		</Typography>
	);

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
							filter: `brightness(0.9) invert(1)`,
						}}
						src={video}
						autoPlay
						loop
						muted
					/>
				)}

				<Text
					sx={{
						color: `black`,
						mixBlendMode: `screen`,
					}}
				/>
				<Text
					sx={{
						position: `absolute`,
						top: 0,
						left: 0,
						color: `black`,
						mixBlendMode: `difference`,
						textShadow: `1px 3px 3px rgba(0,0,0,0.4)`,
						WebkitTextStrokeColor: `black`,
						WebkitTextStrokeWidth: 4,
						filter: `invert(1)`,
						borderRadius: 10,
					}}
				/>
			</Box>
			<Box sx={{ display: `flex`, justifyContent: `center` }}>
				<img width={200} src={squareLogo} />
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
