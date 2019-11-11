import React from "react";
import { Container, Typography } from "@material-ui/core";
import useStyles from "../styles";

const ConfirmEmail = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography variant="h5" className={classes.h5}>
          Confirm Email
        </Typography>
        <Typography>Thank you for confirming your email.</Typography>
      </div>
    </Container>
  );
};

export default ConfirmEmail;
