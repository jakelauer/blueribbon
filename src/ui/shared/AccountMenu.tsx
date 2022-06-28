import { useAuth0 } from '@auth0/auth0-react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { Link } from 'gatsby';
import { useState } from 'react';

interface Props {}

const AccountMenu: React.FC<Props> = () => {
	const { isAuthenticated } = useAuth0();

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
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
						<AccountMenuItems onClose={handleClose} />
					</Menu>
				</>
			)}
		</>
	);
};

interface MenuItemProps {
	onClose?: () => void;
}

export const AccountMenuItems: React.FC<MenuItemProps> = ({ onClose }) => {
	const { logout } = useAuth0();

	const onLogOut = () => {
		logout({ returnTo: window?.location?.origin ?? `/` });
		onClose?.();
	};
	return (
		<>
			<MenuItem component={Link} to={`/account`} onClick={onClose}>
				My Account
			</MenuItem>
			<MenuItem onClick={onLogOut}>Logout</MenuItem>
		</>
	);
};

export default AccountMenu;
