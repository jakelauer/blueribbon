import '@fullcalendar/common/main.min.css';
import '@fullcalendar/daygrid/main.min.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-image-lightbox/style.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-quill/dist/quill.snow.css';
import 'simplebar/src/simplebar.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { MotionLazyContainer } from '@/ui/components/animate';
import ProgressBar from '@/ui/components/ProgressBar';
import ThemeColorPresets from '@/ui/components/settings/ThemeColorPresets';
import ThemeContrast from '@/ui/components/settings/ThemeContrast';
import ThemeRtlLayout from '@/ui/components/settings/ThemeRtlLayout';
import { CollapseDrawerProvider } from '@/ui/contexts/CollapseDrawerContext';
import { SettingsProvider } from '@/ui/contexts/SettingsContext';
import { DashboardNavigation } from '@/ui/shared/Layouts/DashboardNavigation';
import ThemeProvider from '@/ui/theme';
import { getSettings } from '@/ui/utils/getSettings';
import { Container, GlobalStyles, Grid, Paper } from '@mui/material';
import Cookies from 'js-cookie';
import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';

import { AppNavigation } from './AppNavigation';

interface Props {
	children: ReactNode;
}

export const DashboardLayout: React.FC<Props> = ({ children }) => {
	return (
		<Wrapper>
			<GlobalStyles styles={{ a: { textDecoration: `none` } }} />
			<Helmet
				titleTemplate="%s | Blue Ribbon"
				defaultTitle="Blue Ribbon"
			></Helmet>
			<ProgressBar />
			<AppNavigation menuOverride={null} />
			<Container maxWidth={`xl`}>
				<Grid container spacing={2}>
					<Grid item xs={3}>
						<Paper elevation={2} sx={{ borderRadius: 3 }}>
							<DashboardNavigation />
						</Paper>
					</Grid>
					<Grid
						item
						xs={9}
						sx={{
							mt: 2,
						}}
					>
						{children}
					</Grid>
				</Grid>
			</Container>
		</Wrapper>
	);
};

const Wrapper: React.FC<Props> = ({ children }) => {
	const settings = getSettings(Cookies.get());

	return (
		<ThemeColorPresets>
			<ThemeContrast>
				<ThemeRtlLayout>
					<CollapseDrawerProvider>
						<SettingsProvider defaultSettings={settings}>
							<MotionLazyContainer>
								<ThemeProvider>{children}</ThemeProvider>
							</MotionLazyContainer>
						</SettingsProvider>
					</CollapseDrawerProvider>
				</ThemeRtlLayout>
			</ThemeContrast>
		</ThemeColorPresets>
	);
};
