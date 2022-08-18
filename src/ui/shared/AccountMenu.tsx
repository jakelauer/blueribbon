import { useAuth0 } from "@auth0/auth0-react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import {
	Divider,
	IconButton,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem
} from "@mui/material";
import { Link } from "gatsby";
import { useState } from "react";

interface Props {}

const AccountMenu: React.FC<Props> = () =>
{
	const { isAuthenticated } = useAuth0();

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLElement>) =>
	{
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () =>
	{
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
						  horizontal: `right`
						}}
						transformOrigin={{
						  vertical: `top`,
						  horizontal: `right`
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

export const AccountMenuItems: React.FC<MenuItemProps> = ({ onClose }) =>
{
	const { logout } = useAuth0();

	const onLogOut = () =>
	{
		logout({
			returnTo: window?.location?.origin ?? `/`
		});
		onClose?.();
	};

	const userOwnsClub = false;

	return (
		<>
			{userOwnsClub
			  ? (
					<MenuItem component={Link} to={`/club`} onClick={onClose}>
						<ListItemIcon>
							<DashboardIcon />
						</ListItemIcon>
						<ListItemText>Club Dashboard</ListItemText>
					</MenuItem>
			    )
			  : (
					<MenuItem
						component={Link}
						to={`/club/create`}
						onClick={onClose}
					>
						<ListItemIcon>
							<AddCircleIcon />
						</ListItemIcon>
						<ListItemText>Create a Club</ListItemText>
					</MenuItem>
			    )}
			<Divider />
			<MenuItem component={Link} to={`/account`} onClick={onClose}>
				<ListItemIcon>
					<AccountCircleIcon />
				</ListItemIcon>
				<ListItemText>My Account</ListItemText>
			</MenuItem>
			<Divider />
			<MenuItem onClick={onLogOut}>
				<ListItemIcon>
					<LogoutIcon />
				</ListItemIcon>
				<ListItemText>Logout</ListItemText>
			</MenuItem>
		</>
	);
};

export default AccountMenu;
