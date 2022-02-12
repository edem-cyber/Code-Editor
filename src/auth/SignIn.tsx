import { useAuth0 } from '@auth0/auth0-react';
import { Button, makeStyles } from '@material-ui/core';
import { commonColors } from '../theme/colors';

const SignIn = () => {
  const { loginWithPopup } = useAuth0();
  const classes = useStyles();
  const onSignIn = () => {
    loginWithPopup();
  };
  return (
    <Button onClick={onSignIn} className={classes.button}>
      Sign In
    </Button>
  );
};

const useStyles = makeStyles(() => ({
  button: {
    color: commonColors.white,
  },
}));

export default SignIn;
