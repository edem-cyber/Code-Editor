import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles } from '@material-ui/core';
import { Switch, Route, Redirect } from 'react-router';
import ProtectedRoute from '../auth/ProtectedRoute';
import Loading from '../components/common/Loading/Loading';
import routez from './routez';

const useStyles = makeStyles(() => ({
  main: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  page: {
    height: '100%',
  },
}));

export const Routes = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const classes = useStyles();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="classes.main">
      <div>Header</div>
      <div className="classes.page">
        <Switch>
          <ProtectedRoute exact path={routez.codeEditor} component={<div>Code editor</div>} />
          <Route exact path={routez.home}>
            {isAuthenticated ? <Redirect to={routez.codeEditor} /> : <div>Home</div>}
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Routes;
