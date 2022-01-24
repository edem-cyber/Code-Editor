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
    <Button className={classes.button} onClick={onSignIn}>
      Sign In
    </Button>
  );
};

const useStyles = makeStyles(() => ({
  button: {
    colors: commonColors.white,
  },
}));

export default SignIn;
