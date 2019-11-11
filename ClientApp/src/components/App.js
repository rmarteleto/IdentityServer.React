import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";
import pink from "@material-ui/core/colors/pink";
import red from "@material-ui/core/colors/red";
import orange from "@material-ui/core/colors/orange";

import Login from "./Login";
import AccessDenied from "./AccessDenied";
import ChangePassword from "./ChangePassword";
import ConfirmEmail from "./ConfirmEmail";
import ForgotPassword from "./ForgotPassword";
import LockedOut from "./LockedOut";
import LoggedOut from "./LoggedOut";
import ResetPassword from "./ResetPassword";
import ResetPasswordConfirmation from "./ResetPasswordConfirmation";

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: pink,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
    spacing: 10
  },
  status: {
    danger: orange
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ['"Lato"', "sans-serif"].join(",")
  }
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
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
          <Route
            path="/resetpasswordconfirmation"
            component={ResetPasswordConfirmation}
          />
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

export default App;
