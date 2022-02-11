import React from "react";
import "./signup.css";
import { FormGroup, Button, TextField, Typography, InputAdornment } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useState } from "react";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  function SubmitButton() {
    if (firstName && lastName && email) {
      return (
        <Button variant="contained" className="active-btn">
          Sign Up
        </Button>
      );
    } else {
      return (
        <Button disabled className="disable-btn">
          Sign Up
        </Button>
      );
    }
  }

  // function handleChange(e) {
  //   e.preventDefault();

  //   setFirstName(e.target.value);
  // }

  return (
    <div className="signup-container">
      <div className="signup-container-text">
        <h1>Signup</h1>
        <Typography align="left">Welcome, we are happy to have you</Typography>
        <FormGroup>
          <TextField
            sx={{ m: 1.5 }}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            id="first-name"
            label="First Name"
            type="text"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {/* <PersonOutlineIcon className="icon-clr" /> */}
                </InputAdornment>
              ),
            }}
          />
          <TextField
            sx={{ m: 1.5 }}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            id="last-name"
            label="Last Name"
            type="text"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {/* <PersonOutlineIcon className="icon-clr" /> */}
                </InputAdornment>
              ),
            }}
          />
          <TextField
            sx={{ m: 1.5 }}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            // onChange={handleChange}
            id="e-mail"
            label="E-mail"
            type="email"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {/* <MailOutlineIcon className="icon-clr" /> */}
                </InputAdornment>
              ),
            }}
          />
          <TextField
            sx={{ m: 1.5 }}
            id="confirm-email"
            label="Confirm Email"
            type="email"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {/* <MailOutlineIcon className="icon-clr" /> */}
                </InputAdornment>
              ),
            }}
          />
          <TextField
            sx={{ m: 1.5 }}
            id="user-name"
            value={email}
            label="UserName"
            type="email"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AccountCircleIcon className="icon-clr" />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            sx={{ m: 1.5 }}
            id="password-input"
            label="Password"
            type="password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <VisibilityOffIcon className="icon-clr" />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            sx={{ m: 1.5 }}
            id="confirm-password-input"
            label="Confirm Password"
            type="password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <VisibilityOffIcon className="icon-clr" />
                </InputAdornment>
              ),
            }}
          />
          <SubmitButton />
        </FormGroup>
      </div>
    </div>
  );
};

export default Signup;
