import React, { useState } from "react";
import {
  Container,
  Button,
  Typography,
  TextField,
  Grid
} from "@material-ui/core";
import useStyles from "../styles";

const ChangePassword = () => {
  const classes = useStyles();
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const ChangePasswordClick = e => {
    e.preventDefault();
    console.log(
      `Old Pass: ${oldPassword} | New Pass: ${newPassword} | Confirm Pass: ${confirmPassword}`
    );
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography variant="h5" className={classes.h5}>
          Change Password
        </Typography>
        <form noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            name="oldpassword"
            label="Old Password"
            id="oldpassword"
            autoComplete="username"
            autoFocus
            onChange={e => setOldPassword(e.target.value)}
          />
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
          <TextField
            margin="normal"
            required
            fullWidth
            name="newpassword"
            label="New Password"
            type="password"
            id="newpassword"
            onChange={e => setNewPassword(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="newpassword2"
            label="Confirm Password"
            type="password"
            id="confirmpassword"
            onChange={e => setConfirmPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={ChangePasswordClick}
          >
            Change Password
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default ChangePassword;
