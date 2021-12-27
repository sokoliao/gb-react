import { UserCredential } from "@firebase/auth";
import { createAction, createSlice } from "@reduxjs/toolkit";

export interface ProfileState {
  isChecked: boolean;
  isLoading: boolean;
  user?: UserCredential;
  error?: Error;
  message?: string;
}

const initialState: ProfileState = {
  isChecked: true,
  isLoading: false,
};

export interface NewUser {
  email: string;
  password: string;
}
export const userSignup = createAction<NewUser>("user/signup");
export const userSignupSuccess = createAction<UserCredential>(
  "user/signup-success"
);
export interface Error {
  code: string;
  message: string;
}
export const userSignupError = createAction<Error>("user/signup-error");

export const userSignOut = createAction("user/signout");
export const userSignOutSuccess = createAction("user/signout-success");
export const userSignOutError = createAction<Error>("user/signout-error");

export interface SignInPayload {
  email: string;
  password: string;
}
export const userSignIn = createAction<SignInPayload>("user/sign-in");
export type SignInSuccessPayload = UserCredential;
export const userSignInSuccess = createAction<SignInSuccessPayload>(
  "user/signin-success"
);
export const userSignInError = createAction<Error>("user/signin-error");

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    toggleCheckBox: (state) => {
      state.isChecked = !state.isChecked;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userSignup, (state) => {
      state.isLoading = true;
      state.user = undefined;
      state.message = undefined;
      state.error = undefined;
    });
    builder.addCase(userSignupSuccess, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.message = "Your record has been created successfully";
      state.error = undefined;
    });
    builder.addCase(userSignupError, (state, action) => {
      state.isLoading = false;
      state.user = undefined;
      state.message = undefined;
      state.error = action.payload;
    });
    builder.addCase(userSignIn, (state) => {
      state.isLoading = true;
      state.user = undefined;
      state.message = undefined;
      state.error = undefined;
    });
    builder.addCase(userSignInSuccess, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.message = "You logged in successfully";
      state.error = undefined;
    });
    builder.addCase(userSignInError, (state, action) => {
      state.isLoading = false;
      state.user = undefined;
      state.message = undefined;
      state.error = action.payload;
    });
    builder.addCase(userSignOut, (state) => {
      state.isLoading = true;
      state.message = undefined;
      state.error = undefined;
    });
    builder.addCase(userSignOutSuccess, (state) => {
      state.isLoading = false;
      state.message = "You have been signed out";
      state.error = undefined;
      state.user = undefined;
    });
    builder.addCase(userSignOutError, (state, action) => {
      state.isLoading = false;
      state.message = undefined;
      state.error = action.payload;
    });
  },
});

export const { toggleCheckBox } = profileSlice.actions;
