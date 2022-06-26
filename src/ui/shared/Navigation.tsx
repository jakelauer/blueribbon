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
      to: `/howitworks`,
      label: `How It Works`,
    },
    {
      to: `/events`,
      label: `Events`,
    },
    {
      to: `/pricing`,
      label: `Pricing`,
    },
  ];

  return (
    <Container maxWidth={`xl`}>
      <Toolbar disableGutters>
        <Link to="/">
          <img height={60} src={logo} alt="Show Ribbon" />
        </Link>

        <Box
          sx={{
            justifyContent: `flex-end`,
            flexGrow: 1,
            display: { xs: `none`, md: `flex` },
            alignItems: `center`,
          }}
        >
          {links.map((link, i) => (
            <Button
              key={i}
              component={Link}
              to={link.to}
              sx={{ my: 2, mx: 1, display: `block`, alignSelf: `flex-start` }}
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
