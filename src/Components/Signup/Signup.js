import React, { useState } from "react";
import moment from "moment";
import { Button, Form } from "react-bootstrap";
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
  const [genderValidation, setGenderValidation] = useState(false);
  const [birthdayValidation, setbirthdayValidation] = useState(false);

  const validate = (e) => {
    if (firstName === "" || firstName === undefined) {
      setFirstNameValidation(true);
    }
    if (lastName === "" || lastName === undefined) {
      setLastNameValidation(true);
    }
    if (email === "" || email === undefined) {
      setEmailValidation(true);
    }
    if (gender === "" || gender === undefined) {
      setGenderValidation(true);
    }
    if (birthday === "" || birthday === undefined) {
      setbirthdayValidation(true)
    }
    if (password === "" || password === undefined) {
      setPasswordValidation(true);
    }
    if (confirmPassword === "" || confirmPassword === undefined) {
      setConfirmpasswordValidation(true);
    }

    if (!firstName || !lastName || !email || !genderValidation || !password || !confirmPassword) {
      return false;
    }

    //if password & confirmPassword not equal
    if (password !== confirmPassword) {
      alert("password and confirm password is not equal");
    }
    if (
      firstName.length > 0 &&
      lastName.length > 0 &&
      email.length > 0 &&
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

      setFirstName("");
      setLasttName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setBirthday("");
      setGender("");

      // console.log(new Date());
    }
    return true;
  };

  const submitButtonHandler = (e) => {
    e.preventDefault();
    if (firstName === "" || lastName === "" || birthday === "" || email === "" || password === "") {
      alert("Please enter all the details");
    } else {
      if (password === confirmPassword) {
        console.log(JSON.stringify(
          { firstName: firstName, lastName: lastName, date_of_Birth: birthday, mail: email, password: password, gender: gender }
        ));
        setFirstName("");
        setLasttName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setBirthday("");
      } else {
        alert("password doesn't match");
      }
    }

  };


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
      <form onSubmit={validate} >
        {/* first name field starts */}
        <Form.Group className="mb-3" controlId="formBasicname">
          <Form.Label>First Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="First Name"
            name="firstName"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value)
              setFirstNameValidation(false)
            }} />
          {/* name Validation */}
          {firstNameValidation &&
            <Form.Text className="text-danger">
              First Name is Required
            </Form.Text>
          }
        </Form.Group>
        {/* first name field ends */}

        {/* Last name field starts */}
        <Form.Group className="mb-3" controlId="lastNamefield">
          <Form.Label>Last Name :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={lastName}
            onChange={(e) => {
              setLasttName(e.target.value)
              setLastNameValidation(false)
            }}
            placeholder="Last Name"
          />
          {/* name Validation */}
          {lastNameValidation &&
            <Form.Text className="text-danger">
              Last Name is Required
            </Form.Text>
          }
        </Form.Group>
        {/* Last name field ends */}

        {/* Date picker field starts */}
        <Form.Group className="mb-3" controlId="formBasicname">
          <Form.Label>Enter Date of birth:</Form.Label>
          <Form.Control
            type="date"
            name="birthday"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            placeholder="Birthday"
            maxLength={new Date()}
          />
          {/* name Validation */}
          {birthdayValidation &&
            <Form.Text className="text-danger">
              Date of birth is Required
            </Form.Text>
          }
        </Form.Group>
        {/* Date picker field ends */}


        {/* gender radio button starts*/}
        <Form.Check
          inline
          label="Male"
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.id)}
          type="radio"
          id={`inline-radio-1`}
        />
        <Form.Check
          inline
          label="Female"
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.id)}
          type="radio"
          id={`inline-radio-2`}
        />

        {
          genderValidation &&
          <Form.Text className="text-danger">
            Gender is Required
          </Form.Text>
        }
        {/* gender radio button ends */}

        {/* email validation starts */}
        <Form.Group className="mb-3" controlId="emailfield">
          <Form.Label>Email :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last Name"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setEmailValidation(false)
            }}
            placeholder="Email"
          />
          {/* name Validation */}
          {emailValidation &&
            <Form.Text className="text-danger">
              Email ID is Required
            </Form.Text>
          }
        </Form.Group>

        {/* Password field starts */}
        <Form.Group className="mb-3" controlId="passwordField">
          <Form.Label htmlFor="inputPassword5">Password</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            minLength={6}
          />
          {/* passowrd validation */}
          {
            passwordValidation &&
            <Form.Text className="text-danger">
              Password is Required
            </Form.Text>
          }
        </Form.Group>
        {/* Password filed ends */}


        {/* confirm password starts */}
        <Form.Group className="mb-3" controlId="cpasswordField">
          <Form.Label htmlFor="inputPassword5"  >Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            minLength={6}
          />
          {/* passowrd validation */}
          {
            confirmpasswordValidation &&
            <Form.Text className="text-danger">
              Confirm Password is Required
            </Form.Text>
          }
        </Form.Group>
        {/* confirm password ends */}

        <Button onClick={validate} variant="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Signup;
