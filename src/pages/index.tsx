import Page from '@/components/Page';
import LoginButton from '@/shared/LoginButton';
import LogoutButton from '@/shared/LogoutButton';
import { Link } from 'gatsby';
import React from 'react';

interface Props {
  data: any;
}

const Index: React.FC<Props> = () => {
  return (
    <Page title="Account">
      <div>
        <LoginButton />
        <LogoutButton />
        <p>
          <Link to="/account">Visit Your Account</Link>
        </p>
      </div>
    </Page>
  );
};

export default Index;
