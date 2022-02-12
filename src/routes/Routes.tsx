import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles } from '@material-ui/core';
import { Switch, Route, Redirect } from 'react-router';
import ProtectedRoute from '../auth/ProtectedRoute';
import Loading from '../components/common/Loading/Loading';
import routez from './routez';
import Header from '../components/common/Header/Header';
import Home from '../pages/Home/Home';

export const Routes = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const classes = useStyles();
  if (isLoading) {
    return <Loading />;
  }
  const CodeEditor = () => <div> Code Editor</div>;

  return (
    <div className={classes.main}>
      <Header />
      <div className={classes.page}>
        <Switch>
          <ProtectedRoute exact path={routez.codeEditor}>
            {CodeEditor}
          </ProtectedRoute>
          <Route exact path={routez.home}>
            {isAuthenticated ? <Redirect to={routez.codeEditor} /> : <Home />}
          </Route>
        </Switch>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  main: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  page: {
    height: '100%',
  },
}));

export default Routes;
