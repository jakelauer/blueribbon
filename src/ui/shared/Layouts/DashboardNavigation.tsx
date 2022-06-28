import NavSectionVertical from '@/ui/components/nav-section/vertical';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import EventIcon from '@mui/icons-material/Event';
import GroupIcon from '@mui/icons-material/Group';
import PaymentsIcon from '@mui/icons-material/Payments';
import SummarizeIcon from '@mui/icons-material/Summarize';
import { ComponentType } from 'react';

const kebabCase = (str: string) =>
	str
		.replace(/([a-z])([A-Z])/g, `$1-$2`)
		.replace(/[\s_]+/g, `-`)
		.toLowerCase();

const buildEndpoint = (title: string, Icon: ComponentType) => ({
	path: `/dashboard/${kebabCase(title)}`,
	title,
	icon: <Icon />,
});

export const DashboardNavigation = () => {
	return (
		<NavSectionVertical
			navConfig={[
				{
					subheader: `Club`,
					items: [
						buildEndpoint(`Events`, EventIcon),
						buildEndpoint(`Members`, GroupIcon),
					],
				},
				{
					subheader: `Tools`,
					items: [
						buildEndpoint(`Event Templates`, SummarizeIcon),
						buildEndpoint(`Entry Forms`, ConfirmationNumberIcon),
						buildEndpoint(`Payments`, PaymentsIcon),
					],
				},
				{
					subheader: `Personal`,
					items: [buildEndpoint(`My Account`, AccountCircleIcon)],
				},
			]}
		/>
	);
};
