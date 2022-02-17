// import { FormGroup, Button, TextField } from "@mui/material";
// import { useState } from "react";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";

// import "./signup.css";

// const Signup = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [userName, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassWord, setConfirmPassWord] = useState("");
//   const [value, setValue] = useState("female");

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };

//   const submitRegisterValue = (e) => {
//     e.preventDefault();
//     if (password === confirmPassWord) {
//       console.log(
//         "signUp details",
//         `{FirstName: ${firstName}, Lastname: ${lastName}, Email: ${email}, Username: ${userName}, Password: ${password}}`
//       );
//     } else {
//       alert("password confirm password doesn't match");
//     }

//     // Password validation
//     // if (password.length <= 6) {
//     //   console.log("strong password");
//     // } else {
//     //   alert("password isn't strong");
//     // }
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-container-text">
//         <h1>Signup</h1>
//         <FormGroup>
//           <TextField
//             sx={{ m: 1.5 }}
//             onChange={(e) => setFirstName(e.target.value)}
//             value={firstName}
//             id="First-name"
//             label="First Name"
//             type="text"
//           />

//           <TextField
//             sx={{ m: 1.5 }}
//             onChange={(e) => setLastName(e.target.value)}
//             id="last-name"
//             label="Last Name"
//             type="text"
//             value={lastName}
//           />
//           <FormControl>
//             <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
//             <RadioGroup
//               aria-labelledby="demo-controlled-radio-buttons-group"
//               name="controlled-radio-buttons-group"
//               value={value}
//               onChange={handleChange}
//             >
//               <FormControlLabel value="female" control={<Radio />} label="Female" />
//               <FormControlLabel value="male" control={<Radio />} label="Male" />
//             </RadioGroup>
//           </FormControl>

//           <TextField
//             sx={{ m: 1.5 }}
//             id="e-mail"
//             onChange={(e) => setEmail(e.target.value)}
//             label="E-mail"
//             type="email"
//             value={email}
//           />
//           <TextField sx={{ m: 1.5 }} id="confirm-email" label="Confirm Email" type="email" />
//           <TextField
//             sx={{ m: 1.5 }}
//             onChange={(e) => setUserName(e.target.value)}
//             value={userName}
//             id="user-name"
//             label="UserName"
//             type="text"
//           />

//           <TextField
//             sx={{ m: 1.5 }}
//             id="outlined-password-input"
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//             label="Password"
//             type="password"
//           />
//           <TextField
//             sx={{ m: 1.5 }}
//             id="confirm-password-input"
//             label="Confirm Password"
//             type="password"
//             value={confirmPassWord}
//             onChange={(e) => setConfirmPassWord(e.target.value)}
//           />
//           <Button variant="contained" onClick={submitRegisterValue}>
//             Sign Up
//           </Button>
//         </FormGroup>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import { useState } from "react";
import "./signup.css";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");

  const [firstNameValidation, setFirstNameValidation] = useState(false);
  const [lastNameValidation, setLastNameValidation] = useState(false);

  const [emailValidation, setEmailValidation] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(false);
  const [confirmpasswordValidation, setConfirmpasswordValidation] = useState(false);
  // const [genderValidation, setGenderValidation] = useState(false);
  // const [dobValidation, setDobValidation] = useState(false);

  const validate = (e) => {
    e.preventDefault();
    if (firstName === "" || firstName === undefined) {
      setFirstNameValidation(true);
    } else {
      setFirstNameValidation(false);
    }
    if (lastName === "" || lastName === undefined) {
      setLastNameValidation(true);
    } else {
      setLastNameValidation(false);
    }
    if (email === "" || email === undefined) {
      setEmailValidation(true);
    } else {
      setEmailValidation(false);
    }
    // if (dob === "" || dob === undefined) {
    //   setDobValidation(true)
    // }
    if (password === "" || password === undefined) {
      setPasswordValidation(true);
    } else {
      setPasswordValidation(false);
    }
    if (confirmPassword === "" || confirmPassword === undefined) {
      setConfirmpasswordValidation(true);
    } else {
      setConfirmpasswordValidation(false);
    }

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      return false;
    }

    //if password & confirmPassword not equal
    if (password !== confirmPassword) {
      alert("password and confirm password is not equal");
    }
    if (
      firstName.length >= 1 &&
      lastName.length >= 1 &&
      email.length >= 1 &&
      password === confirmPassword
    ) {
      console.log(
        JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          date_of_Birth: birthday,
          mail: email,
          password: password,
          gender: gender,
        })
      );
    }
    return true;
  };

  const submitButtonHandler = (e) => {
    if (firstName === "" || lastName === "" || birthday === "" || email === "" || password === "") {
      alert("Please enter all the details");
    } else {
      if (password === confirmPassword) {
        e.preventDefault();
        console.log(
          `FirstName: ${firstName}, LastName: ${lastName} , Date-of-Birth: ${birthday}, mail: ${email}, password: ${password}, Gender; ${gender}`
        );
      } else {
        alert("password doesn't match");
      }
    }

    setFirstName("");
    setLasttName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setBirthday("");
  };

  //Other Way for each validation
  // const onSubmithandler = (event) => {
  //   event.preventDefault();

  //   if (validate()) {
  //     console.log(JSON.stringify(
  //       { firstName: firstName, lastName: lastName, date_of_Birth: birthday, mail: email, password: password, gender: gender }
  //     )
  //     );
  //   }

  // }

  const checkboxChangeHandler = (e) => {
    // to find out if it's checked or not; returns true or false
    const checked = e.target.checked;

    // to get the checked value
    const checkedValue = e.target.value;

    // to get the checked name
    const checkedName = e.target.name;

    if (checked === true) {
      console.log(checkedName);
    } else {
      console.log("not-checked");
    }
  };

  return (
    <div className="signup-container">
      <h1>Signup</h1>
      <form onSubmit={validate} action="">
        <label htmlFor="">FirstName</label>
        <input
          type="text"
          label="first-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Firstname"
        />
        {firstNameValidation && <div style={{ color: "red" }}>firstName is Required</div>}
        <br />
        <br />
        <label htmlFor="">LastName</label>
        <input
          type="text"
          label="last-Name"
          value={lastName}
          onChange={(e) => setLasttName(e.target.value)}
          placeholder="LastName"
        />
        {lastNameValidation && <div style={{ color: "red" }}>firstName is Required</div>}
        <br />
        <br />
        <label htmlFor="">DOB</label>
        <input
          type="date"
          name="birthday"
          id="birthday"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          placeholder="Birthday"
        />
        <br />
        <br />
        <p>Gender</p>
        <label htmlFor="">Male</label>
        <input
          type="radio"
          name="gender"
          value={gender}
          id="male"
          onChange={(e) => setGender(e.target.id)}
        />
        <label htmlFor="">Female</label>
        <input
          type="radio"
          name="gender"
          id="female"
          value={gender}
          onChange={(e) => setGender(e.target.id)}
        />

        <br />
        <br />
        <label htmlFor="">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        {emailValidation && <div style={{ color: "red" }}>Email ID is Required</div>}
        <br />
        <br />
        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          minLength={6}
        />
        {passwordValidation && <div style={{ color: "red" }}>password is Required</div>}
        <br />
        <br />
        <label htmlFor="">Confirm Password</label>
        <input
          type="password"
          name="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
        />
        {confirmpasswordValidation && (
          <div style={{ color: "red" }}>confirmPassword is Required</div>
        )}

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Signup;
