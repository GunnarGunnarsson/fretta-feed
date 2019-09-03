import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Navigation from '../components/Navigation/';
import routes from '../routes';
import theme from '../modules/theme';

const Routes = props => (
  <Grid container>
    <Navigation />
    <Switch>
      {routes.map(({ exact, path, component }, i) => (
        <Route exact={exact} path={path} component={component} key={i} />
      ))}
      <Redirect to="/404" />
    </Switch>
  </Grid>
);

export default withStyles(theme)(Routes);
