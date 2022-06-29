import { Auth0Provider } from '@auth0/auth0-react';
import { navigate } from 'gatsby';
import React from 'react';

const onRedirectCallback = (appState) => {
  // Use Gatsby's navigate method to replace the url
  navigate(appState?.returnTo || process.env.GATSBY_AUTH0_CALLBACK_URL, { replace: true });
};

export const wrapRootElement = ({ element }) => {
  return (
    <Auth0Provider
      domain={process.env.GATSBY_AUTH0_DOMAIN}
      clientId={process.env.GATSBY_AUTH0_CLIENTID}
      redirectUri={process.env.GATSBY_AUTH0_CALLBACK_URL}
      onRedirectCallback={onRedirectCallback}
    >
      {element}
    </Auth0Provider>
  );
};
