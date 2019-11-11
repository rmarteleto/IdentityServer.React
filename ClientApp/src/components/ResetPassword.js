import React, { useState } from "react";
import {
  Container,
  Button,
  Typography,
  TextField,
  Grid
} from "@material-ui/core";
import useStyles from "../styles";

const ResetPassword = () => {
  const classes = useStyles();
  const [newPassword, setNewPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const ChangePasswordClick = e => {
    e.preventDefault();
    console.log(`New Pass: ${newPassword} | Confirm Pass: ${confirmPassword}`);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography variant="h5" className={classes.h5}>
          Reset your password
        </Typography>
        <form noValidate>
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
            Reset Password
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default ResetPassword;
