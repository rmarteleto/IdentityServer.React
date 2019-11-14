import React, { useState } from "react";
import {
    Container,
    Button,
    Avatar,
    Typography,
    TextField,
    Checkbox,
    Grid,
    Box,
    Link,
    FormControlLabel
} from "@material-ui/core";
import { LockOutlined, LockOpenOutlined } from "@material-ui/icons";
import useStyles from "../styles";
import axios from "axios";

const Login = () => {
    const classes = useStyles();
    const loggedInUser = useState()[0];
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const [rememberMe, setRememberMe] = useState(false);

    const logoutClick = e => {
        e.preventDefault();
        axios
            .post("/api/account/logout")
            .then(function (response) {
                console.log(response);
                console.log("logout clicked");
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const loginClick = e => {
        e.preventDefault();
        axios.post("/api/account/login",
            {
                Username: userName,
                Password: password,
                ReturnUrl: "",
                RememberMe: rememberMe
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    }
            })
            .then(function (response) {
                console.log(response);
                console.log(`Username: ${userName} | Password: ${password}`);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const loggedInMessage = (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOpenOutlined />
                </Avatar>
                <Typography variant="h5" className={classes.h5}>
                    Logged In
        </Typography>
                <Typography>You are logged in as {loggedInUser}</Typography>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={logoutClick}
                >
                    Logout
        </Button>
            </div>
        </Container>
    );

    const loginForm = (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlined />
                </Avatar>
                <Typography variant="h5" className={classes.h5}>
                    Sign in
        </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="username"
                        label="Username"
                        id="username"
                        autoComplete="username"
                        autoFocus
                        onChange={e => setUserName(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                value="remember"
                                color="primary"
                                onChange={e => setRememberMe(e.target.checked)}
                            />
                        }
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={loginClick}
                    >
                        Sign In
          </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
              </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Typography variant="body2" color="textSecondary" align="center">
                    {"Copyright © "}
                    <Link color="inherit" href="https://material-ui.com/">
                        Your Website
          </Link>{" "}
                    {new Date().getFullYear()}
                    {"."}
                </Typography>
            </Box>
        </Container>
    );

    return loggedInUser == null ? loginForm : loggedInMessage;
};

export default Login;
