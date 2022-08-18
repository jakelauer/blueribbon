import { ClubLayout } from '@/ui/shared/Layouts/ClubLayout';
import { Box, BoxProps } from '@mui/material';
import { forwardRef, ReactNode } from 'react';
import { Helmet } from 'react-helmet';

// @mui
// ----------------------------------------------------------------------

interface Props extends BoxProps {
	children?: ReactNode;
	meta?: ReactNode;
	title: string;
}

const ClubPage = forwardRef<HTMLDivElement, Props>(
	({ children, title = ``, ...other }, ref) => (
		<>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<ClubLayout>
				<Box ref={ref} {...other}>
					{children}
				</Box>
			</ClubLayout>
		</>
	)
);

export default ClubPage;
