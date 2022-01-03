import { signInWithEmailAndPassword } from "@firebase/auth";
import { Action } from "@reduxjs/toolkit";
import { catchError, filter, from, map, mergeMap, Observable, of } from "rxjs";
import { auth } from "../../app/firebase";
import { userSignIn, userSignInError, userSignInSuccess } from "./profileSlice";

export const signInEpic = (actions$: Observable<Action>) =>
  actions$.pipe(
    filter(userSignIn.match),
    mergeMap((signIn) =>
      from(
        signInWithEmailAndPassword(
          auth,
          signIn.payload.email,
          signIn.payload.password
        )
      ).pipe(
        map((credential) => userSignInSuccess(credential)),
        catchError((error) =>
          of(userSignInError({ code: error.code, message: error.message }))
        )
      )
    )
  );
