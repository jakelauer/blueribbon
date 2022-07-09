import { renderRichText } from '@/render-rich-text';
import squareLogo from '@/static/logo_square_large.png';
import AppPage from '@/ui/components/AppPage';
import { useAuth0 } from '@auth0/auth0-react';
import { Box, SxProps, Theme, Typography } from '@mui/material';
import { graphql, navigate } from 'gatsby';
import React, { useEffect, useState } from 'react';

import { HomeDataQuery } from '../../graphql-types';

interface Props {
	data: HomeDataQuery;
}

const Index: React.FC<Props> = ({ data }) => {
	const [videoIndex, setVideoIndex] = useState(0);

	const videos =
		data?.contentfulHomePage?.backgroundVideos?.map((a) => a?.publicUrl) ??
		[];

	useEffect(() => {
		setVideoIndex(Math.floor(Math.random() * videos.length));
	}, [videos.length]);

	const video = videos[videoIndex];

	console.log(videos);

	const VideoText = (props: { sx?: SxProps<Theme> }) =>
		data.contentfulHomePage?.hero ? (
			<Typography
				variant="h1"
				sx={{
					position: `relative`,
					background: `white`,
					zIndex: 2,
					textAlign: `center`,
					fontSize: {
						xs: `12rem !important`,
						md: `18rem !important`,
					},
					pt: 10,
					pb: 15,
					...(props.sx ?? {}),
				}}
			>
				{renderRichText(data.contentfulHomePage?.hero)}
			</Typography>
		) : null;

	return (
		<AppPage title="Home">
			<AuthRedirect />

			{data.contentfulHomePage?.preHero ? (
				<Typography
					variant="h1"
					sx={{
						position: `relative`,
						fontWeight: 100,
						zIndex: 2,
						textAlign: `center`,
						pt: 10,
					}}
				>
					{renderRichText(data.contentfulHomePage?.preHero)}
				</Typography>
			) : null}
			<Box
				sx={{
					position: `relative`,
				}}
			>
				{video && (
					<video
						style={{
							position: `absolute`,
							top: 1,
							left: 1,
							width: `calc(100% - 2px)`,
							height: `calc(100% - 2px)`,
							objectFit: `cover`,
							filter: `brightness(0.9) invert(1)`,
						}}
						src={video}
						autoPlay
						loop
						muted
					/>
				)}

				<VideoText
					sx={{
						color: `black`,
						mixBlendMode: `screen`,
					}}
				/>

				<VideoText
					sx={{
						position: `absolute`,
						width: `100%`,
						top: 0,
						left: 0,
						color: `black`,
						mixBlendMode: `difference`,
						textShadow: `0.1rem 0.5rem 0.5rem rgba(0,0,0,0.4)`,
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

export const query = graphql`
	query HomeData {
		contentfulHomePage {
			preHero {
				raw
			}
			hero {
				raw
			}
			backgroundVideos {
				publicUrl
			}
		}
	}
`;

export default Index;
