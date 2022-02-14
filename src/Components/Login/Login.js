import React from "react";
import { FormGroup, Button, TextField, Typography, InputAdornment } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { useState } from "react";
import "../Signup/signup.css";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [viewPassword, setViewPassword] = useState(false);

  const handleClickViewPassword = () => {
    setViewPassword(!viewPassword);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    // e.setUserName = "";
  };
  return (
    <div>
      <FormGroup>
        <TextField
          sx={{ m: 1.5 }}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
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
          id="password-input"
          label="Password"
          type="password"
          type={viewPassword ? "text" : "password"}
          value={passWord}
          onChange={(e) => setPassWord(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" onClick={handleClickViewPassword}>
                {viewPassword ? (
                  <Visibility className="icon-clr" />
                ) : (
                  <VisibilityOffIcon className="icon-clr" />
                )}
              </InputAdornment>
            ),
          }}
        />
        <Button onClick={formSubmit} variant="contained" className="active-btn">
          Sign Up
        </Button>
      </FormGroup>
    </div>
  );
};

export default Login;
