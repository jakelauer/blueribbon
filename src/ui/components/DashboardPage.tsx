import { DashboardLayout } from '@/ui/shared/Layouts/DashboardLayout';
import { Box, BoxProps } from '@mui/material';
import { forwardRef, ReactNode } from 'react';
import { Helmet } from 'react-helmet';

// @mui
// ----------------------------------------------------------------------

interface Props extends BoxProps {
	children: ReactNode;
	meta?: ReactNode;
	title: string;
}

const DashboardPage = forwardRef<HTMLDivElement, Props>(
	({ children, title = ``, ...other }, ref) => (
		<>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<DashboardLayout>
				<Box ref={ref} {...other}>
					{children}
				</Box>
			</DashboardLayout>
		</>
	),
);

export default DashboardPage;
