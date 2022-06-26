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
import ThemeProvider from '@/ui/theme';
import { getSettings } from '@/ui/utils/getSettings';
import { useAuth0 } from '@auth0/auth0-react';
import { Container } from '@mui/material';
import { navigate } from 'gatsby';
import Cookies from 'js-cookie';
import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';

import { AppNavigation } from './AppNavigation';

interface Props {
	children: ReactNode;
}

export const App: React.FC<Props> = ({ children }) => {
	return (
		<Wrapper>
			<Helmet
				titleTemplate="%s | Blue Ribbon"
				defaultTitle="Blue Ribbon"
			></Helmet>
			<ProgressBar />
			<AppNavigation />
			<Container maxWidth={`xl`}>{children}</Container>
		</Wrapper>
	);
};

const Wrapper: React.FC<Props> = ({ children }) => {
	const { isAuthenticated } = useAuth0();

	if (isAuthenticated) {
		navigate(`/dashboard`);

		return null;
	}

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
