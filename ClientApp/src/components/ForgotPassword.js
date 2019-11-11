import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import useStyles from "../styles";

const ForgotPassword = () => {
  const classes = useStyles();
  const [email, setEmail] = useState();

  const SubmitClick = e => {
    e.preventDefault();
    console.log(`Email Address: ${email}`);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography variant="h5" className={classes.h5}>
          Forgot Password
        </Typography>
        <form noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            name="email"
            label="Email Address"
            id="email"
            autoFocus
            onChange={e => setEmail(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={SubmitClick}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default ForgotPassword;
