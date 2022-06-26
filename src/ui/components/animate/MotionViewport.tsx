import useResponsive from '@/ui/hooks/useResponsive';
import { Box, BoxProps } from '@mui/material';
import { m, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';

import { varContainer } from '.';

// @mui
// hooks
//
// ----------------------------------------------------------------------

type IProps = BoxProps & MotionProps;

interface Props extends IProps {
  children: ReactNode;
  disableAnimatedMobile?: boolean;
}

export default function MotionViewport({
  children,
  disableAnimatedMobile = true,
  ...other
}: Props) {
  const isDesktop = useResponsive(`up`, `sm`);

  if (!isDesktop && disableAnimatedMobile) {
    return <Box {...other}>{children}</Box>;
  }

  return (
    <Box
      component={m.div}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={varContainer()}
      {...other}
    >
      {children}
    </Box>
  );
}
