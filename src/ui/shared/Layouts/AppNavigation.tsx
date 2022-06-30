import logo from '@/static/logo_small.png';
import useResponsive from '@/ui/hooks/useResponsive';
import EventIcon from '@mui/icons-material/Event';
import FeedIcon from '@mui/icons-material/Feed';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import MenuIcon from '@mui/icons-material/Menu';
import {
	Box,
	Button,
	Container,
	Divider,
	Drawer,
	IconButton,
	Toolbar,
} from '@mui/material';
import { Link } from 'gatsby';
import { ReactNode, useState } from 'react';

import AccountMenu from '../AccountMenu';
import { GetStartedButton, LoginButton } from '../LoginButton';

interface LinkItem {
	to: string;
	label: string;
	icon?: ReactNode;
}

interface Props {
	menuOverride?: ReactNode;
	showBorder?: boolean;
}

export const AppNavigation: React.FC<Props> = ({ menuOverride }) => {
	const isDesktop = useResponsive(`up`, `md`);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);

	return (
		<Container maxWidth={`xl`} sx={{ my: 2 }}>
			<Toolbar disableGutters>
				<Box>
					<Link to="/">
						<img height={60} src={logo} alt="Show Ribbon" />
					</Link>
				</Box>

				{!isDesktop && (
					<Box
						sx={{
							justifyContent: `flex-end`,
							flexGrow: 1,
							display: `flex`,
							alignItems: `center`,
						}}
					>
						<IconButton onClick={handleClick}>
							<MenuIcon />
						</IconButton>
						<GetStartedButton />
						<AccountMenu />
					</Box>
				)}

				{isDesktop && <Contents menuOverride={menuOverride} />}
				{!isDesktop && (
					<Drawer
						anchor={`right`}
						open={open}
						onClose={handleClose}
						PaperProps={{
							sx: {
								minWidth: `50vw`,
							},
						}}
					>
						<Contents menuOverride={menuOverride} />
					</Drawer>
				)}
			</Toolbar>
		</Container>
	);
};

const Contents: React.FC<Props> = ({ menuOverride }) => {
	const isDesktop = useResponsive(`up`, `md`);

	const override = menuOverride !== undefined;

	const links: LinkItem[] = [
		{
			to: `/how-it-works`,
			label: `How It Works`,
			icon: <FeedIcon />,
		},
		{
			to: `/events`,
			label: `Events`,
			icon: <EventIcon />,
		},
		{
			to: `/pricing`,
			label: `Pricing`,
			icon: <LocalOfferIcon />,
		},
	];

	return (
		<Box
			sx={{
				justifyContent: `flex-end`,
				flexGrow: 1,
				display: { md: `flex` },
				alignItems: `center`,
			}}
		>
			{!override &&
				links.map((link, i) => (
					<Button
						key={i}
						component={Link}
						to={link.to}
						startIcon={link.icon}
						sx={{
							display: `flex`,
							my: 2,
							mx: 1,
							alignSelf: `flex-start`,
							justifyContent: `flex-start`,
						}}
					>
						{link.label}
					</Button>
				))}

			{isDesktop && (
				<>
					<Divider orientation="vertical" />
					<LoginButton />
					<GetStartedButton />
					<AccountMenu />
				</>
			)}
		</Box>
	);
};
