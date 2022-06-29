// @mui
import palette from '@/ui/theme/palette';
import { Box, List, ListSubheader } from '@mui/material';
import { styled } from '@mui/material/styles';

import { NavSectionProps } from '../type';
import { NavListRoot } from './NavList';

// type
//
// ----------------------------------------------------------------------

export const ListSubheaderStyle = styled((props: { children: any }) => (
	<ListSubheader disableSticky disableGutters {...props} />
))(({ theme }) => ({
	...theme.typography.overline,
	paddingTop: theme.spacing(3),
	paddingLeft: theme.spacing(2),
	paddingBottom: theme.spacing(1),
	color: theme.palette.text.primary,
	transition: theme.transitions.create(`opacity`, {
		duration: theme.transitions.duration.shorter,
	}),
}));

// ----------------------------------------------------------------------

export default function NavSectionVertical({
	navConfig,
	isCollapse = false,
	...other
}: NavSectionProps) {
	return (
		<Box
			{...other}
			sx={{
				background: palette.light.background,
				borderRadius: 2,
				paddingBottom: 2,
			}}
		>
			{navConfig.map((group) => (
				<List key={group.subheader} disablePadding sx={{ px: 1 }}>
					<ListSubheaderStyle
						sx={{
							...(isCollapse && {
								opacity: 0,
							}),
						}}
					>
						{group.subheader}
					</ListSubheaderStyle>

					{group.items.map((list) => (
						<NavListRoot
							key={list.title + list.path}
							list={list}
							isCollapse={isCollapse}
						/>
					))}
				</List>
			))}
		</Box>
	);
}
