import { getAuth, signOut } from "@firebase/auth";
import { Action } from "@reduxjs/toolkit";
import { catchError, filter, from, map, mergeMap, Observable, of } from "rxjs";
import { auth, fb } from "../../app/firebase";
import {
  userSignOut,
  userSignOutError,
  userSignOutSuccess,
} from "./profileSlice";

export const signOutEpic = (actions$: Observable<Action>) =>
  actions$.pipe(
    filter(userSignOut.match),
    mergeMap((_) =>
      from(signOut(auth)).pipe(
        map((_) => userSignOutSuccess()),
        catchError((error) =>
          of(
            userSignOutError({
              code: error.code,
              message: error.message,
            })
          )
        )
      )
    )
  );
