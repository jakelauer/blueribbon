import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';
import React from 'react';

const LoginButton: React.FC = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <>
      {!isAuthenticated && (
        <Button
          variant="contained"
          onClick={() => loginWithRedirect()}
          sx={{ marginLeft: `10px` }}
        >
          Log in
        </Button>
      )}
    </>
  );
};

export default LoginButton;
