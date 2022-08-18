import { ClubLayout } from "@/ui/shared/Layouts/ClubLayout";
import { withAuthenticationRequired } from "@auth0/auth0-react";

const index = () =>
{
	return (
		<ClubLayout>
			<div />
		</ClubLayout>
	);
};

export default withAuthenticationRequired(index);
