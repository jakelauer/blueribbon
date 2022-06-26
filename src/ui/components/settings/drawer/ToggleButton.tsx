import { Tooltip } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

import cssStyles from '@/ui/utils/cssStyles';
import { IconButtonAnimate } from '../../animate';
import Iconify from '../../Iconify';

// @mui
// utils
//
// ----------------------------------------------------------------------

const RootStyle = styled(`span`)(({ theme }) => ({
  ...cssStyles(theme).bgBlur({ opacity: 0.64 }),
  right: 0,
  top: `50%`,
  position: `fixed`,
  marginTop: theme.spacing(-3),
  padding: theme.spacing(0.5),
  zIndex: theme.zIndex.drawer + 2,
  borderRadius: `24px 0 20px 24px`,
  boxShadow: `-12px 12px 32px -4px ${alpha(
    theme.palette.mode === `light`
      ? theme.palette.grey[600]
      : theme.palette.common.black,
    0.36,
  )}`,
}));

const DotStyle = styled(`span`)(({ theme }) => ({
  top: 8,
  width: 8,
  height: 8,
  right: 10,
  borderRadius: `50%`,
  position: `absolute`,
  backgroundColor: theme.palette.error.main,
}));

// ----------------------------------------------------------------------

type Props = {
  open: boolean;
  notDefault: boolean;
  onToggle: () => void;
};

export default function ToggleButton({ notDefault, open, onToggle }: Props) {
  return (
    <RootStyle>
      {notDefault && !open && <DotStyle />}

      <Tooltip title="Settings" placement="left">
        <IconButtonAnimate
          color="inherit"
          onClick={onToggle}
          sx={{
            p: 1.25,
            transition: (theme) => theme.transitions.create(`all`),
            '&:hover': {
              color: `primary.main`,
              bgcolor: (theme) =>
                alpha(
                  theme.palette.primary.main,
                  theme.palette.action.hoverOpacity,
                ),
            },
          }}
        >
          <Iconify icon="eva:options-2-fill" width={20} height={20} />
        </IconButtonAnimate>
      </Tooltip>
    </RootStyle>
  );
}
