import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';
import DashboardPageContainer from '../containers/DashboardPageContainer';
import ResetPasswordPage from '../pages/ResetPasswordPage';
import SettingsPage from '../pages/SettingsPage';
import ProfilePage from '../pages/ProfilePage';
import LogoutPageContainer from '../containers/LogoutPageContainer';
import AuthRoute from './AuthRoute';

/**
 * User Routes
 */
const UserRoutes = () => (
  <Switch>
    <AuthRoute path="/dashboard" component={DashboardPageContainer} />
    <AuthRoute path="/logout" component={LogoutPageContainer} />
    <AuthRoute path="/user/profile" component={ProfilePage} />
    <AuthRoute path="/user/settings" component={SettingsPage} />
  </Switch>
);

/**
 * Routes component, return frontend routes
 */
const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/reset" component={ResetPasswordPage} />
    <Route path="/register" component={RegisterPage} />
    <UserRoutes />
  </Switch>
);

export default Routes;
