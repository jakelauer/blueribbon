import { ClubForm } from '@/contracts/forms/ClubForm';
import AppPage from '@/ui/shared/AppPage';
import { AutoForm } from '@/ui/shared/Forms/AutoForm';

const form = new ClubForm();

export default function Index() {
	return (
		<AppPage title={`Create a club`}>
			<AutoForm
				groupStepper
				title={`Create Club`}
				formSchema={form.getFormMetadata()}
			></AutoForm>
		</AppPage>
	);
}
