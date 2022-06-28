import DashboardPage from '@/ui/components/DashboardPage';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

const Account = () => {
	const { user } = useAuth0();

	return (
		<DashboardPage title="Account">
			<p>Email: {user?.email}</p>
		</DashboardPage>
	);
};

export default withAuthenticationRequired(Account);
