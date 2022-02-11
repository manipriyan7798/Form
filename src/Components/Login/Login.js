import React from "react";
import { FormGroup, Button, TextField, Typography, InputAdornment } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "../Signup/signup.css";

const Login = () => {
  return (
    <div>
      <FormGroup>
        <TextField
          sx={{ m: 1.5 }}
          //   value={firstName}
          //   onChange={(e) => setFirstName(e.target.value)}
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
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <VisibilityOffIcon className="icon-clr" />
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained" className="active-btn">
          Sign Up
        </Button>
      </FormGroup>
    </div>
  );
};

export default Login;
