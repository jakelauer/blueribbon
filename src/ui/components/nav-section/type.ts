import { BoxProps } from "@mui/material";
import { ReactElement } from "react";

// ----------------------------------------------------------------------

export type NavListProps = {
	title: string;
	path: string;
	icon?: ReactElement;
	info?: ReactElement;
	caption?: string;
	disabled?: boolean;
	roles?: string[];
	children?: {
		title: string;
		path: string;
		children?: { title: string; path: string }[];
	}[];
};

export type NavItemProps = {
	item: NavListProps;
	isCollapse?: boolean;
	active?: boolean | undefined;
	open?: boolean;
	onOpen?: () => void;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
};

export interface NavSectionProps extends BoxProps {
	isCollapse?: boolean;
	navConfig: {
		subheader: string;
		items: NavListProps[];
	}[];
}
