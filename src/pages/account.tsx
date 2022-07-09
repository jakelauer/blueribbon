import DashboardPage from '@/ui/components/DashboardPage';
import { AutoForm } from '@/ui/shared/Forms/AutoForm';
import { withAuthenticationRequired } from '@auth0/auth0-react';

import { UserForm } from '../contracts/forms/UserForm';

const form = new UserForm();

const Account = () => {
	return (
		<DashboardPage title="Account">
			<AutoForm title={`Account`} formSchema={form.getFormMetadata()} />
		</DashboardPage>
	);
};

export default withAuthenticationRequired(Account);
