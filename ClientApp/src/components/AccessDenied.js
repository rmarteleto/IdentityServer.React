import React from "react";
import { Container, Typography } from "@material-ui/core";
import useStyles from "../styles";

const AccessDenied = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography variant="h5" className={classes.h5}>
          Access Denied
        </Typography>
      </div>
    </Container>
  );
};

export default AccessDenied;
