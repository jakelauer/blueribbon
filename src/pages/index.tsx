import { App } from '@/components/App';
import LoginButton from '@/components/LoginButton';
import LogoutButton from '@/components/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'gatsby';
import React from 'react';

interface Props {
  data: any;
}

const Index: React.FC<Props> = () => {
  const { user } = useAuth0();

  return (
    <App>
      <h1>ShowRibbon 🎗️</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <div>
        <LoginButton />
        <LogoutButton />
        <p>
          <Link to="/account">Visit Your Account</Link>
        </p>
      </div>
    </App>
  );
};

export default Index;
