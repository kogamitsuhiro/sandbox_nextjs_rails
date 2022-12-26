import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const RedirectToLogin: React.FC = () => {
  const { loginWithRedirect } = useAuth0();
  loginWithRedirect();
  return <></>;
};

export default function withPageAuthRequired(Component) {
  const WrapComponent = (props) => {
    const { isAuthenticated, isLoading } = useAuth0();

    return (
      <>
        {isAuthenticated ? (
          <Component {...props} />
        ) : isLoading ? (
          <div>Loading...</div>
        ) : (
          <RedirectToLogin />
        )}
      </>
    );
  };

  return WrapComponent;
}
