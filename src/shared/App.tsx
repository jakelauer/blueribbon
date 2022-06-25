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

import { MotionLazyContainer } from '@/components/animate';
import ProgressBar from '@/components/ProgressBar';
import ThemeSettings from '@/components/settings';
import ThemeColorPresets from '@/components/settings/ThemeColorPresets';
import ThemeContrast from '@/components/settings/ThemeContrast';
import ThemeRtlLayout from '@/components/settings/ThemeRtlLayout';
import { CollapseDrawerProvider } from '@/contexts/CollapseDrawerContext';
import { SettingsProvider } from '@/contexts/SettingsContext';
import ThemeProvider from '@/theme';
import { getSettings } from '@/utils/getSettings';
import Cookies from 'js-cookie';
import React, { ReactNode } from 'react';

import { Navigation } from './Navigation';

// scroll bar
// lightbox
// map
// editor
// slick-carousel
// lazy image
// fullcalendar
interface Props {
  children: ReactNode;
}

export const App: React.FC<Props> = ({ children }) => {
  const settings = getSettings(Cookies.get());

  return (
    <ThemeColorPresets>
      <ThemeContrast>
        <ThemeRtlLayout>
          <CollapseDrawerProvider>
            <SettingsProvider defaultSettings={settings}>
              <MotionLazyContainer>
                <ThemeProvider>
                  <ThemeSettings>
                    <ProgressBar />
                    <Navigation />
                    {children}
                  </ThemeSettings>
                </ThemeProvider>
              </MotionLazyContainer>
            </SettingsProvider>
          </CollapseDrawerProvider>
        </ThemeRtlLayout>
      </ThemeContrast>
    </ThemeColorPresets>
  );
};
