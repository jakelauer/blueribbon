import logo from '@/static/logo_small.png';
import { Box, Button, Container, Toolbar } from '@mui/material';
import { Link } from 'gatsby';

export const Navigation: React.FC = () => {
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
          <Button
            component={Link}
            to={`/account`}
            sx={{ my: 2, display: `block` }}
          >
            Account
          </Button>
        </Box>
      </Toolbar>
    </Container>
  );
};
