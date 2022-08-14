import { AppLayout } from "@/ui/shared/Layouts/AppLayout";
import { Box, BoxProps } from "@mui/material";
import { forwardRef, ReactNode } from "react";
import { Helmet } from "react-helmet";

// @mui
// ----------------------------------------------------------------------

interface Props extends BoxProps {
	children: ReactNode;
	meta?: ReactNode;
	title: string;
}

const AppPage = forwardRef<HTMLDivElement, Props>(({ children, title = ``, ...other }, ref) => (
	<>
		<Helmet>
			<title>{title}</title>
		</Helmet>
		<AppLayout>
			<Box ref={ref} {...other}>
				{children}
			</Box>
		</AppLayout>
	</>
));

export default AppPage;
