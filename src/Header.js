import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { handleLogin, handleLogout } from "./store/authSlice";


export default function Header() {
  const dispatch = useDispatch();
  const logMe = useSelector((state) => state.auth.isLogged);
  const countMe = useSelector((state) => state.counter.count);

  return (
    <header>
      <div>{countMe}</div>
      {logMe ? (
        <>
          <strong>Hello new user</strong>
          <button
            onClick={() => {
              dispatch(handleLogout());
            }}
          >
            logout
          </button>
        </>
      ) : (
        <button
          onClick={() => {
            dispatch(handleLogin());
          }}
        >
          login
        </button>
      )}
    </header>
  );
};

