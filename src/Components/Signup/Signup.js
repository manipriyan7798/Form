import { FormGroup, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import "./signup.css";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassWord, setConfirmPassWord] = useState("");


  const submitRegisterValue = (e) => {
    e.preventDefault();
    if (password == confirmPassWord) {
      console.log("signUp details",
        `{FirstName: ${firstName}, Lastname: ${lastName}, Email: ${email}, Username: ${userName}, Password: ${password}}`
      );
    } else {
      alert("password confirm password doesn't match")
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-container-text">
        <h1>Signup</h1>
        <FormGroup>
          <TextField
            sx={{ m: 1.5 }}
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
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
            value={lastName}
          />

          <TextField
            sx={{ m: 1.5 }}
            id="e-mail"
            onChange={(e) => setEmail(e.target.value)}
            label="E-mail"
            type="email"
            value={email}
          />
          <TextField sx={{ m: 1.5 }} id="confirm-email" label="Confirm Email" type="email" />
          <TextField
            sx={{ m: 1.5 }}
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            id="user-name"
            label="UserName"
            type="text"
          />

          <TextField
            sx={{ m: 1.5 }}
            id="outlined-password-input"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            label="Password"
            type="password"
          />
          <TextField
            sx={{ m: 1.5 }}
            id="confirm-password-input"
            label="Confirm Password"
            type="password"
            value={confirmPassWord}
            onChange={(e) => setConfirmPassWord(e.target.value)}
          />
          <Button variant="contained" onClick={submitRegisterValue}>
            Sign Up
          </Button>
        </FormGroup>
      </div>
    </div>
  );
};

export default Signup;
