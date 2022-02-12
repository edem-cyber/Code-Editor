import { useAuth0 } from '@auth0/auth0-react';
import { Button, makeStyles } from '@material-ui/core';
import { commonColors } from '../theme/colors';
import { AuthButton } from './AuthButtons';

const SignOut = () => {
  const { logout } = useAuth0();
  const onSignOut = () => {
    logout({
      returnTo: window.location.origin,
    });
  };
  return (
    <AuthButton onClick={onSignOut}>
      Sign Out
    </AuthButton>
  );
};

export default SignOut;
