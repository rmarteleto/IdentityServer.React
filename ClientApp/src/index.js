import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));
// import { Route, BrowserRouter } from 'react-router-dom';
// import registerServiceWorker from './registerServiceWorker';

// import { theme } from './theme';

// import { AccessDenied, ChangePassword, ConfirmEmail, ForgotPassword,
//          LockedOut, Login, LoggedOut, ResetPassword, ResetPasswordConfirmation }
//   from './components/Auth';
// import { resetWarningCache } from 'prop-types';
// import { MuiThemeProvider } from '@material-ui/core/styles';

// const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
// const rootElement = document.getElementById('root');

// ReactDOM.render(
//   <MuiThemeProvider theme={theme}>
//     <BrowserRouter basename={baseUrl}>
//       <div>
//         <Route exact path="/" component={Login} />
//         <Route path="/accessdenied" component={AccessDenied} />
//         <Route path="/changepassword" component={ChangePassword} />
//         <Route path="/confirmemail" component={ConfirmEmail} />
//         <Route path="/forgotpassword" component={ForgotPassword} />
//         <Route path="/lockedout" component={LockedOut} />
//         <Route path="/loggedout" component={LoggedOut} />
//         <Route path="/resetpassword" component={ResetPassword} />
//         <Route path="/resetpasswordconfirmation" component={ResetPasswordConfirmation} />
//       </div>
//     </BrowserRouter>
//   </MuiThemeProvider>,
//   rootElement);

// registerServiceWorker();
