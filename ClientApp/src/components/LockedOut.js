import React from "react";
import { Container, Typography } from "@material-ui/core";
import useStyles from "../styles";

const LockedOut = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography variant="h5" className={classes.h5}>
          Locked Out
        </Typography>
        <Typography>
          Your accounts is locked out for 15 minutes. Contact customer service
          for assistance.
        </Typography>
      </div>
    </Container>
  );
};

export default LockedOut;
