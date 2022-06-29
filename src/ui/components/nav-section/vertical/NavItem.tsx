// next
// @mui
import { Box, ListItemText, Tooltip, Typography } from '@mui/material';
import { Link } from 'gatsby';

import { isExternalLink } from '..';
import Iconify from '../../Iconify';
import { NavItemProps } from '../type';
import {
	ListItemIconStyle,
	ListItemStyle as ListItem,
	ListItemTextStyle,
} from './style';

// type
//
// ----------------------------------------------------------------------

export function NavItemRoot({
	item,
	isCollapse,
	open = false,
	active,
	onOpen,
}: NavItemProps) {
	const { title, path, icon, info, children, disabled, caption, roles } =
		item;

	const renderContent = (
		<>
			{icon && <ListItemIconStyle>{icon}</ListItemIconStyle>}
			<ListItemTextStyle
				disableTypography
				primary={title}
				secondary={
					<Tooltip title={caption || ``} arrow>
						<Typography
							noWrap
							variant="caption"
							component="div"
							sx={{
								textTransform: `initial`,
								color: `text.secondary`,
							}}
						>
							{caption}
						</Typography>
					</Tooltip>
				}
				isCollapse={isCollapse}
			/>
			{!isCollapse && (
				<>
					{info && info}
					{children && <ArrowIcon open={open} />}
				</>
			)}
		</>
	);

	if (children) {
		return (
			<ListItem
				onClick={onOpen}
				activeRoot={active}
				disabled={disabled}
				roles={roles}
			>
				{renderContent}
			</ListItem>
		);
	}

	return isExternalLink(path) ? (
		<ListItem
			href={path}
			target="_blank"
			rel="noopener"
			disabled={disabled}
			roles={roles}
		>
			{renderContent}
		</ListItem>
	) : (
		<Link to={path}>
			<ListItem activeRoot={active} disabled={disabled} roles={roles}>
				{renderContent}
			</ListItem>
		</Link>
	);
}

// ----------------------------------------------------------------------

type NavItemSubProps = Omit<NavItemProps, 'isCollapse'>;

export function NavItemSub({
	item,
	open = false,
	active = false,
	onOpen,
}: NavItemSubProps) {
	const { title, path, info, children, disabled, caption, roles } = item;

	const renderContent = (
		<>
			<DotIcon active={active} />
			<ListItemText
				disableTypography
				primary={title}
				secondary={
					<Tooltip title={caption || ``} arrow>
						<Typography
							noWrap
							variant="caption"
							component="div"
							sx={{
								textTransform: `initial`,
								color: `text.secondary`,
							}}
						>
							{caption}
						</Typography>
					</Tooltip>
				}
			/>
			{info && info}
			{children && <ArrowIcon open={open} />}
		</>
	);

	if (children) {
		return (
			<ListItem
				onClick={onOpen}
				activeSub={active}
				subItem
				disabled={disabled}
				roles={roles}
			>
				{renderContent}
			</ListItem>
		);
	}

	return isExternalLink(path) ? (
		<ListItem
			href={path}
			target="_blank"
			rel="noopener"
			subItem
			disabled={disabled}
			roles={roles}
		>
			{renderContent}
		</ListItem>
	) : (
		<Link to={path}>
			<ListItem
				activeSub={active}
				subItem
				disabled={disabled}
				roles={roles}
			>
				{renderContent}
			</ListItem>
		</Link>
	);
}

// ----------------------------------------------------------------------

type DotIconProps = {
	active: boolean;
};

export function DotIcon({ active }: DotIconProps) {
	return (
		<ListItemIconStyle>
			<Box
				component="span"
				sx={{
					width: 4,
					height: 4,
					borderRadius: `50%`,
					bgcolor: `text.disabled`,
					transition: (theme) =>
						theme.transitions.create(`transform`, {
							duration: theme.transitions.duration.shorter,
						}),
					...(active && {
						transform: `scale(2)`,
						bgcolor: `primary.main`,
					}),
				}}
			/>
		</ListItemIconStyle>
	);
}

// ----------------------------------------------------------------------

type ArrowIconProps = {
	open: boolean;
};

export function ArrowIcon({ open }: ArrowIconProps) {
	return (
		<Iconify
			icon={
				open
					? `eva:arrow-ios-downward-fill`
					: `eva:arrow-ios-forward-fill`
			}
			sx={{ width: 16, height: 16, ml: 1 }}
		/>
	);
}
