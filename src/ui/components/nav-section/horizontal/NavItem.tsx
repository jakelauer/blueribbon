import { ReactElement, forwardRef } from 'react';
// next
// @mui
import { Box } from '@mui/material';
// config
import { ICON } from '@/config';
// type
import { NavItemProps } from '../type';
//
import Iconify from '../../Iconify';
import { ListItemStyle as ListItem } from './style';
import { isExternalLink } from '..';
import { Link } from 'gatsby';

// ----------------------------------------------------------------------

export const NavItemRoot = forwardRef<
  HTMLButtonElement & HTMLAnchorElement,
  NavItemProps
>(({ item, active, open, onMouseEnter, onMouseLeave }, ref) => {
  const { title, path, icon, children, disabled, roles } = item;

  if (children) {
    return (
      <ListItem
        ref={ref}
        open={open}
        activeRoot={active}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        disabled={disabled}
        roles={roles}
      >
        <NavItemContent icon={icon} title={title} children={children} />
      </ListItem>
    );
  }

  return isExternalLink(path) ? (
    <ListItem
      href={path}
      target="_blank"
      rel="noopener"
      disabled={disabled}
      roles={roles}
    >
      <NavItemContent icon={icon} title={title} children={children} />
    </ListItem>
  ) : (
    <Link to={path}>
      <ListItem activeRoot={active} disabled={disabled} roles={roles}>
        <NavItemContent icon={icon} title={title} children={children} />
      </ListItem>
    </Link>
  );
});

// ----------------------------------------------------------------------

export const NavItemSub = forwardRef<
  HTMLButtonElement & HTMLAnchorElement,
  NavItemProps
>(({ item, active, open, onMouseEnter, onMouseLeave }, ref) => {
  const { title, path, icon, children, disabled, roles } = item;

  if (children) {
    return (
      <ListItem
        ref={ref}
        subItem
        disableRipple
        open={open}
        activeSub={active}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        disabled={disabled}
        roles={roles}
      >
        <NavItemContent icon={icon} title={title} children={children} subItem />
      </ListItem>
    );
  }

  return isExternalLink(path) ? (
    <ListItem
      subItem
      href={path}
      disableRipple
      rel="noopener"
      target="_blank"
      disabled={disabled}
      roles={roles}
    >
      <NavItemContent icon={icon} title={title} children={children} subItem />
    </ListItem>
  ) : (
    <Link to={path} passHref>
      <ListItem
        disableRipple
        activeSub={active}
        subItem
        disabled={disabled}
        roles={roles}
      >
        <NavItemContent icon={icon} title={title} children={children} subItem />
      </ListItem>
    </Link>
  );
});

// ----------------------------------------------------------------------

type NavItemContentProps = {
  title: string;
  icon?: ReactElement;
  children?: { title: string; path: string }[];
  subItem?: boolean;
};

function NavItemContent({
  icon,
  title,
  children,
  subItem,
}: NavItemContentProps) {
  return (
    <>
      {icon && (
        <Box
          component="span"
          sx={{
            mr: 1,
            width: ICON.NAVBAR_ITEM_HORIZONTAL,
            height: ICON.NAVBAR_ITEM_HORIZONTAL,
            '& svg': { width: `100%`, height: `100%` },
          }}
        >
          {icon}
        </Box>
      )}

      {title}

      {children && (
        <Iconify
          icon={subItem ? `eva:chevron-right-fill` : `eva:chevron-down-fill`}
          sx={{
            ml: 0.5,
            width: ICON.NAVBAR_ITEM_HORIZONTAL,
            height: ICON.NAVBAR_ITEM_HORIZONTAL,
          }}
        />
      )}
    </>
  );
}
