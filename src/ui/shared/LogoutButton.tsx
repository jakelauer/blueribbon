import { useAuth0 } from '@auth0/auth0-react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { Link } from 'gatsby';
import { useState } from 'react';

function LogoutButton() {
	const { isAuthenticated, logout } = useAuth0();

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const onLogOut = () => {
		logout({ returnTo: window?.location?.origin ?? "/" });
		handleClose();
	};

	return (
		<>
			{isAuthenticated && (
				<>
					<IconButton color="primary" onClick={handleClick}>
						<AccountCircleIcon />
					</IconButton>
					<Menu
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						anchorOrigin={{
							vertical: `bottom`,
							horizontal: `right`,
						}}
						transformOrigin={{
							vertical: `top`,
							horizontal: `right`,
						}}
					>
						<MenuItem
							component={Link}
							to={`/account`}
							onClick={handleClose}
						>
							My Account
						</MenuItem>
						<MenuItem onClick={onLogOut}>Logout</MenuItem>
					</Menu>
				</>
			)}
		</>
	);
}

export default LogoutButton;
