import logo from '@/static/logo_small.png';
import { Box, Button, Container, Toolbar } from '@mui/material';
import { Link } from 'gatsby';

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

interface LinkItem {
  to: string;
  label: string;
}

export const Navigation: React.FC = () => {
  const links: LinkItem[] = [
    {
      to: `/`,
      label: `Home`,
    },
    {
      to: `/account`,
      label: `Account`,
    },
  ];

  return (
    <Container maxWidth={false}>
      <Toolbar disableGutters>
        <img height={40} src={logo} alt="Show Ribbon" />

        <Box
          sx={{
            justifyContent: `flex-end`,
            flexGrow: 1,
            display: { xs: `none`, md: `flex` },
          }}
        >
          {links.map((link, i) => (
            <Button
              key={i}
              component={Link}
              to={link.to}
              sx={{ my: 2, display: `block` }}
            >
              {link.label}
            </Button>
          ))}

          <LoginButton />
          <LogoutButton />
        </Box>
      </Toolbar>
    </Container>
  );
};
