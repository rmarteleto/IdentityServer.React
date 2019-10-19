import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './theme';

import Login from './components/Login';
import { AccessDenied, ChangePassword, ConfirmEmail, ForgotPassword, 
         LockedOut, LoggedOut, ResetPassword, ResetPasswordConfirmation }
from './components/Auth';
import { resetWarningCache } from 'prop-types';

import './custom.css'

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <BrowserRouter basename={baseUrl}>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/accessdenied" component={AccessDenied} />
        <Route path="/changepassword" component={ChangePassword} />
        <Route path="/confirmemail" component={ConfirmEmail} />
        <Route path="/forgotpassword" component={ForgotPassword} />
        <Route path="/lockedout" component={LockedOut} />
        <Route path="/loggedout" component={LoggedOut} />
        <Route path="/resetpassword" component={ResetPassword} />
        <Route path="/resetpasswordconfirmation" component={ResetPasswordConfirmation} />
      </div>
    </BrowserRouter>
  </MuiThemeProvider>,
  rootElement);

registerServiceWorker();

