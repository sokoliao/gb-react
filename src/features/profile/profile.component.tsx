import React, { useState } from "react";
import { Col, Form, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleCheckBox,
  userSignIn,
  userSignOut,
  userSignup,
} from "./profileSlice";
import { AppDispatch, RootState } from "../../app/store";

interface ProfileForm {
  email: string;
  password: string;
}
const PROFILE_FORM_EMPTY_VALUE: ProfileForm = {
  email: "",
  password: "",
};

export const ProfileComponent: React.FC<{}> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isChecked = useSelector((state: RootState) => state.profile.isChecked);
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(toggleCheckBox());
  };
  const [creds, setCreds] = useState<ProfileForm>(PROFILE_FORM_EMPTY_VALUE);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCreds((c) => {
      return { ...c, email: e.target.value };
    });
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCreds((c) => {
      return { ...c, password: e.target.value };
    });
  };
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      userSignup({
        email: creds.email,
        password: creds.password,
      })
    );
    setCreds((_) => PROFILE_FORM_EMPTY_VALUE);
  };
  const handleSignUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(
      userSignup({
        email: creds.email,
        password: creds.password,
      })
    );
    setCreds((_) => PROFILE_FORM_EMPTY_VALUE);
  };
  const handleSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(
      userSignIn({
        email: creds.email,
        password: creds.password,
      })
    );
    setCreds((_) => PROFILE_FORM_EMPTY_VALUE);
  };
  const handleSignOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(userSignOut());
  };
  const { user, message, error, isLoading } = useSelector(
    (state: RootState) => state.profile
  );
  return (
    <Col>
      {isLoading && <h1>Loading...</h1>}
      {error && (
        <Alert
          variant="danger"
          className="m-3"
        >{`${error.code} ${error.message}`}</Alert>
      )}
      {message && (
        <Alert variant="success" className="m-3">
          {message}
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Col} controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Your email"
            onChange={handleEmailChange}
            value={creds.email}
          ></Form.Control>
        </Form.Group>
        <Form.Group as={Col} controlId="password" hidden={!!user}>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            value={creds.password}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="m-3" controlId="isCheckedCheckbox">
          <Form.Check
            type="checkbox"
            label="Check me, please"
            onChange={handleCheck}
            checked={isChecked}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={handleSignUp}
          disabled={!!user}
        >
          SignUp
        </Button>
        <Button
          variant="primary"
          className="m-3"
          type="submit"
          onClick={handleSignIn}
          disabled={!!user}
        >
          SignIn
        </Button>
        <Button
          variant="primary"
          type="submit"
          onClick={handleSignOut}
          disabled={!user}
        >
          SignOut
        </Button>
      </Form>
    </Col>
  );
};
