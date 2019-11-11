import React from "react";
import { Container, Typography } from "@material-ui/core";
import useStyles from "../styles";

const LoggedOut = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography variant="h5" className={classes.h5}>
          Logged Out
        </Typography>
        <Typography>You are now logged out.</Typography>
        <Typography>Click here to return to the application.</Typography>
      </div>
    </Container>
  );
};

export default LoggedOut;
