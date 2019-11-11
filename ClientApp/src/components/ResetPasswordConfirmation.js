import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography } from "@material-ui/core";
import useStyles from "../styles";

const ResetPasswordConfirmation = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography variant="h5" className={classes.h5}>
          Reset Password Confirmation
        </Typography>
        <Typography>Your password has been reset.</Typography>
        <Typography>
          Please click <Link to="/">here</Link> to log in.
        </Typography>
      </div>
    </Container>
  );
};

export default ResetPasswordConfirmation;
