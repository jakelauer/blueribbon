import NavSectionVertical from "@/ui/components/nav-section/vertical";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import EventIcon from "@mui/icons-material/Event";
import GroupIcon from "@mui/icons-material/Group";
import PaymentsIcon from "@mui/icons-material/Payments";
import SettingsIcon from "@mui/icons-material/Settings";
import SummarizeIcon from "@mui/icons-material/Summarize";
import { ComponentType } from "react";

const kebabCase = (str: string) =>
	str
		.replace(/([a-z])([A-Z])/g, `$1-$2`)
		.replace(/[\s_]+/g, `-`)
		.toLowerCase();

interface Endpoint {
	title: string;
	Icon: ComponentType;
	caption?: string;
}

const buildEndpoint = ({ title, Icon, caption }: Endpoint) => ({
	path: `/club/${kebabCase(title)}`,
	title,
	caption,
	icon: <Icon />,
});

export const DashboardNavigation = () => {
	return (
		<NavSectionVertical
			navConfig={[
				{
					subheader: `Club`,
					items: [
						buildEndpoint({
							title: `Events`,
							Icon: EventIcon,
						}),
						buildEndpoint({ title: `Members`, Icon: GroupIcon }),
						buildEndpoint({
							title: `Settings`,
							Icon: SettingsIcon,
						}),
					],
				},
				{
					subheader: `Tools`,
					items: [
						buildEndpoint({
							title: `Event Templates`,
							Icon: SummarizeIcon,
						}),
						buildEndpoint({
							title: `Entry Forms`,
							Icon: ConfirmationNumberIcon,
						}),
						buildEndpoint({
							title: `Payments`,
							Icon: PaymentsIcon,
						}),
					],
				},
			]}
		/>
	);
};
