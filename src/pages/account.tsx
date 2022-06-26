import Page from '@/ui/components/Page';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

const Account = () => {
  const { user } = useAuth0();

  return (
    <Page title="Account">
      <p>Email: {user?.email}</p>
    </Page>
  );
};

export default withAuthenticationRequired(Account);
