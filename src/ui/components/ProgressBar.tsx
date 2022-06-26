import GlobalStyles from '@mui/material/GlobalStyles';
import { useTheme } from '@mui/material/styles';
import { globalHistory, HistoryListener } from '@reach/router';
import NProgress from 'nprogress';
import { useEffect } from 'react';

// next
// @mui
// ----------------------------------------------------------------------

export default function ProgressBar() {
  const theme = useTheme();

  NProgress.configure({ showSpinner: false });

  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
      checkFinish();
    };
    const handleStop = () => {
      NProgress.done();
    };

    const checkFinish = () => {
      if (!globalHistory.transitioning) {
        handleStop();
        return;
      }
      requestAnimationFrame(checkFinish);
    };

    const listener: HistoryListener = ({ action }) => {
      switch (action) {
        case `POP`:
        case `PUSH`:
          handleStart();
          break;
      }
    };

    return globalHistory.listen(listener);
  }, []);

  return (
    <GlobalStyles
      styles={{
        '#nprogress': {
          pointerEvents: `none`,
          '& .bar': {
            top: 0,
            left: 0,
            height: 2,
            width: `100%`,
            position: `fixed`,
            zIndex: theme.zIndex.snackbar,
            backgroundColor: theme.palette.primary.main,
            boxShadow: `0 0 2px ${theme.palette.primary.main}`,
          },
          '& .peg': {
            right: 0,
            opacity: 1,
            width: 100,
            height: `100%`,
            display: `block`,
            position: `absolute`,
            transform: `rotate(3deg) translate(0px, -4px)`,
            boxShadow: `0 0 10px ${theme.palette.primary.main}, 0 0 5px ${theme.palette.primary.main}`,
          },
        },
      }}
    />
  );
}
