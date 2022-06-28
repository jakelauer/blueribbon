import { DashboardLayout } from '@/ui/shared/Layouts/DashboardLayout';
import { withAuthenticationRequired } from '@auth0/auth0-react';

const index = () => {
	return (
		<DashboardLayout>
			<div />
		</DashboardLayout>
	);
};

export default withAuthenticationRequired(index);
