import { FormGroup, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import "./signup.css";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const printValue = (e) => {
    e.preventDefault();
    console.log(
      `FirstName: ${firstName}, Lastname: ${lastName}, Email: ${email}, Username: ${userName}, Password: ${password}`
    );
  };

  return (
    <div className="signup-container">
      <div className="signup-container-text">
        <h1>Signup</h1>
        <Typography align="left">Welcome, we are happy to have you</Typography>
        <FormGroup>
          <TextField
            sx={{ m: 1.5 }}
            onChange={(e) => setFirstName(e.target.value)}
            // value={state}
            id="First-name"
            label="First Name"
            type="text"
          />

          <TextField
            sx={{ m: 1.5 }}
            onChange={(e) => setLastName(e.target.value)}
            id="last-name"
            label="Last Name"
            type="text"
          />

          <TextField
            sx={{ m: 1.5 }}
            id="e-mail"
            onChange={(e) => setEmail(e.target.value)}
            label="E-mail"
            type="email"
          />
          <TextField sx={{ m: 1.5 }} id="confirm-email" label="Confirm Email" type="email" />
          <TextField
            sx={{ m: 1.5 }}
            onChange={(e) => setUserName(e.target.value)}
            id="user-name"
            label="UserName"
            type="email"
          />

          <TextField
            sx={{ m: 1.5 }}
            id="outlined-password-input"
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            type="password"
          />
          <TextField
            sx={{ m: 1.5 }}
            id="confirm-password-input"
            label="Confirm Password"
            type="password"
          />
          <Button variant="contained" onClick={printValue}>
            Sign Up
          </Button>
        </FormGroup>
      </div>
    </div>
  );
};

export default Signup;
