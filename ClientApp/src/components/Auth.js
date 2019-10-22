import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LockOutlined from '@material-ui/icons/LockOutlined'

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export function AccessDenied() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">Access Denied</Typography>
      </div>
    </Container>
  );
}   


export function ChangePassword() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5"> Change Password </Typography>
        <form noValidate>
          <TextField variant="outlined"  margin="normal" required fullWidth
            name="oldpassword" label="Old Password" id="oldpassword" autoComplete="username" autoFocus />            
          <Grid container>
            <Grid item xs>
              <Typography component="h5">Password requirements:</Typography>
              <ol>
                  <li>Minimum of 8 characters (Maximum 100 characters)</li>
                  <li>At least one number</li>
                  <li>At least one non-alphanumeric character</li>
                  <li>At least one upper-case character</li>
                  <li>At least one lower-case character</li>
              </ol>
            </Grid>
          </Grid>
          <TextField variant="outlined"  margin="normal" required fullWidth
            name="newpassword" label="New Password"  type="password" id="newpassword" />
          <TextField variant="outlined" margin="normal" required fullWidth
            name="newpassword2" label="Confirm Password" type="password" id="confirmpassword" />          
          <Button type="submit" fullWidth variant="contained"
            color="primary">
            Change Password
          </Button>
        </form>
      </div>
    </Container>
  );
}


export function ConfirmEmail() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
          <Typography component="h1" variant="h5">Confirm Email</Typography>
          <div>Thank you for confirming your email.</div>
      </div>
    </Container>
  );
}


export function ForgotPassword() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5"> Forgot Password </Typography>
        <form noValidate>
          <TextField variant="outlined"  margin="normal" required fullWidth
            name="email" label="Email Address" id="email" autoFocus />    
          <Button type="submit" fullWidth variant="contained"
            color="primary">
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}


export function LockedOut() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
          <Typography component="h1" variant="h5">Locked Out </Typography>
          <div>Your accounts is locked out for 15 minutes. Contact customer service for assistance.</div>
      </div>
    </Container>
  );
}


export function Login() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5"> Sign in </Typography>
        <form className={classes.form} noValidate>
          <TextField variant="outlined"  margin="normal" required fullWidth
            name="username" label="Username" id="username" autoComplete="username" autoFocus />
          <TextField variant="outlined" margin="normal" required fullWidth
            name="password" label="Password" type="password" id="password" autoComplete="current-password" />
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
          <Button type="submit" fullWidth variant="contained"
            color="primary" className={classes.submit}>
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">Forgot password?</Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://material-ui.com/">
            Your Website
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>  
      </Box>
    </Container>
  );
}


export function LoggedIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
          <Typography component="h1" variant="h5">Logged In </Typography>
          <div>You are logged in as "name"</div>
      </div>
    </Container>
  );
}


export function LoggedOut() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
          <Typography component="h1" variant="h5">Logged Out </Typography>
          <div>You are now logged out.</div>
          <div>Click here to return to the application.</div>
      </div>
    </Container>
  );
}


export function ResetPassword() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5"> Reset your password </Typography>
        <form noValidate>
          <TextField variant="outlined"  margin="normal" required fullWidth
            name="oldpassword" label="Old Password" id="oldpassword" autoComplete="username" autoFocus />            
          <Grid container>
            <Grid item xs>
              <Typography component="h5">Password requirements:</Typography>
              <ol>
                  <li>Minimum of 8 characters (Maximum 100 characters)</li>
                  <li>At least one number</li>
                  <li>At least one non-alphanumeric character</li>
                  <li>At least one upper-case character</li>
                  <li>At least one lower-case character</li>
              </ol>
            </Grid>
          </Grid>
          <TextField variant="outlined"  margin="normal" required fullWidth
            name="newpassword" label="New Password"  type="password" id="newpassword" />
          <TextField variant="outlined" margin="normal" required fullWidth
            name="newpassword2" label="Confirm Password" type="password" id="confirmpassword" />          
          <Button type="submit" fullWidth variant="contained"
            color="primary">
            Change Password
          </Button>
        </form>
      </div>
    </Container>
  );
}


export function ResetPasswordConfirmation() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">Reset Password Confirmation</Typography>
        <div>Your password has been reset. Please click here to log in</div>
      </div>
    </Container>
  );
}