import { Auth0Provider } from '@auth0/auth0-react';
import { navigate } from 'gatsby';
import React from 'react';

import { App } from './src/ui/shared/App';

const onRedirectCallback = (appState) => {
  // Use Gatsby's navigate method to replace the url
  navigate(appState?.returnTo || '/', { replace: true });
};

export const wrapRootElement = ({ element }) => {
  return (
    <Auth0Provider
      domain={process.env.GATSBY_AUTH0_DOMAIN}
      clientId={process.env.GATSBY_AUTH0_CLIENTID}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {element}
    </Auth0Provider>
  );
};

export const wrapPageElement = ({ element }) => {
  if (element.type.name.startsWith('Error')) {
    return element;
  }
  return <App>{element}</App>;
};
