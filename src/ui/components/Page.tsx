import { Box, BoxProps } from '@mui/material';
import { forwardRef, ReactNode } from 'react';
import { Helmet } from 'react-helmet';

// @mui
// ----------------------------------------------------------------------

interface Props extends BoxProps {
  children: ReactNode;
  meta?: ReactNode;
  title: string;
}

const Page = forwardRef<HTMLDivElement, Props>(
  ({ children, title = ``, ...other }, ref) => (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Box ref={ref} {...other}>
        {children}
      </Box>
    </>
  ),
);

export default Page;
