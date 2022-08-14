import { UserForm } from "@/contracts/forms/UserForm";
import { AutoForm } from "@/ui/shared/Forms/AutoForm";
import UserPage from "@/ui/shared/UserPage";
import { withAuthenticationRequired } from "@auth0/auth0-react";

const form = new UserForm();

const Account = () => {
	return (
		<UserPage title="Account">
			<AutoForm title={`Account`} formSchema={form.getFormMetadata()} />
		</UserPage>
	);
};

export default withAuthenticationRequired(Account);
