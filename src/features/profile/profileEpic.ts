import { Action } from "redux";
import { catchError, filter, from, map, mergeMap, Observable, of } from "rxjs";
import { userSignup, userSignupError, userSignupSuccess } from "./profileSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { fb } from "../../app/firebase";

const auth = getAuth(fb);

export const signUpEpic = (actions$: Observable<Action>) =>
  actions$.pipe(
    filter(userSignup.match),
    mergeMap((newUser) =>
      from(
        createUserWithEmailAndPassword(
          auth,
          newUser.payload.email,
          newUser.payload.password
        )
      ).pipe(
        map((credential) => userSignupSuccess(credential)),
        catchError((error) =>
          of(
            userSignupError({
              code: error.code,
              message: error.message,
            })
          )
        )
      )
    )
  );
