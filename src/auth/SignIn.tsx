import { useAuth0 } from '@auth0/auth0-react';
import { Button, styled } from '@material-ui/core';
import { AuthButton } from './AuthButtons';

const SignIn = () => {
  const { loginWithPopup } = useAuth0();
  // const classes = useStyles();
  const onSignIn = () => {
    loginWithPopup();
  };
  return (
    <AuthButton onClick={onSignIn}>
      Sign In
    </AuthButton>
  );
};




export default SignIn;
