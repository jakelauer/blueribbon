import { Dashboard } from '@/ui/shared/Layouts/Dashboard';
import { withAuthenticationRequired } from '@auth0/auth0-react';

const index = () => {
	return (
		<Dashboard>
			<div />
		</Dashboard>
	);
};

export default withAuthenticationRequired(index);
