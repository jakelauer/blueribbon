import { Box, BoxProps } from '@mui/material';
import { forwardRef, ReactNode } from 'react';

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
      <h1>{title}</h1>
      <Box ref={ref} {...other}>
        {children}
      </Box>
    </>
  ),
);

export default Page;
