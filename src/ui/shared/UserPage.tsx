import { Box, BoxProps } from '@mui/material';
import { forwardRef, ReactNode } from 'react';
import { Helmet } from 'react-helmet';

import { UserLayout } from './Layouts/UserLayout';

// @mui
// ----------------------------------------------------------------------

interface Props extends BoxProps {
	children: ReactNode;
	meta?: ReactNode;
	title: string;
}

const UserPage = forwardRef<HTMLDivElement, Props>(
	({ children, title = ``, ...other }, ref) => (
		<>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<UserLayout>
				<Box ref={ref} {...other} sx={{ flex: 1 }}>
					{children}
				</Box>
			</UserLayout>
		</>
	),
);

export default UserPage;
