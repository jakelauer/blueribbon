import { DashboardNavigation } from '@/ui/shared/Layouts/ClubNavigation';
import { Grid, Paper } from '@mui/material';
import React, { ReactNode } from 'react';

import { UserLayout } from './UserLayout';

interface Props {
	children: ReactNode;
}

export const ClubLayout: React.FC<Props> = ({ children }) => {
	return (
		<UserLayout>
			<Grid item xs={3}>
				<Paper elevation={2} sx={{ borderRadius: 3 }}>
					<DashboardNavigation />
				</Paper>
			</Grid>
			<Grid
				item
				xs={9}
				sx={{
					mt: 2,
				}}
			>
				{children}
			</Grid>
		</UserLayout>
	);
};
